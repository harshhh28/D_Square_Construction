"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import {
  Home,
  Building2,
  Warehouse,
  Wrench,
  HardHat,
  Ruler,
} from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const services = [
  {
    id: "residential",
    title: "Residential Construction",
    icon: Home,
    description:
      "We build custom homes that reflect your unique style and meet your specific needs. From luxury residences to multi-family dwellings, our team handles every aspect of residential construction with precision and care.",
    features: [
      "Custom home building",
      "Home renovations and additions",
      "Multi-family residential projects",
      "Luxury home construction",
      "Energy-efficient home design",
      "Interior and exterior remodeling",
    ],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "commercial",
    title: "Commercial Construction",
    icon: Building2,
    description:
      "Our commercial construction services deliver functional, attractive spaces for businesses of all sizes. We understand the unique requirements of commercial projects and work to minimize disruption while maximizing value.",
    features: [
      "Office buildings and complexes",
      "Retail spaces and shopping centers",
      "Restaurants and hospitality venues",
      "Medical facilities and clinics",
      "Educational institutions",
      "Mixed-use developments",
    ],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "industrial",
    title: "Industrial Construction",
    icon: Warehouse,
    description:
      "We specialize in constructing industrial facilities that prioritize functionality, efficiency, and safety. Our team has the expertise to handle the complex requirements of industrial construction projects.",
    features: [
      "Manufacturing facilities",
      "Warehouses and distribution centers",
      "Processing plants",
      "Industrial renovations",
      "Equipment foundations",
      "Specialized industrial structures",
    ],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "renovation",
    title: "Renovation & Remodeling",
    icon: Wrench,
    description:
      "Transform your existing space with our comprehensive renovation and remodeling services. We breathe new life into outdated structures while preserving their character and enhancing their functionality.",
    features: [
      "Complete home renovations",
      "Kitchen and bathroom remodeling",
      "Commercial space renovations",
      "Historic building restoration",
      "Basement and attic conversions",
      "Facade improvements",
    ],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "management",
    title: "Project Management",
    icon: HardHat,
    description:
      "Our project management services ensure your construction project runs smoothly from concept to completion. We coordinate all aspects of the project, keeping it on schedule and within budget.",
    features: [
      "Comprehensive project planning",
      "Budget development and management",
      "Schedule creation and monitoring",
      "Quality control and assurance",
      "Subcontractor coordination",
      "Regular progress reporting",
    ],
    image: "/placeholder.svg?height=600&width=800",
  },
  {
    id: "design",
    title: "Design & Planning",
    icon: Ruler,
    description:
      "Our design and planning services help bring your vision to life. We work closely with you to develop detailed plans that meet your aesthetic preferences, functional requirements, and budget constraints.",
    features: [
      "Architectural design services",
      "Space planning and layout",
      "Permit acquisition assistance",
      "Building code compliance",
      "3D modeling and visualization",
      "Sustainable design solutions",
    ],
    image: "/placeholder.svg?height=600&width=800",
  },
];

export default function ServicesList() {
  const [activeTab, setActiveTab] = useState("residential");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Construction Services
          </h2>
          <p className="text-muted-foreground text-lg">
            We offer a wide range of construction services to meet all your
            building needs, from residential to commercial and industrial
            projects.
          </p>
        </motion.div>

        <Tabs
          defaultValue="residential"
          value={activeTab}
          onValueChange={setActiveTab}
          className="w-full">
          <TabsList className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 h-auto mb-12">
            {services.map((service) => (
              <TabsTrigger
                key={service.id}
                value={service.id}
                className="flex flex-col items-center gap-2 py-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground">
                <service.icon className="h-5 w-5" />
                <span className="text-sm">{service.title.split(" ")[0]}</span>
              </TabsTrigger>
            ))}
          </TabsList>

          {services.map((service) => (
            <TabsContent key={service.id} value={service.id} className="mt-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={service.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.3 }}
                  className="grid md:grid-cols-2 gap-8 items-center">
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                        <service.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-2xl font-bold">{service.title}</h3>
                    </div>

                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {service.features.map((feature, index) => (
                        <div key={index} className="flex items-center gap-2">
                          <div className="w-2 h-2 rounded-full bg-primary" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="relative rounded-lg overflow-hidden aspect-[4/3]">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </motion.div>
              </AnimatePresence>
            </TabsContent>
          ))}
        </Tabs>
      </div>
    </section>
  );
}
