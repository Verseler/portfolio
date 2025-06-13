import { IoOpenOutline } from "react-icons/io5";
import { FaGithub, FaRegImages } from "react-icons/fa";
import { useSearchParams } from "react-router";

import { Button } from "@/components/ui/Button";
import { H2, P } from "@/components/Typography";
import { cn } from "@/lib/utils";
import { Badge } from "@/components/ui/Badge";
import { colorPool } from "@/lib/colorPool";
import { Project } from "@/types";

type ProjectCardProps = Project & {
  reverse?: boolean;
};

export default function ProjectCard({
  id,
  demoLink,
  description,
  exampleImages,
  githubLink,
  technologies,
  title,
  type,
  coverImage,
  date,
  reverse = false,
}: ProjectCardProps) {
  const [_, setSearchParams] = useSearchParams();

  function handleSelectProject() {
    setSearchParams({ "project-id": String(id) });
  }

  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <div
      className={cn(
        "flex items-center gap-4 flex-col",
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      )}
    >
      <div className="flex-1">
        <div className="mx-auto rounded-2xl border-2 border-black overflow-hidden h-52 lg:h-72 2xl:h-96 aspect-[4/2.5]">
          <img
            src={coverImage ?? ""}
            alt="project cover image"
            className="object-cover size-full"
          />
        </div>
      </div>
      <div className="flex-1 text-start">
        <p className="text-base 2xl:text-xl text-neutral-600">{type}</p>
        <span className="text-base text-neutral-500">{date}</span>
        <div>
          <H2>{title}</H2>
          <P>{description}</P>
          <div className="flex flex-wrap items-center gap-2 my-3">
            {technologies.length > 0 &&
              technologies.map((tech, index) => (
                <Badge
                  key={index}
                  className={`${colorPool[index].background} ${colorPool[index].text} ${colorPool[index].border}`}
                >
                  {tech}
                </Badge>
              ))}
          </div>
          <div className="space-x-2 space-y-2">
            {demoLink && (
              <Button
                onClick={() => openInNewTab(demoLink)}
                className="bg-green-600 hover:bg-green-700"
              >
                <IoOpenOutline />
                <span className="md:hidden lg:inline">Demo</span>
              </Button>
            )}
            {githubLink && (
              <Button onClick={() => openInNewTab(githubLink)}>
                <FaGithub />
                <span className="md:hidden lg:inline">Github</span>
              </Button>
            )}
            {exampleImages && (
              <Button
                onClick={handleSelectProject}
                className="bg-orange-600 hover:bg-orange-700"
              >
                <FaRegImages />
                <span className="md:hidden lg:inline">Examples</span>
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
