"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";

const milestones = [
  {
    year: "1998",
    title: "Company Founded",
    description:
      "DSquare Construction was established with a vision to deliver exceptional building solutions.",
  },
  {
    year: "2005",
    title: "Expansion to Commercial Projects",
    description:
      "Successfully expanded our services to include commercial construction projects.",
  },
  {
    year: "2010",
    title: "Industry Recognition",
    description:
      "Received our first industry award for excellence in construction and project management.",
  },
  {
    year: "2015",
    title: "Sustainable Building Initiative",
    description:
      "Launched our sustainable building initiative, focusing on eco-friendly construction practices.",
  },
  {
    year: "2020",
    title: "Digital Transformation",
    description:
      "Implemented cutting-edge technology and digital solutions to enhance our construction processes.",
  },
  {
    year: "Today",
    title: "Industry Leader",
    description:
      "Recognized as an industry leader with a portfolio of successful projects across multiple sectors.",
  },
];

export default function Timeline() {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Journey</h2>
          <p className="text-muted-foreground text-lg">
            From our humble beginnings to becoming an industry leader, explore
            the key milestones in our company's history.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-1 bg-muted" />

          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }
                  }
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col md:flex-row items-center ${
                    index % 2 === 0 ? "md:flex-row-reverse" : ""
                  }`}>
                  <div className="flex-1 md:w-1/2 p-6">
                    <div className="bg-card rounded-lg p-6 shadow-md border">
                      <div className="text-primary font-bold text-xl mb-2">
                        {milestone.year}
                      </div>
                      <h3 className="text-xl font-bold mb-2">
                        {milestone.title}
                      </h3>
                      <p className="text-muted-foreground">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <div className="md:w-16 flex justify-center">
                    <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center z-10">
                      <span className="text-primary-foreground font-bold">
                        {index + 1}
                      </span>
                    </div>
                  </div>

                  <div className="flex-1 md:w-1/2" />
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
