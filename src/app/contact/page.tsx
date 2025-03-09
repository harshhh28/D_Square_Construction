import { Metadata } from "next";
import ContactHero from "@/components/contact/contact-hero";
import ContactForm from "@/components/contact/contact-form";
import ContactInfo from "@/components/contact/contact-info";
import ContactMap from "@/components/contact/contact-map";

export const metadata: Metadata = {
  title: "Contact Us | DSquare Construction",
  description:
    "Get in touch with DSquare Construction for your construction project needs.",
};

export default function ContactPage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <ContactHero />
      <div className="container mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12">
        <ContactForm />
        <div className="space-y-12">
          <ContactInfo />
          <ContactMap />
        </div>
      </div>
    </div>
  );
}
