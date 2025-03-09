"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

export default function AboutHero() {
  const ref = useRef(null);
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
          src="https://images.pexels.com/photos/585418/pexels-photo-585418.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Construction team"
          fill
          priority
          className="object-cover"
          style={{ filter: "brightness(0.5)" }}
        />
        <div className="absolute inset-0 bg-black/60" />
      </motion.div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4">
            About DSquare Construction
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}>
          <p className="text-lg md:text-xl max-w-2xl mx-auto">
            Building excellence with precision and passion since 1998. Your
            vision, our expertise.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
