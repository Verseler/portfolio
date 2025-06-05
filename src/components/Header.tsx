import { Download } from "lucide-react";

import Container from "@/components/ui/Container";
import NavItem from "@/components/NavItem";
import { Button } from "@/components/ui/Button";
import AppLogo from "@/components/AppLogo";
import MyResumePDF from "@/assets/files/Resume.pdf";

export default function Header() {
  return (
    <header className="font-bold">
      <Container className="flex items-center justify-between py-4">
        <AppLogo />
        <nav className="hidden md:block">
          <ul className="flex gap-x-6">
            <NavItem href="#hero">Home</NavItem>
            <NavItem href="#skills">Skills</NavItem>
            <NavItem href="#about">About</NavItem>
            <NavItem href="#projects">Projects</NavItem>
          </ul>
        </nav>
        <a
          href={MyResumePDF}
          target="_blank"
          rel="noopener noreferrer"
          download
        >
          <Button asChild>
            <a href="https://docs.google.com/document/d/1Hdn8jtStaC7C80O1m3uPQfdOnEofA1d_VZ-I9ZUl8Qo/export?format=pdf">
              Resume
              <Download />
            </a>
          </Button>
        </a>
      </Container>
    </header>
  );
}
