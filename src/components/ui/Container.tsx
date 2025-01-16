import { cn } from "@/lib/utils";
import React from "react";

type ContainerProps = {
  className?: React.HtmlHTMLAttributes<HTMLDivElement>["className"];
  children: React.ReactNode;
};

export default function Container({ className, children }: ContainerProps) {
  return <div className={cn("px-4 lg:px-8 md:container mx-auto", className)}>{children}</div>;
}
