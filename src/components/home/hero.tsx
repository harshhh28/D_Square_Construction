"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import { useTheme } from "next-themes";

export default function Hero() {
  const ref = useRef(null);
  const { theme } = useTheme();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section
      ref={ref}
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        <Image
          src="https://images.unsplash.com/photo-1541976590-713941681591?q=80&w=2070&auto=format&fit=crop"
          alt="Construction site"
          fill
          priority
          className="object-cover"
          style={{
            filter:
              theme === "light"
                ? "brightness(1) blur(4px)"
                : "brightness(0.5) blur(4px)",
          }}
        />
        <div
          className={`absolute inset-0 ${
            theme === "light" ? "bg-black/30" : "bg-black/50"
          }`}
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            Building Excellence, <br />
            <span className="text-primary">Crafting Dreams</span>
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8">
            DSquare Construction delivers exceptional building solutions with
            precision, innovation, and uncompromising quality for your
            residential and commercial projects.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button asChild size="lg" className="min-w-[160px]">
            <Link href="/contact">Get a Quote</Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="min-w-[160px] bg-background/10 backdrop-blur-sm hover:bg-background/20 border-white/20">
            <Link href="/projects" className="group">
              Our Projects
              <ChevronRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 1 }}>
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-6 h-10 rounded-full border-2 border-white flex items-start justify-center p-1">
          <motion.div className="w-1 h-2 bg-white rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
