"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import {
  Building2,
  Home,
  Warehouse,
  Ruler,
  HardHat,
  Wrench,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const services = [
  {
    title: "Residential Construction",
    description:
      "Custom homes and renovations tailored to your lifestyle and preferences.",
    icon: Home,
    href: "/services#residential",
  },
  {
    title: "Commercial Construction",
    description:
      "Office buildings, retail spaces, and commercial facilities built to specification.",
    icon: Building2,
    href: "/services#commercial",
  },
  {
    title: "Industrial Construction",
    description:
      "Warehouses, factories, and industrial facilities designed for efficiency.",
    icon: Warehouse,
    href: "/services#industrial",
  },
  {
    title: "Renovation & Remodeling",
    description:
      "Transform your existing space with our expert renovation services.",
    icon: Wrench,
    href: "/services#renovation",
  },
  {
    title: "Project Management",
    description:
      "Comprehensive project management from planning to completion.",
    icon: HardHat,
    href: "/services#management",
  },
  {
    title: "Design & Planning",
    description:
      "Architectural design and planning services to bring your vision to life.",
    icon: Ruler,
    href: "/services#design",
  },
];

export default function ServicesOverview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section className="py-16 md:py-24" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Construction Services
            </h2>
            <p className="text-muted-foreground text-lg">
              We offer a comprehensive range of construction services to meet
              all your building needs.
            </p>
          </motion.div>
        </div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}>
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full transition-all hover:shadow-md">
                <CardHeader>
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                  <CardDescription>{service.description}</CardDescription>
                </CardHeader>
                <CardFooter>
                  <Button asChild variant="ghost" size="sm">
                    <Link href={service.href} className="flex items-center">
                      Learn More <ChevronRight className="ml-1 h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="text-center mt-12">
          <Button asChild size="lg">
            <Link href="/services">View All Services</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
