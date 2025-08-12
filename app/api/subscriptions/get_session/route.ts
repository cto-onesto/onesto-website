import { NextRequest, NextResponse } from "next/server"
import Stripe from "stripe"

export const dynamic = "force-dynamic"

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-06-30.basil",
})

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const sessionId = searchParams.get("id")

  if (!sessionId) {
    return NextResponse.json({ error: "Session ID is required" }, { status: 400 })
  }

  try {
    const session = await stripe.checkout.sessions.retrieve(sessionId)
    return NextResponse.json(
      {
        customer_email: session.customer_email,
      },
      { status: 200 }
    )
  } catch (error) {
    console.error("Error retrieving session:", error)
    return NextResponse.json(
      { error: "Failed to retrieve session" },
      { status: 500 }
    )
  }
}
