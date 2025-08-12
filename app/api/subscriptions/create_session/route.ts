import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";
import { sendSubscriptionFormEmail } from "@/lib/email";

const stripe: Stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-06-30.basil",
});

export async function POST(req: NextRequest) {
    try {
        const data = await req.json();
        const { firstName, lastName, email, dob, postcode, phone } = data;

        // const priceId = "price_1Rq33SS5oAc2FeByuyKsnsog" // sandbox
        const priceId = process.env.STRIPE_PRICE_ID;

        // Fetch user email from Clerk
        if (!email || !firstName || !lastName || !dob || !postcode) {
            return NextResponse.json(
                { error: "Incomplete user information" },
                { status: 400 }
            );
        }

        // Send form data email before proceeding to Stripe
        try {
            await sendSubscriptionFormEmail({
                firstName,
                lastName,
                email,
                dob,
                postcode,
                phone,
                ...data, // in case there are extra fields
            });
        } catch (emailError) {
            console.error("Failed to send subscription form email:", emailError);
            // Optionally, you could return an error here if email is critical
        }

        let customerId;

        // Check if customer already exists
        const existingCustomers = await stripe.customers.list({
            email: email,
            limit: 1,
        });

        if (existingCustomers.data.length > 0) {
            // Customer exists, use the existing customer ID
            customerId = existingCustomers.data[0].id;
            // Optionally, update the customer with new data
            await stripe.customers.update(customerId, {
                name: `${firstName} ${lastName}`,
                phone: phone,
                address: {
                    postal_code: postcode,
                },
                metadata: {
                    dob: dob,
                },
            });
        } else {
            // Customer does not exist, create a new one
            const customer = await stripe.customers.create({
                email: email,
                name: `${firstName} ${lastName}`,
                phone: phone,
                address: {
                    postal_code: postcode,
                },
                metadata: {
                    dob: dob,
                },
            });
            customerId = customer.id;
        }


        // Get the referer (original page) from headers
        const referer =
            req.headers.get("referer") || `${process.env.NEXT_PUBLIC_BASE_URL}`;

        // Create a Stripe Checkout Session
        let session;
        try {
            session = await stripe.checkout.sessions.create({
                payment_method_types: ["card"],
                line_items: [
                    {
                        price: priceId,
                        quantity: 1,
                    },
                ],
                mode: "subscription",
                customer: customerId,
                success_url: `${process.env.NEXT_PUBLIC_BASE_URL}/for-members/success?session_id={CHECKOUT_SESSION_ID}`,
                cancel_url: referer,
                custom_text: {
                    submit: {
                        message:
                            "You will soon receive an email about next steps. Please allow a few minutes for the transaction to reflect in your account. For any issues or assistance, feel free to reach out to us at aussupport@onesto.co",
                    },
                },
            });
        } catch (stripeError: any) {
            // If Stripe session creation fails, redirect to success page with error param
            const errorMsg = encodeURIComponent(
                stripeError?.message || "Stripe error"
            );
            return NextResponse.json({
                url: `${process.env.NEXT_PUBLIC_BASE_URL}/for-members/success?error=${errorMsg}`,
            });
        }

        // Respond with the session URL
        return NextResponse.json({ url: session.url });
    } catch (error: any) {
        console.error("Error creating Stripe session:", error);
        return NextResponse.json(
            { error: "Internal server error" },
            { status: 500 }
        );
    }
}
