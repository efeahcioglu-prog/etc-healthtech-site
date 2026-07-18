"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const products = [
  {
    eyebrow: "Live product",
    title: "ETC Waste Audit",
    text: "A ward-by-ward waste audit system for teams that need clear records, evidence photos, training checks and reports without chasing paper folders.",
    points: ["Evidence linked to each audit", "Ward and department setup", "Excel-ready compliance reports"],
    image: "/assets/bins.png",
    imageAlt: "Clinical, infection and domestic waste streams",
  },
  {
    eyebrow: "Operations",
    title: "Porter Track",
    text: "A live portering task board built to reduce phone traffic, show who is doing what and let requesters see progress without repeatedly calling the desk.",
    points: ["Ward and radiology request portals", "Live porter status and task ownership", "Offline fallback option"],
    image: "/assets/porter.png",
    imageAlt: "ETC HealthTech Porter Tracking building visual",
  },
  {
    eyebrow: "Continuity",
    title: "Offline Fallback Systems",
    text: "Standalone offline deployments for departments that still need to keep moving when connectivity, infrastructure or wider systems are not available.",
    points: ["Local browser-based use", "JSON handover backups", "Daily and monthly reporting"],
    image: "/assets/tablet_dashboard.png",
    imageAlt: "Waste audit dashboard on tablet",
  },
];

const problems = [
  "Phone calls used to track jobs",
  "Paper audit records that are difficult to retrieve",
  "Evidence photos stored separately from audit records",
  "Reports manually rebuilt in spreadsheets",
  "Wards and radiology teams chasing updates by phone",
  "Generic systems that do not fit local workflows",
];

const proofCards = [
  { value: "Cloud and offline", label: "Options to suit different hospital environments" },
  { value: "Role-based access", label: "The right level of access for each team" },
  { value: "Evidence records", label: "Keep photos, actions and training records together" },
  { value: "Better reporting", label: "Export records for review and follow-up" },
];

const securityItems = [
  "Secure HTTPS deployment",
  "Role-based access control",
  "Hospital-scoped user access",
  "Cloud evidence storage",
  "Exportable audit history",
  "Operational backup options",
  "Multi-factor authentication (MFA)",
];

const operationalGains = [
  {
    title: "Less phone calls",
    text: "Requests, task updates and porter status can be checked in the system, so teams do not need to keep calling the porter desk for the same update.",
  },
  {
    title: "Less paper use",
    text: "Audits, evidence, task history and reports are stored digitally instead of being rebuilt from paper sheets or spreadsheets at the end of the day.",
  },
  {
    title: "Better request details",
    text: "Ward and radiology teams enter the request directly, reducing the chance of patient details, locations or equipment needs being misunderstood over the phone.",
  },
  {
    title: "Better use of time",
    text: "Teams spend less time chasing information and more time dealing with the actual work, handovers and follow-up actions.",
  },
];

