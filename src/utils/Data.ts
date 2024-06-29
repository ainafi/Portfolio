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
}[];

export const ProjectData: Myproject = [
  {
    id: 1,
    title: "Why Not Linux",
    Stack: [Tailwind, ReactIcon],
    Demo: WNL,
    link: "https://whynotlinuxmg.github.io/",
  },
  {
    id: 2,
    title: "GPT-3",
    Stack: [Tailwind, ReactIcon],
    Demo: Gpt,
    link: "https://gpt-3-aina.netlify.app/",
  },
  {
    id: 3,
    title: "Clothy",
    Stack: [HTML, Sass, Js],
    Demo: Clothie,
    link: "https://clothy-aina.netlify.app/",
  },
  {
    id: 4,
    title: "Eplay",
    Stack: [Material, ReactIcon],
    Demo: Eplay,
    link: "https://eplay2.netlify.app/",
  },
  {
    id: 5,
    title: "Portfolio",
    Stack: [Tailwind, ReactIcon, Ts],
    Demo: Portfolio,
    link: "https://eplay2.netlify.app/",
  },
];
