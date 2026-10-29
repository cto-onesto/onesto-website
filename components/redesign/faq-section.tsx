"use client"

import { useRef, useState } from "react"
import Link from "next/link"

const FAQS = [
  {
    q: "Is Flexible Wages a loan?",
    a: "No. Flexible Wages gives employees access to pay they have already earned but not yet received. There's no credit check, no interest and no debt — the amount is simply reconciled from their next pay through your payroll. It's the ethical alternative to payday lenders and credit cards.",
  },
  {
    q: "What does Onesto cost our organisation?",
    a: "Onesto costs $2 per employee per month for all features — for a 2,000-person organisation that's $48,000 a year, against $560k–$1.05m in modelled annual turnover savings. Employees pay nothing for Shop to Save, Learn, Rewards or Giving; a small flat fee applies only when they choose to access wages early.",
  },
  {
    q: "How long does setup take?",
    a: "Most organisations are live within days. If you run Xero payroll, connection takes minutes via the Xero App Store. A dedicated customer success manager handles onboarding, employee invitations and launch communications with you.",
  },
  {
    q: "Does it work for members and volunteers, not just employees?",
    a: "Yes. Onesto was built for workforces in the broadest sense — employees, association members and volunteers. Unions, clubs, charities and community organisations use Onesto to give their people the same financial-wellbeing benefits as large employers.",
  },
  {
    q: "How does the giving / philanthropy side work?",
    a: "Employees can donate to causes they care about straight from the app, and employers can match contributions, run campaigns and report social impact in real time. It's a benefits platform with a conscience — good for culture, good for your ESG story.",
  },
  {
    q: "Is our payroll and employee data secure?",
    a: "Yes. Onesto protects your information with biometric login, 256-bit encryption, bank-grade authentication and data housed locally on AWS in Australia. Employees only ever see their own information.",
  },
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)
  const answerRefs = useRef<(HTMLDivElement | null)[]>([])

  const toggle = (i: number) => {
    setOpenIndex((cur) => (cur === i ? null : i))
  }

  return (
    <section id="faq" className="rd-section" style={{ paddingTop: 20 }}>
      <div className="rd-wrap">
        <div className="rd-sec-head rd-center">
          <span className="rd-eyebrow">Questions</span>
          <h2>Everything employers ask us first</h2>
        </div>
        <div className="rd-faq">
          {FAQS.map((item, i) => (
            <div key={item.q} className={`rd-faq-item${openIndex === i ? " rd-open" : ""}`}>
              <button type="button" className="rd-faq-q" onClick={() => toggle(i)}>
                {item.q}
                <span className="rd-pm">+</span>
              </button>
              <div
                className="rd-faq-a"
                ref={(el) => {
                  answerRefs.current[i] = el
                }}
                style={{ maxHeight: openIndex === i ? answerRefs.current[i]?.scrollHeight : 0 }}
              >
                <p>{item.a}</p>
              </div>
            </div>
          ))}
          <p style={{ textAlign: "center", marginTop: 24 }}>
            <a href="/faqs" style={{ color: "#2ee6c3", fontWeight: 700, textDecoration: "underline" }}>
              View all FAQs →
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}
