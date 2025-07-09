import type { Metadata } from "next"
import ForYouClientPage from "./ForYouClientPage"

export const metadata: Metadata = {
  title: "For You - Personal Employee Benefits Platform | Onesto",
  description:
    "Access comprehensive employee benefits, support causes you care about, and take control of your wellness through your employer's Onesto platform.",
  keywords: [
    "employee benefits",
    "personal benefits",
    "charitable giving",
    "employee wellness",
    "workplace benefits",
    "philanthropic giving",
    "financial wellness",
    "health benefits",
  ],
}

export default function ForYouPage() {
  return <ForYouClientPage />
}
