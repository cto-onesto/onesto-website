"use client"

import { useEffect, useState } from "react"

const money = (n: number) =>
  n >= 1e6
    ? "$" + parseFloat((n / 1e6).toFixed(2)) + "m"
    : n >= 1e5
      ? "$" + Math.round(n / 1e3) + "k"
      : "$" + Math.round(n).toLocaleString("en-AU")

export function Calculators() {
  const [wageRate, setWageRate] = useState(32)
  const [wageHours, setWageHours] = useState(38)
  const [wageDays, setWageDays] = useState(9)
  const [roiStaff, setRoiStaff] = useState(120)
  const [roiSalary, setRoiSalary] = useState(75000)
  const [roiTurn, setRoiTurn] = useState(18)
  const [shopGroc, setShopGroc] = useState(800)
  const [shopFuel, setShopFuel] = useState(300)
  const [shopRet, setShopRet] = useState(800)
  const [shopRate, setShopRate] = useState(3.8)

  const weekly = wageRate * wageHours
  const earned = (weekly / 7) * wageDays
  const access = earned * 0.6
  const roiCost = roiStaff * (roiTurn / 100) * roiSalary * 1.5
  const roiSave = roiCost * 0.4
  const shopMonth = ((shopGroc + shopFuel + shopRet) * shopRate) / 100

  return (
    <section id="calculators" className="rd-section" style={{ paddingTop: 30 }}>
      <div className="rd-wrap">
        <div className="rd-sec-head rd-center">
          <span className="rd-eyebrow">Run your own numbers</span>
          <h2>See what Onesto is worth — before you talk to us</h2>
          <p>Two minutes, no email required. Drag the sliders and watch the value move.</p>
        </div>
        <div className="rd-calc-grid">
          <div className="rd-calc">
            <h3>🕐 Flexible Wages simulator</h3>
            <p>
              Payday is an arbitrary date. Rent, rego and life aren&rsquo;t. See what an employee has already earned —
              and could access today.
            </p>
            <div className="rd-field">
              <label>
                Hourly wage <output>${wageRate}</output>
              </label>
              <input type="range" min={20} max={80} value={wageRate} step={1} onChange={(e) => setWageRate(+e.target.value)} />
            </div>
            <div className="rd-field">
              <label>
                Hours worked per week <output>{wageHours} hrs</output>
              </label>
              <input type="range" min={10} max={50} value={wageHours} step={1} onChange={(e) => setWageHours(+e.target.value)} />
            </div>
            <div className="rd-field">
              <label>
                Days into the pay cycle{" "}
                <output>
                  Day {wageDays} of 14
                </output>
              </label>
              <input type="range" min={1} max={14} value={wageDays} step={1} onChange={(e) => setWageDays(+e.target.value)} />
            </div>
            <div className="rd-wage-visual">
              {Array.from({ length: 14 }, (_, i) => (
                <i key={i} className={i < wageDays ? "rd-on" : ""} />
              ))}
            </div>
            <div className="rd-calc-result">
              <div>
                <small>Earned so far</small>
                <b>{money(earned)}</b>
              </div>
              <div style={{ textAlign: "right" }}>
                <small>Available to access*</small>
                <b>{money(access)}</b>
              </div>
            </div>
            <p className="rd-calc-note">
              *Illustrative. Onesto lets employees access a portion of wages they&rsquo;ve already earned, for a small
              flat fee — never interest, never a loan. Reconciled automatically at payday through payroll.
            </p>
          </div>

          <div className="rd-calc">
            <h3>🏢 Employer ROI calculator</h3>
            <p>
              Replacing a single employee costs around 150% of their annual salary (Columbia Business School).
              Benefits people actually use are the cheapest retention strategy there is.
            </p>
            <div className="rd-field">
              <label>
                Number of employees <output>{roiStaff.toLocaleString("en-AU")}</output>
              </label>
              <input type="range" min={10} max={2000} value={roiStaff} step={10} onChange={(e) => setRoiStaff(+e.target.value)} />
            </div>
            <div className="rd-field">
              <label>
                Average salary <output>{money(roiSalary)}</output>
              </label>
              <input
                type="range"
                min={40000}
                max={120000}
                value={roiSalary}
                step={5000}
                onChange={(e) => setRoiSalary(+e.target.value)}
              />
            </div>
            <div className="rd-field">
              <label>
                Current annual turnover <output>{roiTurn}%</output>
              </label>
              <input type="range" min={5} max={45} value={roiTurn} step={1} onChange={(e) => setRoiTurn(+e.target.value)} />
            </div>
            <div className="rd-calc-result">
              <div>
                <small>Est. replacement cost / year</small>
                <b>{money(roiCost)}</b>
              </div>
              <div style={{ textAlign: "right" }}>
                <small>Potential saving†</small>
                <b>{money(roiSave)}</b>
              </div>
            </div>
            <p className="rd-calc-note">
              †Illustrative estimate: replacement cost at 150% of salary (Columbia Business School), applying a 40%
              turnover reduction — the conservative end of the 40–75% range in Onesto&rsquo;s controlled trial. Talk to
              us for a business case modelled on your workforce.
            </p>
          </div>

          <div className="rd-calc" style={{ gridColumn: "1/-1" }}>
            <h3>🛍️ Shop to Save estimator — what everyday cashback adds up to</h3>
            <p>
              Groceries, fuel, pharmacy, gifts: Onesto members earn up to 10% cashback at 200+ essential retailers and
              restaurants. Estimate a typical household month:
            </p>
            <div className="rd-calc-grid" style={{ gap: "0 34px" }}>
              <div>
                <div className="rd-field">
                  <label>
                    Groceries per month <output>{money(shopGroc)}</output>
                  </label>
                  <input type="range" min={0} max={2000} value={shopGroc} step={50} onChange={(e) => setShopGroc(+e.target.value)} />
                </div>
                <div className="rd-field">
                  <label>
                    Fuel &amp; transport per month <output>{money(shopFuel)}</output>
                  </label>
                  <input type="range" min={0} max={1000} value={shopFuel} step={25} onChange={(e) => setShopFuel(+e.target.value)} />
                </div>
              </div>
              <div>
                <div className="rd-field">
                  <label>
                    Retail, pharmacy &amp; gifts per month <output>{money(shopRet)}</output>
                  </label>
                  <input type="range" min={0} max={1500} value={shopRet} step={50} onChange={(e) => setShopRet(+e.target.value)} />
                </div>
                <div className="rd-field">
                  <label>
                    Average cashback rate <output>{shopRate}%</output>
                  </label>
                  <input
                    type="range"
                    min={2}
                    max={10}
                    value={shopRate}
                    step={0.1}
                    onChange={(e) => setShopRate(+e.target.value)}
                  />
                </div>
              </div>
            </div>
            <div className="rd-calc-result">
              <div>
                <small>Cashback per month</small>
                <b>{money(shopMonth)}</b>
              </div>
              <div style={{ textAlign: "right" }}>
                <small>Cashback per year</small>
                <b>{money(shopMonth * 12)}</b>
              </div>
            </div>
            <p className="rd-calc-note">
              Modelled on Onesto&rsquo;s published example basket — Woolworths, EG Ampol, Big W, Rebel Sport, Dan
              Murphy&rsquo;s, Myer and more — which returns $72.65 a month ($871 a year), tax-free. Actual cashback
              varies by retailer and offer.
            </p>
          </div>
        </div>
      </div>
      <div className="rd-wrap" style={{ paddingTop: 40, paddingBottom: 20 }}>
        <div className="rd-example-card">
          <h3>The 2,000-employee worked example</h3>
          <p>
            From Onesto&rsquo;s controlled trial and published modelling — an employer with 2,000 staff and 20% annual
            turnover:
          </p>
          <div className="rd-example-nums">
            <div>
              <b>$48k p.a.</b>
              <span>total Onesto cost — $2 per employee per month, all features included</span>
            </div>
            <div>
              <b>$560k–$1.05m</b>
              <span>saved every year in turnover costs, at a 40–75% reduction in staff turnover</span>
            </div>
            <div>
              <b>$443k p.a.</b>
              <span>FBT saved by gifting $250 per employee through FBT-free gift cards</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
