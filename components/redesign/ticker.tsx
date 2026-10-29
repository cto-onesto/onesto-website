const ITEMS = [
  "89% less financial stress",
  "40–75% lower staff turnover",
  "$871 a year in tax-free cashback",
  "100% more job applicants",
  "Wages on demand — no interest, no debt",
  "200+ essential retailers",
]

export function Ticker() {
  const set = (
    <div className="rd-ticker-set">
      {ITEMS.map((item) => (
        <span key={item}>
          {item} <i>✦</i>
        </span>
      ))}
    </div>
  )
  return (
    <div className="rd-ticker" aria-hidden="true">
      <div className="rd-ticker-track">
        {set}
        {set}
      </div>
    </div>
  )
}
