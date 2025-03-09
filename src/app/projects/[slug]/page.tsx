import { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectDetails from "@/components/projects/project-details";
import ProjectGallery from "@/components/projects/project-gallery";
import ProjectSpecs from "@/components/projects/project-specs";
import RelatedProjects from "@/components/projects/related-projects";
import { getProjectBySlug, getAllProjectSlugs } from "@/lib/projects";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    return {
      title: "Project Not Found | DSquare Construction",
    };
  }

  return {
    title: `${project.title} | DSquare Construction Projects`,
    description: project.description,
  };
}

export async function generateStaticParams() {
  const slugs = getAllProjectSlugs();
  return slugs.map((slug) => ({ slug }));
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = getProjectBySlug(params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="flex flex-col gap-16 pb-20">
      <ProjectDetails project={project} />
      <ProjectGallery images={project.images} />
      <ProjectSpecs specs={project.specs} />
      <RelatedProjects currentProjectId={project.id} />
    </div>
  );
}
