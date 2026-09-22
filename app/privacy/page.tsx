"use client";

import Link from "next/link";

export default function PrivacyPage() {
  return (
    <main>
      <section className="subpage-hero">
        <div className="shell text-center">
          <h1 className="subpage-title">Privacy Policy</h1>
          <p className="subpage-subtitle mx-auto">
            How Adyantra Digital protects and respects your corporate data and privacy.
          </p>
        </div>
      </section>
      <section className="section-padding" style={{ background: "#f8faff", borderTop: "1px solid #e2e8f0" }}>
        <div className="shell">
          <div className="legal-content">
            <p>
              <strong>Last Updated: January 2026</strong>
            </p>
            <h2>1. Information We Collect</h2>
            <p>
              Adyantra Digital ("we," "our," or "us") collects business contact information submitted through our inquiry forms, strategy booking requests, and diagnostic audit tools, including your name, corporate email address, telephone number, and business objectives.
            </p>
            <h2>2. How We Use Information</h2>
            <p>
              We use the data collected exclusively to deliver our digital marketing, software development, and AI automation consulting services, provide performance attribution reporting, and communicate project deliverables.
            </p>
            <h2>3. Data Protection &amp; Confidentiality</h2>
            <p>
              We deploy strict technical and organizational measures, including TLS 1.3 encryption in transit and AES-256 encryption at rest. We never sell, rent, or trade client information to any third parties.
            </p>
            <h2>4. Contact Us</h2>
            <p>
              If you have any questions about our privacy practices, please contact us at{" "}
              <a href="mailto:info@adyantra.in" style={{ color: "#ef5b52", fontWeight: 600 }}>
                info@adyantra.in
              </a>{" "}
              or call{" "}
              <a href="tel:+918309275093" style={{ color: "#ef5b52", fontWeight: 600 }}>
                +91 83092 75093
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
