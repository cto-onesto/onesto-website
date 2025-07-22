import type { Metadata } from "next"
import ForYouClientPage from "./ForYouClientPage"

export const metadata: Metadata = {
  title: "One Member Benefits - Cashback, Savings & Gift Cards | Onesto",
  description:
    "Join One Member Benefits to get cashback from 80+ top Australian retailers. Top up with PayID, send discounted gift cards, and start saving today for just $6.",
  keywords: [
    "cashback",
    "savings",
    "gift cards",
    "discounts",
    "retailers",
    "shopping",
    "rewards",
    "PayID",
    "B2C",
  ],
}

export default function ForYouPage() {
  return <ForYouClientPage />
}
