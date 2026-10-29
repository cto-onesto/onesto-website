export function Impact() {
  const stats = [
    { num: "89", suffix: "%", p: "of Onesto customers say it decreased their financial stress" },
    { num: "92", suffix: "%", p: "of employees use Onesto for emergencies & essential purchases" },
    { num: "63", suffix: "%", p: "of rewarded & recognised employees were unlikely to look for a new job" },
    { num: "100", suffix: "%", p: "increase in job applicants when Onesto is named in job ads" },
  ]
  return (
    <section className="rd-section" style={{ paddingTop: 70, paddingBottom: 70 }}>
      <div className="rd-impact">
        <div className="rd-wrap" style={{ paddingTop: 64, paddingBottom: 64 }}>
          <span className="rd-eyebrow rd-eyebrow-dark">The impact</span>
          <h2 style={{ fontSize: "clamp(30px,4vw,44px)", margin: "16px 0 40px" }}>Why companies choose Onesto</h2>
          <div className="rd-impact-grid">
            {stats.map((s) => (
              <div key={s.p}>
                <div className="rd-impact-num">
                  <span>{s.num}</span>
                  {s.suffix}
                </div>
                <p>{s.p}</p>
              </div>
            ))}
          </div>
          <p style={{ marginTop: 36, fontSize: 13, color: "#8fa5cc" }}>
            *Figures from Onesto customer research and controlled-trial results (Onesto company presentation, October
            2026). Recognised in Fast Company&rsquo;s 2023 World Changing Ideas.
          </p>
        </div>
      </div>
    </section>
  )
}
