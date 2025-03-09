"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";
import { useTheme } from "next-themes";

export default function ContactHero() {
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
      className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Parallax Effect */}
      <motion.div className="absolute inset-0 z-0" style={{ y, opacity }}>
        <Image
          src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?q=80&w=2071&auto=format&fit=crop"
          alt="Contact us"
          fill
          priority
          className="object-cover"
          style={{ filter: "brightness(0.4)" }}
        />
        <div
          className={`absolute inset-0 ${
            theme === "dark" ? "bg-black/60" : "bg-black/20"
          }`}
        />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4 drop-shadow-md">
            Contact Us
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <p className="text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Get in touch with our team to discuss your construction project
            needs.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
