import React from "react";
import Link from "next/link";
import { StatusChip } from "@/components/ui/StatusChip";

export function RoboticsPreview() {
  return (
    <section className="py-20 md:py-28 bg-porcelain border-b border-stone">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-6 space-y-6">
            <div className="flex items-center gap-3">
              <StatusChip label="CONCEPT EXPLORATION" variant="concept" dot />
              <span className="font-mono text-xs text-warm-grey">EMBODIED SYSTEMS</span>
            </div>

            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-normal text-charcoal">
              AI Drone Kit &amp; Embodied Machine Intelligence
            </h2>

            <p className="font-sans text-base text-charcoal/80 leading-relaxed">
              We explore the frontier where real-time microkernels interface with physical actuators. Our autonomous drone kit concept investigates unibody carbon-fiber geometry, modular edge-compute carriers, and tight camera-to-IMU synchronization.
            </p>

            <div className="p-4 border border-copper/30 bg-copper/5 rounded-sm font-sans text-xs text-charcoal/85 leading-relaxed">
              <span className="font-mono text-copper font-medium block mb-1">REALITY NOTICE // CONCEPT STAGE</span>
              The drone kit is an active research exploration, not a commercial product. No consumer units are shipping. No pre-orders or delivery dates are accepted.
            </div>

            <div>
              <Link
                href="/robotics"
                className="inline-flex items-center px-5 py-2.5 rounded-sm bg-charcoal text-porcelain font-sans text-sm font-medium hover:bg-charcoal/90 transition-colors"
              >
                View Conceptual CAD &amp; Telemetry →
              </Link>
            </div>
          </div>

          <div className="lg:col-span-6 p-6 border border-stone bg-stone/20 rounded-sm space-y-3 font-mono text-xs">
            <div className="flex justify-between border-b border-stone pb-2 text-warm-grey">
              <span>AIRFRAME CONCEPT</span>
              <span className="text-copper">QUADROTOR STUDY</span>
            </div>
            <ul className="space-y-2 text-charcoal/80">
              <li>— Structural: Monocoque carbon-fiber composite concept</li>
              <li>— Sensor Fusion: Stereo optical flow + 6-DoF IMU loop</li>
              <li>— Controller: 500Hz attitude stabilization loop</li>
              <li>— Guidance: Visual-Inertial Odometry (GPS-denied)</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RoboticsPreview;
