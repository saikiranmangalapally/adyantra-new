"use client";

import Link from "next/link";

export default function TermsPage() {
  return (
    <main>
      <section className="subpage-hero">
        <div className="shell text-center">
          <h1 className="subpage-title">Terms of Service</h1>
          <p className="subpage-subtitle mx-auto">
            Transparent terms governing our digital engineering and marketing engagements.
          </p>
        </div>
      </section>
      <section className="section-padding" style={{ background: "#f8faff", borderTop: "1px solid #e2e8f0" }}>
        <div className="shell">
          <div className="legal-content">
            <p>
              <strong>Last Updated: January 2026</strong>
            </p>
            <h2>1. Acceptance of Terms</h2>
            <p>
              By accessing or utilizing services provided by Adyantra Digital, you agree to be bound by these Terms of Service and all applicable laws and regulations.
            </p>
            <h2>2. Scope of Services</h2>
            <p>
              Adyantra Digital provides performance marketing, search engine optimization, web software development, and AI automation consulting as specified in individual client statements of work.
            </p>
            <h2>3. Intellectual Property Rights</h2>
            <p>
              All custom code, automations, and deliverables created for clients become the exclusive property of the client upon full payment of fees as outlined in project agreements.
            </p>
            <h2>4. Inquiries</h2>
            <p>
              Questions regarding these terms should be addressed to{" "}
              <a href="mailto:info@adyantra.in" style={{ color: "#ef5b52", fontWeight: 600 }}>
                info@adyantra.in
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
