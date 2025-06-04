import {
  RiBearSmileFill,
  RiJavascriptFill,
  RiTailwindCssFill,
  RiSupabaseFill,
} from "react-icons/ri";
import {
  FaGitAlt,
  FaGithub,
  FaReact,
  FaHtml5,
  FaCss3,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
} from "react-icons/fa";
import { BiLogoTypescript } from "react-icons/bi";
import { SiInertia, SiLaravel } from "react-icons/si";

import ThistaskCoverImg from "@/assets/images/thistask-cover.png";
import Thistask1 from "@/assets/images/thistask1.png";
import Thistask2 from "@/assets/images/thistask2.png";
import Thistask3 from "@/assets/images/thistask3.png";
import CBCRAISCoverImg from "@/assets/images/cbc-rais-cover.jpg";
import MovierecomCoverImg from "@/assets/images/movierecom-cover.png";
import Movierecom1 from "@/assets/images/movierecom-1.png";
import Movierecom2 from "@/assets/images/movierecom-2.png";
import Movierecom3 from "@/assets/images/movierecom-3.png";
import MastermindCoverImg from "@/assets/images/mastermin-cover.png";
import SipiarCoverImg from "@/assets/images/sipiar-cover.png";
import Sipiar1 from "@/assets/images/sipiar-1.png";
import Sipiar2 from "@/assets/images/sipiar-2.png";
import Sipiar3 from "@/assets/images/sipiar-3.png";
import Sipiar4 from "@/assets/images/sipiar-4.png";
import Sipiar5 from "@/assets/images/sipiar-5.png";
import Sipiar6 from "@/assets/images/sipiar-6.png";
import Sipiar7 from "@/assets/images/sipiar-7.png";
import Sipiar8 from "@/assets/images/sipiar-8.png";
import OHRS1 from "@/assets/images/ohrs/ohrs-1.png";
import OHRS2 from "@/assets/images/ohrs/ohrs-2.png";
import OHRS3 from "@/assets/images/ohrs/ohrs-3.png";
import OHRS4 from "@/assets/images/ohrs/ohrs-4.png";
import OHRS5 from "@/assets/images/ohrs/ohrs-5.png";
import OHRS6 from "@/assets/images/ohrs/ohrs-6.png";
import OHRS7 from "@/assets/images/ohrs/ohrs-7.png";
import OHRS8 from "@/assets/images/ohrs/ohrs-8.png";
import OHRS9 from "@/assets/images/ohrs/ohrs-9.png";
import OHRS10 from "@/assets/images/ohrs/ohrs-10.png";
import OHRS11 from "@/assets/images/ohrs/ohrs-11.png";
import OHRS12 from "@/assets/images/ohrs/ohrs-12.png";
import OHRS13 from "@/assets/images/ohrs/ohrs-13.png";
import OHRS14 from "@/assets/images/ohrs/ohrs-14.png";
import OHRS15 from "@/assets/images/ohrs/ohrs-15.png";
import OHRS16 from "@/assets/images/ohrs/ohrs-16.png";
import OHRSCover from "@/assets/images/ohrs/ohrs-cover.jpg";

import { Project, Skill, Social } from "@/types";

type TData = {
  socialMedia: Array<Social>;
  skills: Array<Skill>;
  projects: Array<Project>;
};

