import { Metadata } from "next";
import ProjectsHero from "@/components/projects/projects-hero";
import ProjectsGrid from "@/components/projects/projects-grid";
import ProjectsFilter from "@/components/projects/projects-filter";

export const metadata: Metadata = {
  title: "Projects | DSquare Construction",
  description:
    "View our portfolio of completed and ongoing construction projects by DSquare Construction.",
};

export default function ProjectsPage() {
  return (
    <div className="flex flex-col gap-20 pb-20">
      <ProjectsHero />
      <div className="container mx-auto px-4">
        <ProjectsFilter />
        <ProjectsGrid />
      </div>
    </div>
  );
}
