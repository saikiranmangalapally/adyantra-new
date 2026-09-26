"use client";

import React from "react";

export interface ProcessPhase {
  step: string;
  title: string;
  desc: string;
}

const PHASES: ProcessPhase[] = [
  {
    step: "01",
    title: "Discovery & Process Audit",
    desc: "We audit manual bottlenecks, communication channels, data silos, CRM state structures, and operator workflows to isolate highest-ROI automation opportunities.",
  },
  {
    step: "02",
    title: "Strategize & Architecture",
    desc: "We engineer deterministic webhook topologies, multi-agent reasoning trees, private RAG vector memory schemas, and bi-directional CRM state synchronizations.",
  },
  {
    step: "03",
    title: "Build & Sandbox Simulation",
    desc: "Our senior engineers construct custom autonomous agents, configure idempotent queues, test zero-hallucination guardrails, and validate API endpoints.",
  },
  {
    step: "04",
    title: "Launch & Live Telemetry",
    desc: "We execute zero-downtime production cutover, activate real-time prompt latency tracking, and deliver 24/7 autonomous monitoring with guaranteed sub-5s response SLAs.",
  },
];

export default function InteractiveProvenProcess() {
  return (
    <section className="section process" id="process" aria-labelledby="process-title">
      <div className="shell">
        <div className="section-heading section-heading--center">
          <span className="ref-pill-kicker">OUR PROVEN PROCESS</span>
          <h2 id="process-title">
            A Transparent <span className="ady-gradient-text">4-Phase Automation Methodology</span>
          </h2>
          <p>
            Our structured 4-phase framework ensures rapid deployment, data-driven optimization, and predictable scaling with zero operational downtime.
          </p>
        </div>

        <div className="process-grid">
          {PHASES.map((p) => (
            <article key={p.step}>
              <span>{p.step}</span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
