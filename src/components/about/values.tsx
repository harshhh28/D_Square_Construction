"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Shield, Heart, Lightbulb, Users, Clock, Sparkles } from "lucide-react";

const values = [
  {
    title: "Integrity",
    description:
      "We conduct business with honesty, transparency, and ethical standards in all our interactions.",
    icon: Shield,
  },
  {
    title: "Excellence",
    description:
      "We strive for excellence in every aspect of our work, from planning to execution and delivery.",
    icon: Sparkles,
  },
  {
    title: "Innovation",
    description:
      "We embrace innovative solutions and technologies to deliver superior construction results.",
    icon: Lightbulb,
  },
  {
    title: "Teamwork",
    description:
      "We believe in collaborative efforts and the power of working together to achieve common goals.",
    icon: Users,
  },
  {
    title: "Reliability",
    description:
      "We are committed to delivering projects on time, within budget, and to the highest standards.",
    icon: Clock,
  },
  {
    title: "Client Focus",
    description:
      "We prioritize our clients' needs and satisfaction in every project we undertake.",
    icon: Heart,
  },
];

export default function Values() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

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
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Core Values
          </h2>
          <p className="text-muted-foreground text-lg">
            These principles guide our decisions, shape our culture, and define
            how we deliver value to our clients.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}>
          {values.map((value, index) => (
            <motion.div key={index} variants={itemVariants}>
              <div className="bg-card rounded-lg p-6 shadow-md border h-full">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <value.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
