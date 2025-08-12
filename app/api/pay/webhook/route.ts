import { NextRequest, NextResponse } from 'next/server';
import Stripe from 'stripe';
import { sendEmail } from '@/lib/email';

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-07-30.basil',
});

const relevantEvents = new Set([
    'checkout.session.completed', 'charge.succeeded'
]);

async function handleSuccessfulPayment(customerEmail: string | null) {
    if (customerEmail) {
        const emailHtml = `
        <!DOCTYPE html>
<html>
<head>
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #ddd; border-radius: 8px; }
    .header { text-align: center; padding-bottom: 20px; }
    .button { display: inline-block; background-color: #007bff; color: #ffffff; padding: 10px 20px; text-decoration: none; border-radius: 5px; }
    .footer { text-align: center; margin-top: 30px; font-size: 0.8em; color: #777; }
    .logo { max-width: 120px; margin: 10px; }
    .logo-top { max-width: 160px; margin: 10px auto; display: block; }
    ul { padding-left: 20px; }
  </style>
</head>
<body>
  <div class="container">
    <p style="text-align: center;">
      <a href="https://www.onesto.co">
        <img src="https://www.onesto.co/logo.png" alt="Onesto Logo" class="logo-top">
      </a>
    </p>
    <div class="header">
      <h2>Thank You for Your Purchase!</h2>
    </div>
    <p>Dear Purchaser,</p>
    <p>Thank you for purchasing the annual package of One Member Benefits!</p>
    <p>You can download the Onesto app on the App Store or PlayStore:</p>
    <p style="text-align: center;">
      <a href="https://apps.apple.com/au/app/one-member-benefits/id1660481919">
        <img src="https://onesto.co/appstore.png" alt="Download on App Store" class="logo">
      </a>
      <a href="https://play.google.com/store/apps/details?id=com.memberbenefits">
        <img src="https://onesto.co/gplay.png" alt="Download on Google Play Store" class="logo">
      </a>
    </p>

    <h3>How to Activate Your Benefits:</h3>
    <ul>
      <li>
        Download the app:
        <a href="https://apps.apple.com/au/app/one-member-benefits/id1660481919">App Store</a> |
        <a href="https://play.google.com/store/apps/details?id=com.memberbenefits">Google Play</a>
      </li>
      <li>Create an account using this same email address: <strong>${customerEmail}</strong></li>
      <li>Select <strong>One Member</strong> from the list of Member Platforms</li>
      <li>Enter the same Date of Birth and Postcode you just entered in the previous form</li>
      <li>Upload an ID Document for KYC/AML. This is required as we will be creating a PAYID-enabled digital bank account for you. We will share more details in an email shortly.</li>
    </ul>

    <p>For more information, please contact <a href="mailto:aussupport@onesto.co">aussupport@onesto.co</a>.</p>
    <div class="footer">
      <p>This is an automated email, please do not respond to this.</p>
    </div>
  </div>
</body>
</html>
    `;

        await sendEmail({
            to: customerEmail,
            subject: 'Your One Member Benefits Annual Package Purchase',
            htmlBody: emailHtml,
        });
        console.log(`Email sent to ${customerEmail}`);
    } else {
        console.warn('No customer email found for event.');
    }
}

export async function POST(req: NextRequest) {
    const body = await req.text();
    // console.log('-----------> Webhook body:', body);
    const sig = req.headers.get('stripe-signature') as string;
    const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET!;

    let event: Stripe.Event;

    try {
        event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
    } catch (err: any) {
        console.error(`Webhook Error: ${err.message}`);
        return new NextResponse(`Webhook Error: ${err.message}`, { status: 400 });
    }
    // console.log('-----------> Received event:', event);

    if (relevantEvents.has(event.type)) {
        try {
            switch (event.type) {
                case 'checkout.session.completed':
                    const session = event.data.object as Stripe.Checkout.Session;
                    console.log('------> Checkout session completed:', session.customer_details);
                    await handleSuccessfulPayment(session.customer_details?.email || null);
                    break;
                case 'charge.succeeded':
                    const charge = event.data.object as Stripe.Charge;
                    console.log('------> Charge succeeded:', charge.billing_details);
                    await handleSuccessfulPayment(charge.billing_details?.email || null);
                    break;
                default:
                    console.warn(`Unhandled event type ${event.type}`);
            }
        } catch (error: any) {
            console.error('Error handling event:', error);
            return new NextResponse('Error handling event', { status: 500 });
        }
    }

    return new NextResponse('Success', { status: 200 });
}
