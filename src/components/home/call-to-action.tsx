"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Phone, Mail } from "lucide-react";

export default function CallToAction() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      className="py-16 md:py-24 bg-primary text-primary-foreground"
      ref={ref}>
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5 }}>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Construction Project?
            </h2>
            <p className="text-xl opacity-90 mb-8">
              Contact us today for a free consultation and quote. Let's build
              something great together.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href="/contact" className="min-w-[180px]">
                Get a Quote
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-primary-foreground/20 hover:bg-primary-foreground/10">
              <a
                href="tel:+15551234567"
                className="min-w-[180px] flex items-center justify-center">
                <Phone className="mr-2 h-4 w-4" /> Call Us
              </a>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-8">
            <p className="flex items-center justify-center">
              <Mail className="mr-2 h-5 w-5" />
              <a
                href="mailto:info@dsquareconstruction.com"
                className="hover:underline">
                info@dsquareconstruction.com
              </a>
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
