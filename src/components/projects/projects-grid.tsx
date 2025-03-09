"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { getAllProjects } from "@/lib/projects";
import { useTheme } from "next-themes";

export default function ProjectsGrid() {
  const projects = getAllProjects();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { theme } = useTheme();

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
    <motion.div
      ref={ref}
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}>
      {projects.map((project) => (
        <motion.div key={project.id} variants={itemVariants}>
          <Link href={`/projects/${project.slug}`} className="group block">
            <div className="relative overflow-hidden rounded-lg">
              <div className="aspect-[4/3]">
                <Image
                  src={project.mainImage || "/placeholder.svg"}
                  alt={project.title}
                  width={800}
                  height={600}
                  className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div
                className={`absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent ${
                  theme === "dark" ? "opacity-80" : "opacity-60"
                }`}
              />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors drop-shadow-sm">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-white/80 mt-2 drop-shadow-sm">
                  <span>{project.location}</span>
                  <span>•</span>
                  <span>{project.year}</span>
                </div>
              </div>
            </div>
          </Link>
        </motion.div>
      ))}
    </motion.div>
  );
}
