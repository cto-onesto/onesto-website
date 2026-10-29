"use client"

import { useState } from "react"
import Link from "next/link"

type Product = {
  id: string
  label: string
  title: string
  p: string
  pts: string[]
  stat: string
  statLabel: string
  videoLabel: string
  learnMoreHref: string
}

const PRODS: Product[] = [
  {
    id: "wages",
    label: "💸 Flexible Wages",
    title: "Flexible Wages — pay, on your people's terms",
    p: "Life doesn't wait for payday. Flexible Wages (Wages on Demand) lets employees access pay they've already earned, giving them a safety net for the unexpected — and giving you a team that isn't quietly stressed about money.",
    pts: [
      "No interest, no credit checks, no debt — it's their money, earlier",
      "Reconciles automatically through payroll at payday",
      "Save hundreds a year just by paying bills on time — fewer late fees, more early-payment discounts",
    ],
    stat: "92%",
    statLabel: "of employees use it for emergencies & essential purchases",
    videoLabel: "Watch: Onesto in action",
    learnMoreHref: "/wages-on-demand",
  },
  {
    id: "shop",
    label: "🛍️ Shop to Save",
    title: "Shop to Save — spending that builds a nest egg",
    p: "Up to 10% cashback at 200+ essential retailers and restaurants across Australia and New Zealand. Groceries, fuel, pharmacy, gifts — the spending your people already do, quietly building their savings instead.",
    pts: [
      "Free to use — in fact we pay your people: cashback replaces credit-card and BNPL fees",
      "Loyalty cards are ingested, so members keep their discounts AND their points",
      "Open to employees' friends and family as well",
    ],
    stat: "$871",
    statLabel: "saved per year, tax-free, on a typical everyday basket ($72.65 a month)",
    videoLabel: "Watch: Shop to Save",
    learnMoreHref: "/shop-and-save",
  },
  {
    id: "learn",
    label: "🎓 Learn",
    title: "Learn — financial wellbeing that sticks",
    p: "Financial stress follows people to work — it hits health, focus and performance. Learn delivers bite-sized financial literacy and wellness courses employees finish in minutes, not weekends.",
    pts: [
      "Bite-sized courses on budgeting, debt, saving and super",
      "Designed for real life, not finance degrees",
      "Progress employees can see — and employers can celebrate",
    ],
    stat: "3 levels",
    statLabel: "Introductory, Intermediate & Advanced — a library that grows with your people",
    videoLabel: "Watch: Learn",
    learnMoreHref: "/learn",
  },
  {
    id: "rewards",
    label: "🏆 Rewards & Recognition",
    title: "Rewards & Recognition — gratitude, digitised",
    p: "Creating and posting physical awards eats HR time and budget. Onesto digitises the whole flow — nominate, approve, deliver — so recognition happens in the moment it matters.",
    pts: [
      "Peer and manager nominations in a few taps",
      "Automated rewards — no purchasing, printing or postage",
      "Minor, infrequent gift-card awards are FBT & PAYG free — a real saving over cash bonuses",
    ],
    stat: "63%",
    statLabel: "of rewarded & recognised employees were unlikely to look for a new job",
    videoLabel: "Watch: Rewards & Recognition",
    learnMoreHref: "/rewards-and-recognition",
  },
  {
    id: "giving",
    label: "🌱 Giving",
    title: "Giving — benefits with a conscience",
    p: "Onesto is a philanthropic benefits platform at its core. Employees give to the causes they love; employers match, campaign and report impact — turning everyday generosity into culture and ESG proof.",
    pts: [
      "Two-tap donations to vetted charities",
      "Employer matching and workplace giving campaigns",
      "Real-time social impact reporting for your ESG story",
    ],
    stat: "2 taps",
    statLabel: "from intention to impact — giving, built into payday",
    videoLabel: "",
    learnMoreHref: "/for-charities",
  },
]

export function ProductsTabs() {
  const [active, setActive] = useState(PRODS[0])
  return (
    <section id="products" className="rd-section" style={{ paddingTop: 20 }}>
      <div className="rd-products">
        <div className="rd-wrap" style={{ paddingTop: 80, paddingBottom: 80 }}>
          <div className="rd-sec-head">
            <span className="rd-eyebrow rd-eyebrow-dark">The platform</span>
            <h2>
              Five products. One login.
              <br />
              Zero extra admin.
            </h2>
            <p>Every module works on its own — and compounds together. Switch them on as your people need them.</p>
          </div>
          <div className="rd-prod-tabs">
            {PRODS.map((pr) => (
              <button
                key={pr.id}
                type="button"
                className={`rd-prod-tab${active.id === pr.id ? " rd-active" : ""}`}
                onClick={() => setActive(pr)}
              >
                {pr.label}
              </button>
            ))}
          </div>
          <div className="rd-prod-panel">
            <div>
              <h3>{active.title}</h3>
              <p>{active.p}</p>
              <ul>
                {active.pts.map((pt) => (
                  <li key={pt}>{pt}</li>
                ))}
              </ul>
              <Link className="rd-btn rd-btn-primary" href={active.learnMoreHref}>
                Learn more →
              </Link>
              {active.videoLabel ? (
                <div className="rd-prod-video">
                  ▶ <a href="#watch">{active.videoLabel} — watch below</a>
                </div>
              ) : null}
            </div>
            <div className="rd-prod-stat">
              <b>{active.stat}</b>
              <span>{active.statLabel}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
