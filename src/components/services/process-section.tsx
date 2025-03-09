"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  ClipboardList,
  PenTool,
  HardHat,
  CheckCircle,
  MessageSquare,
  Briefcase,
} from "lucide-react";

const steps = [
  {
    title: "Initial Consultation",
    description:
      "We begin with a thorough consultation to understand your vision, requirements, and budget constraints.",
    icon: MessageSquare,
  },
  {
    title: "Planning & Design",
    description:
      "Our team develops detailed plans and designs that align with your goals and comply with all regulations.",
    icon: PenTool,
  },
  {
    title: "Proposal & Contract",
    description:
      "We provide a comprehensive proposal outlining scope, timeline, and costs, followed by a clear contract.",
    icon: Briefcase,
  },
  {
    title: "Pre-Construction",
    description:
      "Before breaking ground, we handle permits, finalize designs, and prepare the site for construction.",
    icon: ClipboardList,
  },
  {
    title: "Construction",
    description:
      "Our skilled team executes the project with precision, keeping you informed throughout the process.",
    icon: HardHat,
  },
  {
    title: "Project Completion",
    description:
      "We conduct thorough inspections and walkthroughs to ensure everything meets our high standards.",
    icon: CheckCircle,
  },
];

export default function ProcessSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section className="py-16 md:py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Construction Process
          </h2>
          <p className="text-muted-foreground text-lg">
            We follow a structured approach to ensure every project is completed
            efficiently, on time, and to the highest standards.
          </p>
        </motion.div>

        <div className="relative">
          {/* Process Line */}
          <div className="absolute left-[27px] md:left-1/2 transform md:-translate-x-1/2 top-0 h-full w-1 bg-primary/20 z-0" />

          <div className="space-y-12 md:space-y-0">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-start md:items-center gap-4 md:gap-0 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}>
                  <div className="flex-1 md:w-1/2 md:px-8">
                    <div
                      className={`bg-card rounded-lg p-6 shadow-md border ${
                        index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                      }`}>
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                          <step.icon className="h-5 w-5 text-primary" />
                        </div>
                        <h3 className="text-xl font-bold">{step.title}</h3>
                      </div>
                      <p className="text-muted-foreground">
                        {step.description}
                      </p>
                    </div>
                  </div>

                  <div className="md:w-0 z-10">
                    <div className="w-14 h-14 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-xl">
                      {index + 1}
                    </div>
                  </div>

                  <div className="flex-1 md:w-1/2 hidden md:block" />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
