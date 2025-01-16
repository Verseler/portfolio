import { cn } from "@/lib/utils";
import React from "react";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  dark?: boolean;
  className?: React.HtmlHTMLAttributes<HTMLElement>["className"];
};

export default function Section({
  id,
  className,
  dark = false,
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={cn(
        "py-20 2xl:py-40",
        className,
        dark && "bg-neutral-900 text-white"
      )}
    >
      {children}
    </section>
  );
}
