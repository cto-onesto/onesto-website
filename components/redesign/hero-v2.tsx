import Link from "next/link"
import Image from "next/image"

const MEETINGS_URL = "https://meetings-ap1.hubspot.com/benjamin-silluzio"

export function HeroV2() {
  return (
    <div className="rd-hero">
      <div className="rd-wrap rd-hero-grid">
        <div>
          <span className="rd-eyebrow">Employee benefits, reimagined</span>
          <h1>
            Transform your workplace <em>today</em>.
          </h1>
          <p className="rd-lede">
            Onesto brings flexible wages, cashback shopping, financial learning, rewards and giving together in a
            single platform — so your team builds savings naturally and feels supported every day, not just on payday.
          </p>
          <div className="rd-hero-ctas">
            <Link href="/contact" className="rd-btn rd-btn-primary">
              Transform your workplace →
            </Link>
            <a href={MEETINGS_URL} target="_blank" rel="noopener noreferrer" className="rd-btn rd-btn-ghost">
              See How It Works
            </a>
          </div>
          <div className="rd-badges">
            <a href="https://apps.apple.com/au/app/onesto/id1582583482" target="_blank" rel="noopener noreferrer">
              <Image src="/appstore.png" alt="Download on the App Store" width={180} height={60} className="h-11 w-auto" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=com.onesto&pli=1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src="/gplay.png" alt="Get it on Google Play" width={180} height={60} className="h-11 w-auto" />
            </a>
            <span>
              Free for employees.
              <br />
              Live in days, not months.
            </span>
          </div>
          <div className="rd-hero-proof">
            <div>
              <b>200+</b>
              <span>essential retailers &amp; restaurants</span>
            </div>
            <div>
              <b>10%</b>
              <span>max cashback on everyday shopping</span>
            </div>
            <div>
              <b>89%</b>
              <span>of members say Onesto reduced their financial stress</span>
            </div>
          </div>
        </div>
        <div className="rd-hero-visual">
          <img className="rd-hero-shot rd-main" src="/redesign/hero-shot-main.png" alt="Onesto app — pay, perks and savings" />
          <img className="rd-hero-shot rd-back" src="/redesign/hero-shot-back.png" alt="Onesto app — rewards and recognition" />
        </div>
      </div>
    </div>
  )
}