export const data: TData = {
  socialMedia: [
    { id: 1, Icon: FaGithub, url: "https://github.com/Verseler" },
    { id: 2, Icon: FaFacebook, url: "https://www.facebook.com/Verselerkerr" },
    { id: 3, Icon: FaInstagram, url: "https://www.instagram.com/_kerooo/" },
    { id: 4, Icon: FaLinkedin, url: "https://www.linkedin.com/in/verseler-kerr-handuman-989b83294" },
  ],
  skills: [
    { Icon: FaReact, label: "ReactJS" },
    { Icon: RiTailwindCssFill, label: "TailwindCSS" },
    { Icon: SiLaravel, label: "Laravel" },
    { Icon: SiInertia, label: "InertiaJS" },
    { Icon: BiLogoTypescript, label: "Typescript" },
    { Icon: RiJavascriptFill, label: "Javascript" },
    { Icon: FaHtml5, label: "HTML5" },
    { Icon: FaCss3, label: "CSS3" },
    { Icon: RiBearSmileFill, label: "Zustand" },
    { Icon: FaReact, label: "React Native" },
    { Icon: FaGitAlt, label: "Git" },
    { Icon: RiSupabaseFill, label: "Supabase" },
  ],
  projects: [
     {
      id: 6,
      coverImage: OHRSCover,
      title:
        "OHRS: Online Hostel Reservation System",
      type: "Internship Project",
      date: "February 2025 - May 2025",
      description:
        "- - - - -",
      technologies: [
        "Laravel",
        "InertiaJS",
        "VueJS",
        "Typescript",
        "TailwindCSS",
      ],
      demoLink: null,
      githubLink: null,
      exampleImages: [
       OHRS1,
        OHRS2,
        OHRS3,
        OHRS4,
        OHRS5,
        OHRS6,
        OHRS7,
        OHRS8,
        OHRS9,
        OHRS10,
        OHRS11,
        OHRS12,
        OHRS13,
        OHRS14,
        OHRS15,
        OHRS16,
      ],
    },
    {
      id: 5,
      coverImage: SipiarCoverImg,
      title:
        "SIPIAR: Smartphone-Based Life Saving First Aid Application with Integrated Emergency Notification",
      type: "Capstone Project",
      date: "July 2024 - December 2024",
      description:
        "Collaborated on a first aid application that provides educational materials and assistance for performing CPR, along with a broadcast notification feature connecting bystanders with emergency medical services. I was responsible for developing the front-end web and mobile applications. This project helped me enhance my understanding of front-end and mobile application development while exploring new concepts such as mobile sensors integration  and overcoming challenges on different platforms.",
      technologies: [
        "ReactJS",
        "TailwindCSS",
        "React Native",
        "Zustand",
        "Supabase",
      ],
      demoLink: null,
      githubLink: null,
      exampleImages: [
        Sipiar1,
        Sipiar2,
        Sipiar3,
        Sipiar4,
        Sipiar5,
        Sipiar6,
        Sipiar7,
        Sipiar8,
      ],
    },
    {
      id: 4,
      coverImage: MovierecomCoverImg,
      title: "Movierecom",
      type: "Personal Project",
      date: "September 2024 - October 2024",
      description:
        "Developed a web application that suggests related and recommended movies or series based on a selected film. This project allowed me to practice working with APIs, animations, and state management while improving my front-end development skills.",
      technologies: [
        "ReactJS",
        "Typescript",
        "TailwindCSS",
        "TMDB API",
        "Framer Motion",
        "Redux",
      ],
      demoLink: "https://movierecom.vercel.app/",
      githubLink: "https://github.com/Verseler/movierecom",
      exampleImages: [Movierecom3, Movierecom1, Movierecom2],
    },
    {
      id: 3,
      coverImage: ThistaskCoverImg,
      title: "Thistask",
      type: "Personal Project",
      date: "August 2024 - November 2024",
      description: "Developed a to-do list application for task management. This was my first full-stack application, giving me valuable insight into how full-stack applications work.",
      technologies: [
        "ReactJS",
        "Typescript",
        "TailwindCSS",
        "Zustand",
        "Supabase",
      ],
      demoLink: "https://thistask.vercel.app/login",
      githubLink: "https://github.com/Verseler/thistask",
      exampleImages: [Thistask2, Thistask1, Thistask3],
    },
    {
      id: 2,
      coverImage: CBCRAISCoverImg,
      title: "Cedula Barangay Certificate - Request and Issue System (CBC-RAIS)",
      type: "Commission Project",
      date: "April 2024",
      description:
        "A barangay certificate request management system for online applications and tracking. I am responsible in designing and developing the UI of the web application.",
      technologies: [
        "Laravel Blade template",
        "TailwindCSS",
        "DaisyUI",
        "Laravel",
      ],
      demoLink: null,
      githubLink: null,
      exampleImages: null,
    },
    {
      id: 1,
      coverImage: MastermindCoverImg,
      title: "Mastermind",
      type: "Personal Project",
      date: "December 2023 - February 2024",
      description:
        "Designed and developed a web-based recreation of the classic “Mastermind” code-breaking game. This project is the most fun project I have worked on and this is the first project I hosted in vercel.  NOTE: It is highly recommended to play this game on a mobile phone for the best experience.",
      technologies: ["ReactJS", "TailwindCSS"],
      demoLink: "https://mastermind-breaking.vercel.app/",
      githubLink: "https://github.com/Verseler/mastermind",
      exampleImages: null,
    },
  ],
};