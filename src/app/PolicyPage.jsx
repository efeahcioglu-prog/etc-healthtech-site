import Link from "next/link";
import Image from "next/image";
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
    <main className="policy-shell">
      <header className="site-header">
        <Link className="brand" href="/" aria-label="ETC HealthTech home">
          <Image src="/assets/icon.png" alt="" width={48} height={48} />
          <span><strong>ETC HealthTech</strong><small>Healthcare operations software</small></span>
        </Link>
        <nav className="nav-links" aria-label="Policy navigation">
          <Link href="/#products">Products</Link>
          <Link href="/#security">Security</Link>
          <Link href="/#contact">Contact</Link>
        </nav>
        <Link className="header-action" href="/#contact">Contact us</Link>
      </header>

      <section className="policy-hero">
        <div>
          <span className="section-kicker">Policy centre</span>
          <h1>{policy.title}</h1>
          <p>{policy.intro}</p>
        </div>
        <aside className="policy-hero-card" aria-label="Policy summary">
          <span>Last updated</span>
          <strong>{lastUpdated}</strong>
          <p>Product, privacy and security information for ETC HealthTech website visitors and customers.</p>
        </aside>
      </section>

      <section className="policy-layout">
        <aside className="policy-nav" aria-label="Policy pages">
          <strong>Policy pages</strong>
          {policyLinks.map(([label, href]) => (
            <Link
              key={href}
              className={href === `/${policyKey}` ? "active" : ""}
              href={href}
            >
              {label}
            </Link>
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
        <div>
          <strong>ETC HealthTech</strong>
          <span>Practical operational software for healthcare teams.</span>
        </div>
        <nav aria-label="Footer policy links">
          {policyLinks.map(([label, href]) => (
            <Link key={href} href={href}>{label}</Link>
          ))}
        </nav>
      </footer>
    </main>
  );
}
