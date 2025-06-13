import type { IconType } from "react-icons"

export type Project = {
  id: number,
  coverImage: string | null,
  title: string,
  type: string,
  date: string,
  description: string,
  technologies: Array<string>,
  demoLink: string | null,
  githubLink: string | null,
  exampleImages: Array<string> | null,
}

export type Skill = {
  Icon: IconType,
  label: string
}


export type Social = {
  id: number;
  Icon: IconType;
  url: string;
  name: string;
}