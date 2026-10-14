import React from "react";
import { Hero } from "@/components/home/Hero";
import { Principles } from "@/components/home/Principles";
import { TernaryPreview } from "@/components/home/TernaryPreview";
import { SignatureStory } from "@/components/home/SignatureStory";
import { SystemsPreview } from "@/components/home/SystemsPreview";
import { RoboticsPreview } from "@/components/home/RoboticsPreview";
import { InfrastructurePreview } from "@/components/home/InfrastructurePreview";
import { OpenEngineering } from "@/components/home/OpenEngineering";
import { ClosingColophon } from "@/components/home/ClosingColophon";

export default function Home() {
  return (
    <article className="min-h-screen">
      <Hero />
      <Principles />
      <TernaryPreview />
      <SignatureStory />
      <SystemsPreview />
      <RoboticsPreview />
      <InfrastructurePreview />
      <OpenEngineering />
      <ClosingColophon />
    </article>
  );
}
