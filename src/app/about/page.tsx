import { Metadata } from "next";
import AboutHero from "@/components/about/about-hero";
import MissionVision from "@/components/about/mission-vision";
import TeamSection from "@/components/about/team-section";
import Timeline from "@/components/about/timeline";
import Values from "@/components/about/values";

export const metadata: Metadata = {
  title: "About DSquare Construction | Our Story",
  description:
    "Learn about DSquare Construction's mission, vision, team, and experience in the construction industry.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <AboutHero />
      <MissionVision />
      <Values />
      <TeamSection />
      <Timeline />
    </div>
  );
}
