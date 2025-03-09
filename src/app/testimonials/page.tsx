import { Metadata } from "next";
import TestimonialsHero from "@/components/testimonials/testimonials-hero";
import TestimonialsGrid from "@/components/testimonials/testimonials-grid";

export const metadata: Metadata = {
  title: "Testimonials | DSquare Construction",
  description:
    "Read what our clients say about their experience working with DSquare Construction.",
};

export default function TestimonialsPage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <TestimonialsHero />
      <TestimonialsGrid />
    </div>
  );
}
