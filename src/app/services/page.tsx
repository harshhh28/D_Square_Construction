import { Metadata } from "next";
import ServicesHero from "@/components/services/services-hero";
import ServicesList from "@/components/services/services-list";
import ProcessSection from "@/components/services/process-section";
import ServicesCTA from "@/components/services/services-cta";

export const metadata: Metadata = {
  title: "Services | DSquare Construction",
  description:
    "Explore the comprehensive construction services offered by DSquare Construction, from residential to commercial projects.",
};

export default function ServicesPage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <ServicesHero />
      <ServicesList />
      <ProcessSection />
      <ServicesCTA />
    </div>
  );
}
