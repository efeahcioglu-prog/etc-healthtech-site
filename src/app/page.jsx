"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const operationalGains = [
  ["Less phone calls", "Requests, task updates and porter status can be checked in the system, so teams do not need to keep calling the porter desk for the same update."],
  ["Less paper use", "Audits, evidence, task history and reports are stored digitally instead of being rebuilt from paper sheets or spreadsheets at the end of the day."],
  ["Better request details", "Ward and radiology teams enter requests directly, reducing the chance of locations or equipment needs being misunderstood over the phone."],
  ["Better use of time", "Teams spend less time chasing information and more time dealing with the actual work, handovers and follow-up actions."],
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

export default function Home() {
  const [demoModalOpen, setDemoModalOpen] = useState(false);

  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="ETC HealthTech home">
          <Image src="/assets/brand/etc-icon.png" alt="" width={48} height={48} />
          <span><strong>ETC HealthTech</strong><small>Healthcare operations software</small></span>
        </a>
        <nav className="nav-links" aria-label="Main navigation">
          <a href="#products">Products</a>
          <a href="#about">About</a>
          <a href="#security">Security</a>
          <a href="#contact">Contact</a>
        </nav>
        <button className="header-action" type="button" onClick={() => setDemoModalOpen(true)}>Request demo</button>
      </header>

      <section id="top" className="hero-section">
        <div className="hero-copy">
          <span className="section-kicker">Built from frontline hospital experience</span>
          <h1>ETC HealthTech</h1>
          <p className="hero-title">Operational software for hospital support services.</p>
          <p className="hero-lede">Built from frontline experience to help hospital teams manage portering, waste audits and daily tasks with less paperwork and fewer phone calls.</p>
          <div className="hero-actions">
            <button className="button primary" type="button" onClick={() => setDemoModalOpen(true)}>Request a demo</button>
            <a className="button secondary" href="#products">Explore products</a>
          </div>
          <div className="hero-capabilities" aria-label="Key capabilities">
            <span>Porter Track</span><span>Waste Audit</span><span>Offline continuity</span>
          </div>
        </div>
        <div className="hero-product">
          <div className="product-window">
            <div className="window-bar"><span /><span /><span /><small>Live operations dashboard</small></div>
            <Image src="/assets/product-screens/porter-track/live-dashboard.png" alt="Porter Track live task and porter dashboard" width={1315} height={225} priority />
          </div>
          <div className="hero-caption"><strong>One live view of the shift</strong><span>Open requests, assigned work and porter availability.</span></div>
        </div>
      </section>

      <section className="trust-strip" aria-label="ETC HealthTech product principles">
        <span>Hospital-focused workflows</span><span>Role-based access</span><span>Evidence-linked records</span><span>Cloud and offline options</span>
      </section>

      <section id="products" className="section product-intro">
        <div className="section-heading">
          <span className="section-kicker">Products</span>
          <h2>Practical tools for everyday hospital work.</h2>
          <p>Our products help teams manage porter requests, waste audits, evidence and reporting without relying on paper records, spreadsheets or repeated phone calls.</p>
        </div>
      </section>

      <section className="product-band porter-band">
        <div className="product-copy">
          <span className="product-number">01</span>
          <Image className="porter-logo" src="/assets/brand/etc-porter-logo.png" alt="ETC Porter" width={420} height={260} />
          <h2>Porter Track</h2>
          <p>A live portering task board built to reduce phone traffic, show who is doing what and let requesters see progress without repeatedly calling the desk.</p>
          <ul><li>Ward and radiology request portals</li><li>Live porter status and task ownership</li><li>Shift statistics and Excel reports</li><li>Offline fallback option</li></ul>
          <button className="text-link" type="button" onClick={() => setDemoModalOpen(true)}>Arrange a Porter Track demo</button>
        </div>
        <div className="product-gallery porter-gallery">
          <figure className="gallery-main"><Image src="/assets/product-screens/porter-track/dashboard-light.png" alt="Porter Track dashboard" width={1331} height={565} /><figcaption>Live desk view</figcaption></figure>
          <figure><Image src="/assets/product-screens/porter-track/create-task.png" alt="Creating a new porter task" width={539} height={544} /><figcaption>Structured requests</figcaption></figure>
          <figure><Image src="/assets/product-screens/porter-track/statistics-checkins.png" alt="Porter Track performance report" width={1169} height={570} /><figcaption>Operational reporting</figcaption></figure>
        </div>
      </section>

      <section className="product-band waste-band">
        <div className="product-copy">
          <span className="product-number">02</span>
          <span className="product-label">ETC Waste Audit</span>
          <h2>Audit records that stay complete.</h2>
          <p>A ward-by-ward waste audit system for teams that need clear records, evidence photos, training checks and reports without chasing paper folders.</p>
          <ul><li>Evidence linked to each audit</li><li>Ward and department setup</li><li>Corrective actions and training records</li><li>Excel-ready compliance reports</li></ul>
          <button className="text-link" type="button" onClick={() => setDemoModalOpen(true)}>Arrange a Waste Audit demo</button>
        </div>
        <div className="product-gallery waste-gallery">
          <figure className="gallery-main"><Image src="/assets/product-screens/waste-audit/dashboard.png" alt="ETC Waste Audit dashboard" width={1316} height={549} /><figcaption>Audit overview</figcaption></figure>
          <figure><Image src="/assets/product-screens/waste-audit/waste-checks.png" alt="Waste checks workflow" width={1099} height={562} /><figcaption>Structured checks</figcaption></figure>
          <figure><Image src="/assets/product-screens/waste-audit/evidence.png" alt="Evidence and attachments workflow" width={1016} height={562} /><figcaption>Linked evidence</figcaption></figure>
        </div>
      </section>

      <section className="continuity-band">
        <div><span className="section-kicker">Operational continuity</span><h2>Keep essential workflows moving.</h2></div>
        <p>Standalone offline deployments are available for departments that still need to work when connectivity, infrastructure or wider systems are unavailable.</p>
        <div className="continuity-list"><span>Local browser-based use</span><span>JSON handover backups</span><span>Daily and monthly reporting</span></div>
      </section>

      <section className="section gains-section">
        <div className="section-heading compact"><span className="section-kicker">Why ETC HealthTech</span><h2>Designed around the pressure points teams actually feel.</h2></div>
        <div className="gains-grid">{operationalGains.map(([title, text]) => <article key={title}><h3>{title}</h3><p>{text}</p></article>)}</div>
      </section>

      <section id="about" className="founder-section">
        <div className="founder-heading"><span className="section-kicker">Founder story</span><h2>From hospital operations to practical software.</h2></div>
        <div className="founder-copy"><p>ETC HealthTech grew from my experience of working in NHS hospital operations. Day-to-day work in portering, patient movement and operational coordination showed me how often essential tasks still depend on phone calls, paper records and spreadsheets.</p><p>I started developing ETC HealthTech to make those processes easier to manage. The software is shaped around real working routines, from receiving requests and tracking progress to keeping evidence and producing reports.</p><p>The aim is to give hospital teams practical tools that are clear, useful and straightforward to use during a busy shift.</p></div>
      </section>

      <section id="security" className="section security-section">
        <div className="section-heading compact"><span className="section-kicker">Deployment & security</span><h2>Designed for real-world healthcare environments.</h2></div>
        <div className="security-grid">{securityItems.map((item) => <div key={item}>{item}</div>)}</div>
      </section>

      <section id="contact" className="contact-section">
        <div className="contact-intro"><span className="section-kicker">Contact</span><h2>Get in touch with the right team.</h2><p>Contact us about a product demo, general enquiry or support request.</p></div>
        <div className="contact-options">
          <a href="mailto:info@etchealthtech.com"><strong>General enquiries</strong><span>Questions about ETC HealthTech</span><small>info@etchealthtech.com</small></a>
          <a href="mailto:demo@etchealthtech.com"><strong>Product demos</strong><span>Arrange a demonstration</span><small>demo@etchealthtech.com</small></a>
          <a href="mailto:support@etchealthtech.com"><strong>Customer support</strong><span>Help with an ETC product</span><small>support@etchealthtech.com</small></a>
        </div>
      </section>

      <footer className="site-footer"><div><strong>ETC HealthTech</strong><span>Practical operational software for healthcare teams.</span></div><nav aria-label="Footer policy links"><a href="/privacy">Privacy</a><a href="/cookies">Cookies</a><a href="/terms">Terms</a><a href="/security">Security</a><a href="/data-processing">Data processing</a></nav></footer>
      <DemoRequestModal open={demoModalOpen} onClose={() => setDemoModalOpen(false)} />
    </main>
  );
}

