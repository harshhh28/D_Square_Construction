"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "Homeowner",
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1974&auto=format&fit=crop",
    quote:
      "DSquare Construction transformed our vision into reality. Their attention to detail and commitment to quality exceeded our expectations.",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Business Owner",
    image:
      "https://images.unsplash.com/photo-1573496527892-904f897eb744?q=80&w=2069&auto=format&fit=crop",
    quote:
      "Working with DSquare on our commercial project was a seamless experience. They delivered on time and within budget while maintaining exceptional quality.",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Property Developer",
    image:
      "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1974&auto=format&fit=crop",
    quote:
      "As a developer, I value reliability and expertise. DSquare Construction has consistently demonstrated both across multiple projects we've collaborated on.",
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const next = () => {
    setCurrent((current + 1) % testimonials.length);
  };

  const prev = () => {
    setCurrent((current - 1 + testimonials.length) % testimonials.length);
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
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Hear from our satisfied clients
            about their experience working with DSquare Construction.
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="bg-card rounded-lg shadow-lg p-8 md:p-12">
              <Quote className="h-12 w-12 text-primary/20 mb-6" />
              <p className="text-xl md:text-2xl italic mb-8">
                "{testimonials[current].quote}"
              </p>
              <div className="flex items-center">
                <div className="relative w-16 h-16 rounded-full overflow-hidden mr-4">
                  <Image
                    src={testimonials[current].image || "/placeholder.svg"}
                    alt={testimonials[current].name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-bold text-lg">
                    {testimonials[current].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[current].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === current ? "bg-primary" : "bg-muted-foreground/30"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -translate-y-1/2 -left-4 md:-left-6 rounded-full bg-background shadow-md"
            onClick={prev}
            aria-label="Previous testimonial">
            <ChevronLeft className="h-5 w-5" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute top-1/2 -translate-y-1/2 -right-4 md:-right-6 rounded-full bg-background shadow-md"
            onClick={next}
            aria-label="Next testimonial">
            <ChevronRight className="h-5 w-5" />
          </Button>
        </div>
      </div>
    </section>
  );
}
