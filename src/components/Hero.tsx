import { PropsWithChildren } from "react";

export function HeroMessage({ children }: PropsWithChildren) {
  return (
    <p className="mt-10 space-y-1 text-4xl font-normal md:mt-20 xl:space-y-5 xl:text-5xl">
      {children}
    </p>
  );
}

export function HeroDescription({ children }: PropsWithChildren) {
  return (
    <p className="mt-3 text-base font-normal xl:text-lg xl:mt-8 text-neutral-600">
      {children}
    </p>
  );
}

type HeroImageProps = {
  src: string;
};

export function HeroImage({ src }: HeroImageProps) {
  return (
    <div className="grid flex-1 place-content-center">
      <img
        className="object-contain h-96 xl:h-[35rem]"
        alt="My profile picture"
        src={src}
      />
    </div>
  );
}
