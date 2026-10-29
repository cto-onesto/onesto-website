import Image from "next/image"

export function VillageEnterprise() {
  return (
    <section id="enterprise" className="rd-section" style={{ paddingTop: 30 }}>
      <div className="rd-wrap">
        <div className="rd-sec-head rd-center">
          <span className="rd-eyebrow">Enterprise proof</span>
          <h2>Onesto powers employee benefits for large organisations — including Village Roadshow</h2>
          <p>
            Theme parks, cinemas, resorts — thousands of shift-based employees across Australia carry their pay, perks
            and savings in one app, branded as Village Roadshow&rsquo;s own and powered by Onesto underneath. This is
            the app they open:
          </p>
        </div>
        <Image
          className="rd-vr-symbol-lg"
          src="/redesign/vr-symbol.png"
          alt="Village Roadshow"
          width={430}
          height={434}
          style={{ width: "auto" }}
        />
        <figure className="rd-vr-main">
          <img src="/redesign/vr-app.webp" alt="Village Roadshow employee benefits app, powered by Onesto" />
          <figcaption>The Village Roadshow app — powered by Onesto enterprise technology</figcaption>
        </figure>
        <blockquote className="rd-vr-quote">
          &ldquo;In this tight labour market Village recognised the importance of delivering tangible benefits to
          assist with the attraction, retention and productivity of our employees. We also identified the need to help
          our employees with their financial wellness. Delivering a solution that conveniently encouraged savings and
          financial flexibility was key.&rdquo;
          <cite>
            Clark Kirby
            <span>CEO, Village Roadshow</span>
          </cite>
        </blockquote>
      </div>
    </section>
  )
}
