import React from "react";
import { Button } from "@/components/ui/Button";

import { Social } from "@/types";

type SocialButtonsProps = {
  socials: Array<Social>;
};

export default function SocialButtons({ socials }: SocialButtonsProps) {
  return (
    <div className="flex justify-center md:justify-start space-x-5 md:space-x-3.5 mt-10 md:mt-24">
      {socials.map((social) => (
        <SocialButton url={social.url} key={social.id}>
          <social.Icon />
        </SocialButton>
      ))}
    </div>
  );
}

type SocialMedialProps = {
  children: React.ReactNode;
  url: string;
};

function SocialButton({ children, url }: SocialMedialProps) {
  const openInNewTab = (url: string) => {
    const newWindow = window.open(url, "_blank", "noopener,noreferrer");
    if (newWindow) newWindow.opener = null;
  };

  return (
    <Button
      onClick={() => openInNewTab(url)}
      size="icon"
      variant="outline"
      className="transition-colors duration-150 hover:text-white hover:bg-black"
    >
      {children}
    </Button>
  );
}