function DemoRequestModal({ open, onClose }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState("");
  const [form, setForm] = useState({ name: "", organisation: "", email: "", product: "Waste Audit", message: "" });

  useEffect(() => {
    if (!submitted) return;
    const timer = window.setTimeout(() => setSubmitted(false), 5000);
    return () => window.clearTimeout(timer);
  }, [submitted]);

  if (!open) return null;
  function updateField(field, value) { setSubmitted(false); setSubmitError(""); setForm((current) => ({ ...current, [field]: value })); }

  async function handleSubmit(event) {
    event.preventDefault(); setSubmitting(true); setSubmitError("");
    const demoApiUrl = process.env.NEXT_PUBLIC_DEMO_API_URL;
    if (demoApiUrl) {
      try {
        const response = await fetch(demoApiUrl, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(form) });
        if (!response.ok) throw new Error("Demo request failed");
        setSubmitted(true); setForm({ name: "", organisation: "", email: "", product: "Waste Audit", message: "" }); setSubmitting(false); return;
      } catch { setSubmitError("Your request could not be sent. Please email demo@etchealthtech.com."); setSubmitting(false); return; }
    }
    const subject = encodeURIComponent(`ETC HealthTech demo request - ${form.product}`);
    const body = encodeURIComponent(["New ETC HealthTech demo request", "", `Name: ${form.name}`, `Organisation: ${form.organisation}`, `Email: ${form.email}`, `Interested product: ${form.product}`, "", "Message:", form.message || "No additional message provided."].join("\n"));
    window.location.href = `mailto:demo@etchealthtech.com?subject=${subject}&body=${body}`; setSubmitted(true); setSubmitting(false);
  }

  return <div className="demo-modal-backdrop" role="presentation" onClick={onClose}><section className="demo-modal" role="dialog" aria-modal="true" aria-labelledby="demo-modal-title" onClick={(event) => event.stopPropagation()}><div className="demo-modal-header"><span className="section-kicker">Request demo</span><button className="demo-modal-close" type="button" onClick={onClose} aria-label="Close demo request">x</button><h2 id="demo-modal-title" className="sr-only">Request an ETC HealthTech demo</h2></div><form className="demo-form" onSubmit={handleSubmit}>
    <label><span>Name</span><input required value={form.name} onChange={(e) => updateField("name", e.target.value)} placeholder="Your name" /></label>
    <label><span>Organisation / hospital</span><input required value={form.organisation} onChange={(e) => updateField("organisation", e.target.value)} placeholder="Organisation name" /></label>
    <label><span>Email</span><input required type="email" value={form.email} onChange={(e) => updateField("email", e.target.value)} placeholder="name@organisation.nhs.uk" /></label>
    <label><span>Interested product</span><select value={form.product} onChange={(e) => updateField("product", e.target.value)}><option>Waste Audit</option><option>Porter Track</option><option>Both</option></select></label>
    <label className="demo-form-wide"><span>Additional information</span><textarea value={form.message} onChange={(e) => updateField("message", e.target.value)} placeholder="Tell us which department, current process, or demo scenario you would like to see." /></label>
    {submitted && <div className="demo-form-note">Your request has been sent. We will be in touch shortly.</div>}{submitError && <div className="demo-form-error">{submitError}</div>}
    <div className="demo-form-actions"><button className="button secondary" type="button" onClick={onClose}>Cancel</button><button className="button primary" type="submit" disabled={submitting}>{submitting ? "Sending..." : "Send request"}</button></div>
  </form></section></div>;
}
