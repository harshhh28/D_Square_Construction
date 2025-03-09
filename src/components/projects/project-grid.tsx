"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";

const projects = [
  {
    id: 1,
    title: "Modern Office Complex",
    category: "Commercial",
    location: "Downtown, Building City",
    year: "2022",
    image: "/placeholder.svg?height=600&width=800",
    slug: "modern-office-complex",
  },
  {
    id: 2,
    title: "Luxury Residential Tower",
    category: "Residential",
    location: "Waterfront, Building City",
    year: "2021",
    image: "/placeholder.svg?height=600&width=800",
    slug: "luxury-residential-tower",
  },
  {
    id: 3,
    title: "Industrial Warehouse",
    category: "Industrial",
    location: "Industrial Park, Building City",
    year: "2023",
    image: "/placeholder.svg?height=600&width=800",
    slug: "industrial-warehouse",
  },
  {
    id: 4,
    title: "Historic Building Renovation",
    category: "Renovation",
    location: "Old Town, Building City",
    year: "2020",
    image: "/placeholder.svg?height=600&width=800",
    slug: "historic-building-renovation",
  },
  {
    id: 5,
    title: "Shopping Mall Extension",
    category: "Commercial",
    location: "Suburbs, Building City",
    year: "2022",
    image: "/placeholder.svg?height=600&width=800",
    slug: "shopping-mall-extension",
  },
  {
    id: 6,
    title: "Eco-Friendly Apartment Complex",
    category: "Residential",
    location: "Green District, Building City",
    year: "2023",
    image: "/placeholder.svg?height=600&width=800",
    slug: "eco-friendly-apartment-complex",
  },
  {
    id: 7,
    title: "Manufacturing Facility",
    category: "Industrial",
    location: "Industrial Zone, Building City",
    year: "2021",
    image: "/placeholder.svg?height=600&width=800",
    slug: "manufacturing-facility",
  },
  {
    id: 8,
    title: "Luxury Villa Remodel",
    category: "Renovation",
    location: "Hillside, Building City",
    year: "2022",
    image: "/placeholder.svg?height=600&width=800",
    slug: "luxury-villa-remodel",
  },
  {
    id: 9,
    title: "Corporate Headquarters",
    category: "Commercial",
    location: "Business District, Building City",
    year: "2023",
    image: "/placeholder.svg?height=600&width=800",
    slug: "corporate-headquarters",
  },
];

export default function ProjectsGrid() {
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
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-primary text-primary-foreground rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-white/80 mt-2">
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
