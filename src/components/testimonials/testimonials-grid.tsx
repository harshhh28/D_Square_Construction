"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Quote, Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    id: 1,
    name: "John Smith",
    role: "Homeowner",
    image: "/testimonials/placeholder.svg",
    quote:
      "DSquare Construction transformed our vision into reality. Their attention to detail and commitment to quality exceeded our expectations. The team was professional, responsive, and a pleasure to work with throughout the entire process.",
    rating: 5,
    project: "Custom Home Build",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    role: "Business Owner",
    image: "/testimonials/placeholder.svg",
    quote:
      "Working with DSquare on our commercial project was a seamless experience. They delivered on time and within budget while maintaining exceptional quality. Their team's expertise and communication made the entire process stress-free.",
    rating: 5,
    project: "Office Renovation",
  },
  {
    id: 3,
    name: "Michael Brown",
    role: "Property Developer",
    image: "/testimonials/placeholder.svg",
    quote:
      "As a developer, I value reliability and expertise. DSquare Construction has consistently demonstrated both across multiple projects we've collaborated on. Their ability to solve complex challenges and deliver quality results is unmatched.",
    rating: 5,
    project: "Multi-Unit Development",
  },
  {
    id: 4,
    name: "Emily Davis",
    role: "Restaurant Owner",
    image: "/testimonials/placeholder.svg",
    quote:
      "The renovation of our restaurant was completed with minimal disruption to our business. DSquare understood our needs and delivered a beautiful space that has received countless compliments from our customers.",
    rating: 5,
    project: "Restaurant Renovation",
  },
  {
    id: 5,
    name: "Robert Wilson",
    role: "School Principal",
    image: "/testimonials/placeholder.svg",
    quote:
      "Our school addition project had specific requirements and a tight timeline. DSquare Construction not only met but exceeded our expectations, delivering a safe, functional, and aesthetically pleasing space for our students.",
    rating: 5,
    project: "Educational Facility",
  },
  {
    id: 6,
    name: "Jennifer Martinez",
    role: "Healthcare Administrator",
    image: "/testimonials/placeholder.svg",
    quote:
      "The construction of our medical facility required specialized knowledge and attention to detail. DSquare demonstrated exceptional expertise in healthcare construction, ensuring all regulatory requirements were met.",
    rating: 4,
    project: "Medical Center",
  },
  {
    id: 7,
    name: "David Thompson",
    role: "Retail Store Owner",
    image: "/testimonials/placeholder.svg",
    quote:
      "Our retail space renovation was completed on schedule, allowing us to open as planned. The quality of work and attention to our brand aesthetics was impressive. DSquare truly understood our vision.",
    rating: 5,
    project: "Retail Store Renovation",
  },
  {
    id: 8,
    name: "Lisa Anderson",
    role: "Homeowner",
    image: "/testimonials/placeholder.svg",
    quote:
      "The home addition project was a significant investment for our family. DSquare Construction guided us through every step, ensuring the new space integrated seamlessly with our existing home. We couldn't be happier with the results.",
    rating: 5,
    project: "Home Addition",
  },
];

export default function TestimonialsGrid() {
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
            What Our Clients Say
          </h2>
          <p className="text-muted-foreground text-lg">
            Don't just take our word for it. Here's what our satisfied clients
            have to say about their experience working with DSquare
            Construction.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}>
          {testimonials.map((testimonial) => (
            <motion.div key={testimonial.id} variants={itemVariants}>
              <Card className="h-full">
                <CardContent className="p-6">
                  <Quote className="h-10 w-10 text-primary/20 mb-4" />

                  <div className="flex mb-4">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-5 w-5 ${
                          i < testimonial.rating
                            ? "text-yellow-500 fill-yellow-500"
                            : "text-muted"
                        }`}
                      />
                    ))}
                  </div>

                  <p className="italic mb-6">"{testimonial.quote}"</p>

                  <div className="flex items-center">
                    <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
                      <Image
                        src={testimonial.image || "/placeholder.svg"}
                        alt={testimonial.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div>
                      <h4 className="font-bold">{testimonial.name}</h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-xs text-primary mt-1">
                        {testimonial.project}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
