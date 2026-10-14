"use client";

import React, { useState, useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

const STEPS = [
  {
    id: "step-1",
    phase: "PHASE 01 // FOUNDATION",
    title: "Balanced Ternary Logic",
    subtitle: "Symmetric Tri-State Switching",
    description:
      "At the lowest architectural tier, balanced ternary replaces binary dualism with three discrete physical voltage states (-1, 0, +1). By removing asymmetric sign bits and arithmetic complement overhead, radix-3 maximizes informational density per circuit trace.",
    spec: "RADIX = 3 // VOLTAGES: -1.5V, 0.0V, +1.5V",
  },
  {
    id: "step-2",
    phase: "PHASE 02 // SYSTEMS",
    title: "Deterministic Microkernel",
    subtitle: "Zero-Ambient-Authority Scheduling",
    description:
      "Logic states feed into ATLAS OS—a capability-based microkernel written in memory-safe Rust. Instead of general-purpose time-slicing, the scheduler guarantees bounded IPC latency (< 15μs) to service high-frequency inertial sensor interrupts without jitter.",
    spec: "KERNEL LATENCY < 15μs // ZERO-COPY RING BUFFERS",
  },
  {
    id: "step-3",
    phase: "PHASE 03 // EMBODIMENT",
    title: "Autonomous Flight Telemetry",
    subtitle: "Real-Time Sensor-to-Actuator Loop",
    description:
      "The microkernel directly drives the autonomous airframe flight loop. Visual inertial odometry (VIO) feeds continuous state estimations into a 500Hz attitude controller, executing physical maneuvers in GPS-denied environments.",
    spec: "LOOP FREQUENCY: 500Hz // ATTITUDE JITTER < 0.2°",
  },
];

export function SignatureStoryClient() {
  const [activeStep, setActiveStep] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.getAttribute("data-step-index"));
            if (!isNaN(index)) {
              setActiveStep(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-25% 0px -25% 0px",
        threshold: 0.4,
      }
    );

    const stepElements = containerRef.current?.querySelectorAll(".story-scroll-trigger");
    stepElements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={containerRef} className="relative">
      <div className="hidden lg:flex items-center gap-2 mb-8 border-b border-stone/80 pb-4">
        <span className="font-mono text-xs text-warm-grey uppercase tracking-widest mr-2">
          CONTINUITY FLOW:
        </span>
        {STEPS.map((step, idx) => (
          <button
            key={step.id}
            type="button"
            onClick={() => setActiveStep(idx)}
            className={cn(
              "px-3 py-1.5 font-mono text-xs rounded-sm transition-colors border text-left",
              activeStep === idx
                ? "bg-charcoal text-porcelain border-charcoal"
                : "bg-porcelain text-charcoal-muted border-stone hover:border-charcoal hover:text-charcoal"
            )}
          >
            {`0${idx + 1}. ${step.title}`}
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        <div className="lg:col-span-6 space-y-8">
          {STEPS.map((step, idx) => (
            <div
              key={step.id}
              data-step-index={idx}
              className={cn(
                "story-scroll-trigger p-6 md:p-8 rounded-sm border transition-all duration-300",
                activeStep === idx
                  ? "bg-porcelain border-copper shadow-tactile ring-1 ring-copper/30"
                  : "bg-stone/20 border-stone opacity-80 lg:opacity-60 hover:opacity-100"
              )}
            >
              <div className="flex items-center justify-between font-mono text-xs pb-3 border-b border-stone/60">
                <span className="text-copper font-medium">{step.phase}</span>
                <span className="text-warm-grey">STAGE 0{idx + 1}/03</span>
              </div>

              <h3 className="font-display text-2xl md:text-3xl text-charcoal mt-4 font-normal">
                {step.title}
              </h3>
              <div className="font-mono text-xs text-copper-pale uppercase tracking-wider mt-1">
                {step.subtitle}
              </div>

              <p className="font-sans text-sm md:text-base text-charcoal/85 leading-relaxed mt-4">
                {step.description}
              </p>

              <div className="mt-5 pt-3 border-t border-stone/60 font-mono text-xs text-warm-grey flex items-center justify-between">
                <span>SPECIFICATION</span>
                <span className="text-charcoal font-medium">{step.spec}</span>
              </div>

              <div className="mt-6 pt-4 border-t border-stone/60 block lg:hidden">
                <ApparatusVisualizer stepIndex={idx} />
              </div>
            </div>
          ))}
        </div>

        <div className="hidden lg:block lg:col-span-6 sticky top-24">
          <div className="border border-stone rounded-sm bg-porcelain p-6 shadow-tactile space-y-4">
            <div className="flex items-center justify-between border-b border-stone/80 pb-3 font-mono text-xs text-warm-grey">
              <span>APPARATUS MORPH // STAGE 0{activeStep + 1} OF 03</span>
              <span className="text-copper">LIVE TELEMETRY</span>
            </div>

            <div className="min-h-[360px] flex items-center justify-center p-4 bg-stone/20 border border-stone/60 rounded-sm">
              <ApparatusVisualizer stepIndex={activeStep} />
            </div>

            <div className="flex items-center justify-between font-mono text-[11px] text-warm-grey pt-1">
              <span>{STEPS[activeStep].phase}</span>
              <span className="text-copper">{STEPS[activeStep].spec}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function ApparatusVisualizer({ stepIndex }: { stepIndex: number }) {
  if (stepIndex === 0) {
    return (
      <svg viewBox="0 0 400 240" fill="none" className="w-full max-h-[300px]">
        <rect width="400" height="240" fill="#F3F0E8" />
        <line x1="40" y1="50" x2="360" y2="50" stroke="#E2DDD2" strokeWidth="1" strokeDasharray="3 3" />
        <line x1="40" y1="120" x2="360" y2="120" stroke="#292925" strokeWidth="1" strokeOpacity="0.4" />
        <line x1="40" y1="190" x2="360" y2="190" stroke="#E2DDD2" strokeWidth="1" strokeDasharray="3 3" />
        <text x="35" y="54" textAnchor="end" fill="#9C6246" fontSize="9" fontFamily="var(--font-geist-mono)">+1 (+1.5V)</text>
        <text x="35" y="124" textAnchor="end" fill="#A4A095" fontSize="9" fontFamily="var(--font-geist-mono)">0 (0.0V)</text>
        <text x="35" y="194" textAnchor="end" fill="#9C6246" fontSize="9" fontFamily="var(--font-geist-mono)">−1 (−1.5V)</text>
        <path d="M 60 190 L 120 190 L 120 120 L 180 120 L 180 50 L 250 50 L 250 120 L 300 120 L 300 190 L 350 190" stroke="#9C6246" strokeWidth="2.5" fill="none" />
        <circle cx="120" cy="190" r="3.5" fill="#9C6246" />
        <circle cx="180" cy="120" r="3.5" fill="#292925" />
        <circle cx="250" cy="50" r="3.5" fill="#9C6246" />
        <circle cx="300" cy="120" r="3.5" fill="#292925" />
        <text x="200" y="225" textAnchor="middle" fill="#292925" fontSize="10" fontFamily="var(--font-geist-mono)">BALANCED TERNARY VOLTAGE TRANSITIONS</text>
      </svg>
    );
  }

  if (stepIndex === 1) {
    return (
      <svg viewBox="0 0 400 240" fill="none" className="w-full max-h-[300px]">
        <rect width="400" height="240" fill="#F3F0E8" />
        <circle cx="200" cy="120" r="48" fill="#E2DDD2" stroke="#292925" strokeWidth="1.5" />
        <text x="200" y="117" textAnchor="middle" fill="#292925" fontSize="10" fontWeight="bold" fontFamily="var(--font-geist-mono)">ATLAS CORE</text>
        <text x="200" y="132" textAnchor="middle" fill="#9C6246" fontSize="8" fontFamily="var(--font-geist-mono)">RING 0</text>
        {[
          { cx: 80, cy: 65, label: "IMU DRIVER" },
          { cx: 320, cy: 65, label: "VIO ENGINE" },
          { cx: 80, cy: 175, label: "IPC RING" },
          { cx: 320, cy: 175, label: "ACTUATOR" },
        ].map((node, i) => (
          <g key={i}>
            <line x1="200" y1="120" x2={node.cx} y2={node.cy} stroke="#9C6246" strokeWidth="1" strokeDasharray="3 3" />
            <circle cx={node.cx} cy={node.cy} r="28" fill="#F3F0E8" stroke="#292925" strokeWidth="1.25" />
            <text x={node.cx} y={node.cy + 3} textAnchor="middle" fill="#292925" fontSize="7.5" fontWeight="bold" fontFamily="var(--font-geist-mono)">{node.label}</text>
          </g>
        ))}
        <text x="200" y="225" textAnchor="middle" fill="#292925" fontSize="10" fontFamily="var(--font-geist-mono)">CAPABILITY TOKENS // ZERO AMBIENT AUTHORITY</text>
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 400 240" fill="none" className="w-full max-h-[300px]">
      <rect width="400" height="240" fill="#F3F0E8" />
      <circle cx="200" cy="115" r="75" stroke="#E2DDD2" strokeWidth="1" strokeDasharray="2 4" />
      <circle cx="200" cy="115" r="45" stroke="#9C6246" strokeWidth="0.75" />
      <line x1="80" y1="115" x2="320" y2="115" stroke="#292925" strokeWidth="1" />
      <line x1="200" y1="35" x2="200" y2="195" stroke="#292925" strokeWidth="1" />
      <path d="M 175 115 L 195 125 L 205 125 L 225 115" stroke="#292925" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <circle cx="200" cy="115" r="2.5" fill="#9C6246" />
      <text x="80" y="45" fill="#A4A095" fontSize="8" fontFamily="var(--font-geist-mono)">ROLL: +0.14°</text>
      <text x="80" y="58" fill="#A4A095" fontSize="8" fontFamily="var(--font-geist-mono)">PITCH: -0.08°</text>
      <text x="320" y="45" textAnchor="end" fill="#9C6246" fontSize="8" fontFamily="var(--font-geist-mono)">LOOP: 500.2 Hz</text>
      <text x="320" y="58" textAnchor="end" fill="#A4A095" fontSize="8" fontFamily="var(--font-geist-mono)">ESTOP: ARMED</text>
      <text x="200" y="225" textAnchor="middle" fill="#292925" fontSize="10" fontFamily="var(--font-geist-mono)">AUTONOMOUS GUIDANCE ATTITUDE STABILITY LOOP</text>
    </svg>
  );
}

export default SignatureStoryClient;
