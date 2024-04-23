import {
  art_icon,
  software_icon,
  web_icon,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  c,
  cpp,
  PortfolioBook,
  TelephoneNumberValidator,
  Cub3D,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "works",
    title: "Projects",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web_icon,
  },
  {
    title: "Software Developer",
    icon: software_icon,
  },
  {
    title: "Artist",
    icon: art_icon,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "C",
    icon: c,
  },
  {
    name: "C++",
    icon: cpp,
  },
];


const projects = [
  {
    name: "Telephone Number Checker",
    description:
      "In this Free Code Camp project, I had to create simple checker of phone number (US) format",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: TelephoneNumberValidator,
    source_code_link: "https://github.com/Alaire1/TelephoneNumberValidatorFCC",
  },
  {
    name: "Portfolio Book",
    description:
      "Portfolio that has been constructed as an interactive book, that can be opened. Pages inside contain pictures with descriptions and links to the projects.",
    tags: [
      {
        name: "JavaScript",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "HTML",
        color: "pink-text-gradient",
      },
    ],
    image: PortfolioBook,
    source_code_link: "https://github.com/Alaire1/PalindromeCheckerFCC",
  },
  {
    name: "Cub3D",
    description:
      "Cub3D is a coding project from 42School that dives into raycasting, a method for rendering 3D environments. Built here a game engine akin to Wolfenstein 3D, where the world is made of squares. The project allows for implementing textures, walls, etc. .It's a deep dive into the world of 3D graphics creation.",
    tags: [
      {
        name: "C",
        color: "blue-text-gradient",
      },
      {
        name: "MiniLibX ",
        color: "green-text-gradient",
      },
    ],
    image: Cub3D,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, projects };
