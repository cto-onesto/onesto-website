import Link from "next/link"

const VIDEOS = [
  {
    src: "https://www.youtube.com/embed/xdzVrwmqEsU?si=e-8EihFAti0PkOzV",
    title: "Shop and Save with Onesto",
    h: "Shop and Save",
    p: "Earn up to 10% cashback when you shop at over 350 partner retailers in Australia and New Zealand. Onesto's \"Shop and Save\" feature allows you to save over $100 per month on your everyday spending.",
    href: "/shop-and-save",
  },
  {
    src: "https://www.youtube.com/embed/KylV5LeG_XY?si=YMIqBPk9ydtDTEa2",
    title: "Flexible Wages with Onesto",
    h: "Flexible Wages",
    p: "Onesto's \"Flexible Wages\" or \"Wages on Demand\" service provides employees with early access to their earned wages. This benefit aims to improve employee retention and engagement by offering a financial safety net for unexpected expenses.",
    href: "/wages-on-demand",
  },
  {
    src: "https://www.youtube.com/embed/EXuYFYCFAbA?si=JH-GqYwDLlVnCOJo",
    title: "Learn with Onesto",
    h: "Learn",
    p: "Onesto's \"Learn\" platform focuses on improving employee financial well-being through bite-sized courses on financial literacy and wellness. The platform addresses the negative impact of financial stress on employees' health and work performance.",
    href: "/learn",
  },
  {
    src: "https://www.youtube.com/embed/i_CVfxme9iU?si=Xxc2RCPCnuaCYw8d",
    title: "Rewards & Recognition with Onesto",
    h: "Rewards & Recognition",
    p: "Onesto's \"Rewards & Recognition\" platform digitizes the process of creating and distributing employee awards. This saves administrative time and resources by eliminating the need for manual purchasing and postage.",
    href: "/rewards-and-recognition",
  },
]

export function WatchVideos() {
  return (
    <section id="watch" className="rd-section" style={{ paddingTop: 10 }}>
      <div className="rd-wrap">
        <div className="rd-sec-head rd-center">
          <span className="rd-eyebrow">Watch</span>
          <h2>See Onesto in action</h2>
          <p>The videos from our current site — embedded here so visitors can watch without leaving the page.</p>
        </div>
        <div className="rd-video-grid">
          {VIDEOS.map((v) => (
            <div key={v.h} className="rd-video-card">
              <div className="rd-embed-wrap">
                <iframe
                  src={v.src}
                  title={v.title}
                  loading="lazy"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <p>
                {v.h}
                <span>{v.p}</span>
              </p>
              <div style={{ padding: "0 20px 20px" }}>
                <Link href={v.href} style={{ color: "#2ee6c3", fontWeight: 700, textDecoration: "underline" }}>
                  Learn More →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