export default function Home() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ETC HealthTech home">
          <span className="brand-mark">ETC</span>
          <span>
            <strong>ETC HealthTech</strong>
            <small>Operational healthcare software</small>
          </span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#security">Security</a>
          <a href="#contact">Contact us</a>
        </nav>
        <a className="mobile-demo-button" href="#contact">Contact us</a>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="pill">Built from real frontline hospital work</div>
            <h1>Hospital software for everyday operations.</h1>
            <p className="hero-lede">
              Built from frontline experience to help hospital teams manage portering,
              waste audits and daily tasks with less paperwork and less phone calls.
            </p>
            <div className="hero-actions">
              <button className="button primary" type="button" onClick={() => setDemoModalOpen(true)}>
                Request a demo
              </button>
              <a className="button secondary" href="#products">Explore products</a>
            </div>
            <div className="hero-metrics" aria-label="Key capabilities">
              <span>Waste Audit</span>
              <span>Porter Track</span>
              <span>Offline Continuity</span>
            </div>
          </div>

          <div className="hero-visual" aria-label="ETC HealthTech product visual">
            <Image
              src="/assets/Product new.png"
              alt="ETC HealthTech products"
              width={943}
              height={2048}
              priority
            />
            <div className="floating-card card-one">
              <strong>Photo evidence</strong>
              <span>Photos stay linked to the correct audit record.</span>
            </div>
            <div className="floating-card card-two">
              <strong>Live reporting</strong>
              <span>Check progress without chasing updates by phone.</span>
            </div>
          </div>
        </div>
      </section>

      <section className="proof-strip" aria-label="ETC HealthTech highlights">
        {proofCards.map((item) => (
          <div key={item.label} className="proof-card">
            <strong>{item.value}</strong>
            <span>{item.label}</span>
          </div>
        ))}
      </section>

      <section id="products" className="section">
        <div className="section-heading">
          <span className="section-kicker">Products</span>
          <h2>Practical tools for everyday hospital work.</h2>
          <p>
            Our products help teams manage porter requests, waste audits, evidence and
            reporting without relying on paper records, spreadsheets or repeated phone calls.
          </p>
        </div>
        <div className="product-grid">
          {products.map((product) => (
            <article key={product.title} className="product-card">
              <div className="product-image">
                <Image
                  src={product.image}
                  alt={product.imageAlt}
                  width={720}
                  height={420}
                />
              </div>
              <span>{product.eyebrow}</span>
              <h3>{product.title}</h3>
              <p>{product.text}</p>
              <ul>
                {product.points.map((point) => (
                  <li key={point}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

      <section className="section benefit-section">
        <div className="section-heading compact">
          <span className="section-kicker">Why ETC HealthTech?</span>
          <h2>Designed to make hospital work easier to follow, record and hand over.</h2>
          <p>
            The systems focus on the everyday pressure points teams actually feel:
            phone calls, paper records, unclear request details and time lost chasing
            information.
          </p>
        </div>
        <div className="benefit-grid">
          {operationalGains.map((gain, index) => (
            <article key={gain.title} className="benefit-card">
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{gain.title}</h3>
              <p>{gain.text}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="showcase-section">
        <div className="showcase-copy">
          <span className="section-kicker">Product demo</span>
          <h2>See how the software works.</h2>
          <p>
            Take a closer look at the request portals, live porter boards, audit records,
            evidence uploads, corrective actions and reports.
          </p>
          <button className="text-link" type="button" onClick={() => setDemoModalOpen(true)}>
            Request a demo
          </button>
        </div>
        <div className="device-stack">
          <div className="device-card device-main">
            <Image
              src="/assets/tablet_dashboard.png"
              alt="Waste audit dashboard on tablet"
              width={760}
              height={540}
            />
          </div>
          <div className="device-card device-secondary">
            <Image
              src="/assets/mobile_app.png"
              alt="Waste audit mobile evidence workflow"
              width={460}
              height={560}
            />
          </div>
        </div>
      </section>

      <section className="section split-section">
        <div>
          <span className="section-kicker">Operational challenges</span>
          <h2>Built around the problems hospital teams deal with every day.</h2>
        </div>
        <div className="problem-grid">
          {problems.map((problem) => (
            <div key={problem} className="problem-item">
              <span />
              {problem}
            </div>
          ))}
        </div>
      </section>

      <section id="about" className="founder-section">
        <div className="founder-card">
          <span className="section-kicker">Founder story</span>
          <h2>From hospital operations to practical software.</h2>
          <p>
            ETC HealthTech grew from my experience of working in NHS hospital operations.
            Day-to-day work in portering, patient movement and operational coordination
            showed me how often essential tasks still depend on phone calls, paper records
            and spreadsheets.
          </p>
          <p>
            I started developing ETC HealthTech to make those processes easier to manage.
            The software is shaped around real working routines, from receiving requests
            and tracking progress to keeping evidence and producing reports.
          </p>
          <p>
            The aim is to give hospital teams practical tools that are clear, useful and
            straightforward to use during a busy shift.
          </p>
        </div>
      </section>

      <section id="security" className="section security-section">
        <div className="section-heading compact">
          <span className="section-kicker">Deployment & security</span>
          <h2>Designed for real-world healthcare environments.</h2>
        </div>
        <div className="security-grid">
          {securityItems.map((item) => (
            <div key={item} className="security-item">{item}</div>
          ))}
        </div>
      </section>

      <section id="contact" className="cta-section">
        <div className="contact-intro">
          <span className="section-kicker">Contact us</span>
          <h2>Get in touch with the right team.</h2>
          <p>
            Contact us about a product demo, general enquiry or support request.
          </p>
        </div>
        <div className="contact-options">
          <a className="contact-option" href="mailto:info@etchealthtech.com">
            <strong>General enquiries</strong>
            <span>Questions about ETC HealthTech</span>
            <small>info@etchealthtech.com</small>
          </a>
          <a className="contact-option" href="mailto:demo@etchealthtech.com">
            <strong>Product demos</strong>
            <span>Arrange a demonstration</span>
            <small>demo@etchealthtech.com</small>
          </a>
          <a className="contact-option" href="mailto:support@etchealthtech.com">
            <strong>Customer support</strong>
            <span>Help with an ETC product</span>
            <small>support@etchealthtech.com</small>
          </a>
        </div>
      </section>

      <footer className="site-footer">
        <strong>ETC HealthTech</strong>
        <span>Practical operational software for healthcare teams.</span>
        <nav className="footer-links" aria-label="Footer policy links">
          <a href="/privacy">Privacy</a>
          <a href="/cookies">Cookies</a>
          <a href="/terms">Terms</a>
          <a href="/security">Security</a>
          <a href="/data-processing">Data processing</a>
        </nav>
      </footer>

      <DemoRequestModal open={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </main>
  );
}

function DemoRequestModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState({
    name: "",
    organisation: "",
    email: "",
    product: "Waste Audit",
    message: "",
  });

  useEffect(() => {
    if (!submitted) return;

    const timer = window.setTimeout(() => {
      setSubmitted(false);
    }, 5000);

    return () => window.clearTimeout(timer);
  }, [submitted]);

  if (!open) return null;

  function updateField(field, value) {
    setSubmitted(false);
    setSubmitError("");
    setForm((current) => ({ ...current, [field]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    setSubmitting(true);
    setSubmitError("");

    const demoApiUrl = process.env.NEXT_PUBLIC_DEMO_API_URL;

    if (demoApiUrl) {
      try {
        const response = await fetch(demoApiUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        });

        if (!response.ok) {
          throw new Error("Demo request failed");
        }

        setSubmitted(true);
        setForm({
          name: "",
          organisation: "",
          email: "",
          product: "Waste Audit",
          message: "",
        });
        setSubmitting(false);
        return;
      } catch (error) {
        setSubmitError("Your request could not be sent. Please email demo@etchealthtech.com.");
        setSubmitting(false);
        return;
      }
    }

    const subject = encodeURIComponent(`ETC HealthTech demo request - ${form.product}`);
    const body = encodeURIComponent(
      [
        "New ETC HealthTech demo request",
        "",
        `Name: ${form.name}`,
        `Organisation: ${form.organisation}`,
        `Email: ${form.email}`,
        `Interested product: ${form.product}`,
        "",
        "Message:",
        form.message || "No additional message provided.",
      ].join("\n")
    );

    window.location.href = `mailto:demo@etchealthtech.com?subject=${subject}&body=${body}`;
    setSubmitted(true);
    setSubmitting(false);
  }

  return (
    <div className="demo-modal-backdrop" role="presentation" onClick={onClose}>
      <section
        className="demo-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby="demo-modal-title"
        onClick={(event) => event.stopPropagation()}
      >
        <div className="demo-modal-header">
          <span className="section-kicker">Request demo</span>
          <button className="demo-modal-close" type="button" onClick={onClose} aria-label="Close demo request">
            x
          </button>
          <h2 id="demo-modal-title" className="sr-only">Request an ETC HealthTech demo</h2>
        </div>

        <form className="demo-form" onSubmit={handleSubmit}>
          <label>
            <span>Name</span>
            <input
              required
              value={form.name}
              onChange={(event) => updateField("name", event.target.value)}
              placeholder="Your name"
            />
          </label>

          <label>
            <span>Organisation / hospital</span>
            <input
              required
              value={form.organisation}
              onChange={(event) => updateField("organisation", event.target.value)}
              placeholder="Organisation name"
            />
          </label>

          <label>
            <span>Email</span>
            <input
              required
              type="email"
              value={form.email}
              onChange={(event) => updateField("email", event.target.value)}
              placeholder="name@organisation.nhs.uk"
            />
          </label>

          <label>
            <span>Interested product</span>
            <select value={form.product} onChange={(event) => updateField("product", event.target.value)}>
              <option>Waste Audit</option>
              <option>Porter Track</option>
              <option>Both</option>
            </select>
          </label>

          <label className="demo-form-wide">
            <span>Additional information</span>
            <textarea
              value={form.message}
              onChange={(event) => updateField("message", event.target.value)}
              placeholder="Tell us which department, current process, or demo scenario you would like to see."
            />
          </label>

          {submitted ? (
            <div className="demo-form-note">
              Your request has been sent. We will be in touch shortly.
            </div>
          ) : null}

          {submitError ? (
            <div className="demo-form-error">
              {submitError}
            </div>
          ) : null}

          <div className="demo-form-actions">
            <button className="button secondary" type="button" onClick={onClose}>
              Cancel
            </button>
            <button className="button primary" type="submit" disabled={submitting}>
              {submitting ? "Sending..." : "Send request"}
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}
