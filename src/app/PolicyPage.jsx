import Link from "next/link";
import { lastUpdated, policies } from "./policies";

const policyLinks = [
  ["Privacy", "/privacy"],
  ["Cookies", "/cookies"],
  ["Terms", "/terms"],
  ["Security", "/security"],
  ["Data processing", "/data-processing"],
];

export function PolicyPage({ policyKey }) {
  const policy = policies[policyKey];

  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="ETC HealthTech home">
          <span className="brand-mark">ETC</span>
          <span>
            <strong>ETC HealthTech</strong>
            <small>Operational healthcare software</small>
          </span>
        </Link>
        <nav className="nav-links" aria-label="Policy navigation">
          <Link href="/#products">Products</Link>
          <Link href="/#security">Security</Link>
          <Link href="/#contact">Contact us</Link>
        </nav>
        <Link className="mobile-demo-button" href="/#contact">Contact us</Link>
      </header>

      <section className="policy-hero">
        <span className="section-kicker">Policy</span>
        <h1>{policy.title}</h1>
        <p>{policy.intro}</p>
        <small>Last updated: {lastUpdated}</small>
      </section>

      <section className="policy-layout">
        <aside className="policy-nav" aria-label="Policy pages">
          {policyLinks.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </aside>
        <article className="policy-card">
          {policy.sections.map((section) => (
            <section key={section.heading}>
              <h2>{section.heading}</h2>
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </section>
          ))}
          <div className="policy-note">
            This page is provided as general product and website information. Customers should review their own legal, procurement, clinical safety, and information governance requirements before production use.
          </div>
        </article>
      </section>

      <footer className="site-footer">
        <strong>ETC HealthTech</strong>
        <span>Practical operational software for healthcare teams.</span>
        <nav className="footer-links" aria-label="Footer policy links">
          {policyLinks.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
      </footer>
    </main>
  );
}
