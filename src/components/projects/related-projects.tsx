"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { getRelatedProjects } from "@/lib/projects";
import { useTheme } from "next-themes";

export default function RelatedProjects({
  currentProjectId,
}: {
  currentProjectId: number;
}) {
  const relatedProjects = getRelatedProjects(currentProjectId, 3);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const { theme } = useTheme();

  if (relatedProjects.length === 0) return null;

  return (
    <section className="py-16 bg-muted/30" ref={ref}>
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold mb-2">Related Projects</h2>
            <p className="text-muted-foreground">
              Explore more of our similar construction projects
            </p>
          </div>

          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link href="/projects" className="group">
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {relatedProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}>
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
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
