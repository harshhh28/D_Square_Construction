import { Metadata } from "next";
import Hero from "@/components/home/hero";
import ServicesOverview from "@/components/home/services-overview";
import FeaturedProjects from "@/components/home/featured-projects";
import TestimonialsSection from "@/components/home/testimonials-section";
import CallToAction from "@/components/home/call-to-action";
import StatsSection from "@/components/home/stats-section";

export const metadata: Metadata = {
  title: "DSquare Construction | Building Excellence",
  description:
    "DSquare Construction is your trusted partner for high-quality construction services, from residential to commercial projects.",
};

export default function Home() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <Hero />
      <ServicesOverview />
      <StatsSection />
      <FeaturedProjects />
      <TestimonialsSection />
      <CallToAction />
    </div>
  );
}
