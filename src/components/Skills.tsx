import { PropsWithChildren } from "react";
import { Skill } from "@/types";

type SkillsProps = {
  skills: Array<Skill>;
};

export default function Skills({ skills }: SkillsProps) {
  return (
    <div className="grid grid-cols-3 mt-4 md:grid-cols-4 md:gap-y-8 gap-y-4 md:gap-x-16 place-items-center lg:gap-x-2 lg:gap-y-12 2xl:gap-16 2xl:grid-cols-6 md:mt-14">
      {skills.map((skill) => (
        <SkillCard key={skill.label}>
          <skill.Icon className="size-12" />
          {skill.label}
        </SkillCard>
      ))}
    </div>
  );
}

function SkillCard({ children }: PropsWithChildren) {
  return (
    <div className="flex flex-col items-center justify-center text-sm transition-colors duration-150 border-2 border-black rounded-lg cursor-default md:text-xl lg:text-2xl hover:text-white size-24 md:size-40 lg:size-48 2xl:size-48 md:gap-y-6 hover:bg-black">
      {children}
    </div>
  );
}
