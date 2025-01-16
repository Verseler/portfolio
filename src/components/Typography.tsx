import { cn } from "@/lib/utils";
import React, { PropsWithChildren } from "react";

type BoldProps = {
  children: React.ReactNode;
  extra?: boolean;
};

export function Bold({ extra, children }: BoldProps) {
  return (
    <span className={extra ? "font-bold" : "font-extrabold"}>{children}</span>
  );
}

export function H1({ children }: PropsWithChildren) {
  return <h1 className="pb-6 text-4xl 2xl:text-5xl">{children}</h1>;
}

export function H2({children}: PropsWithChildren) {
  return <h2 className="mb-1 text-2xl md:mb-1.5 2xl:text-4xl">{children}</h2>
}

type PProps = {
  children: React.ReactNode;
  dark?: boolean;
};

export function P({ dark = false, children }: PProps) {
  return (
    <p
      className={cn(
        "font-normal text-sm 2xl:text-base",
        dark ? "text-neutral-300" : "text-neutral-600"
      )}
    >
      {children}
    </p>
  );
}
