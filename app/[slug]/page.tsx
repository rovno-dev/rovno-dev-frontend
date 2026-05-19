import ExpertPage from "./(Expert)/expert-page";
import ProjectsPage from "./(Project)/project-page";
import { projects } from "./(Project)/data";
import { notFound } from "next/navigation";

const experts = ["niyazgim"];

interface PageProps {
  params: Promise<{ slug: string }>;
}

export default async function DispatcherPage({ params }: PageProps) {
  const { slug } = await params;

  const isProject = projects.some((p) => p.id.toString() === slug);
  if (isProject) {
    return <ProjectsPage />;
  }

  const isExpert = experts.includes(slug);
  if (isExpert) {
    return <ExpertPage />;
  }

  return notFound();
}