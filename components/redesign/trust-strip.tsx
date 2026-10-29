export function TrustStrip() {
  const items = [
    { medal: "🏅", title: "Fast Company", sub: "2023 World Changing Ideas" },
    { medal: "🔗", title: "Xero App Store", sub: "Payroll-connected in minutes" },
    { medal: "🛍️", title: "200+ retail partners", sub: "Australia & New Zealand" },
    { medal: "🛡️", title: "Bank-grade security", sub: "Biometric login · 256-bit encryption · data on AWS in Australia" },
  ]
  return (
    <div className="rd-trust">
      <div className="rd-wrap rd-trust-row">
        {items.map((item) => (
          <div key={item.title} className="rd-trust-item">
            <span className="rd-medal" aria-hidden="true">
              {item.medal}
            </span>
            <div>
              {item.title}
              <span>{item.sub}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
