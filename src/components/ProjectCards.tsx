import { Project } from "@/types";
import { useSearchParams } from "react-router";
import ImageCarousel from "./ImageCarousel";
import ProjectCard from "@/components/ProjectCard";

type ProjectCardsProps = {
  projects: Array<Project>;
};

export default function ProjectsCards({ projects }: ProjectCardsProps) {
  const [searchParams, _] = useSearchParams();
  const selectedProjectId = Number(searchParams.get("project-id"));
  const exampleImages =
    projects.find((project) => project.id === selectedProjectId)
      ?.exampleImages ?? null;

  return (
    <div className="mt-4 space-y-24 md:space-y-36">
      {projects.map((project, index) => {
        const isEven = index % 2 === 0;
        return <ProjectCard key={project.id} reverse={isEven} {...project} />;
      })}

      {<ImageCarousel images={exampleImages} />}
    </div>
  );
}
