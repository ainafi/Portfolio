import ReactIcon from "../assets/image/react.png";
import Tailwind from "../assets/image/tailwindcss.png";
import Ts from "../assets/image/ts.png";
import Js from "../assets/image/js.png";
import HTML from "../assets/image/html.png";
import Sass from "../assets/image/sass-.png";
import Material from "../assets/image/material.png";
import WNL from "../assets/image/wnl.png";
import Portfolio from "../assets/image/porfolio.png";
import Eplay from "../assets/image/eplay.png";
import Gpt from "../assets/image/gpt.png";
import Clothie from "../assets/image/clothie.png";

type Myproject = {
  id: number;
  title: string;
  Stack: string[];
  Demo: string;
  link: string;
  repo:string;
}[];

export const ProjectData: Myproject = [
  {
    id: 1,
    title: "Why Not Linux",
    Stack: [Tailwind, ReactIcon],
    Demo: WNL,
    link: "https://https://whynotlinux.netlify.app/",
    repo:"https://github.com/ainafi/whynotlinux-website"
  },
  {
    id: 2,
    title: "GPT-3",
    Stack: [Tailwind, ReactIcon],
    Demo: Gpt,
    link: "https://gpt-3-aina.netlify.app/",
    repo:"https://github.com/ainafi/gpt3"
  },
  {
    id: 3,
    title: "Clothy",
    Stack: [HTML, Sass, Js],
    Demo: Clothie,
    link: "https://clothy-aina.netlify.app/",
    repo:"https://github.com/ainafi/clothy"
  },
  {
    id: 4,
    title: "Eplay",
    Stack: [Material, ReactIcon],
    Demo: Eplay,
    link: "https://eplay2.netlify.app/",
    repo:"https://github.com/ainafi/play"
  },
  {
    id: 5,
    title: "Portfolio",
    Stack: [Tailwind, ReactIcon, Ts],
    Demo: Portfolio,
    link: "https://ainafi.netlify.app/",
    repo:"https://github.com/ainafi/Portfolio"
  },
];
