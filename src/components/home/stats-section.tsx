"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Building, Users, Award, Calendar } from "lucide-react";

const stats = [
  {
    value: "150+",
    label: "Projects Completed",
    icon: Building,
  },
  {
    value: "25+",
    label: "Years of Experience",
    icon: Calendar,
  },
  {
    value: "50+",
    label: "Team Members",
    icon: Users,
  },
  {
    value: "15+",
    label: "Industry Awards",
    icon: Award,
  },
];

export default function StatsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section className="py-16 md:py-24 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-4">
                <stat.icon className="h-8 w-8 text-primary" />
              </div>
              <motion.h3
                initial={{ opacity: 0, scale: 0.5 }}
                animate={
                  isInView
                    ? { opacity: 1, scale: 1 }
                    : { opacity: 0, scale: 0.5 }
                }
                transition={{ duration: 0.5, delay: index * 0.1 + 0.2 }}
                className="text-3xl md:text-4xl font-bold mb-2">
                {stat.value}
              </motion.h3>
              <p className="text-muted-foreground">{stat.label}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
