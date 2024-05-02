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
  logo_school,
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
const experiences = [
  {
    title: "Libft",
    icon: logo_school,
    iconBg: "#FFEA00",
    date: "",
    points: [
      "Custom C library",
      "re-implementing common C functions (memory management, strings, etc.) from scratch.",
    ],
  },
  {
    title: "Ft_printf",
    icon: logo_school,
    iconBg: "#FFEA00",
    date: "Jan 2021 - Feb 2022",
    points: [
      "Replicating functionality of standard C printf function.",
      "Handling variadic arguments to process arguments of different types.",
      "Implementing flags and modifiers for controlling output appearance (width, precision, etc.).",
    ],
  },
  {
    title: "Born2BeRoot",
    icon: logo_school,
    iconBg: "#FFEA00",
    points: [
      "Building a virtual machine using VirtualBox (or similar software).",
      "Configuring the virtual machine with a specified operating system.",
      "Configuring essential system services (networking, SSH).",
    ],
  },
  {
    title: "Get_next_line",
    icon: logo_school,
    iconBg: "#FFEA00",
    date: "Jan 2023 - Present",
    points: [
      "Reading a file line by line with memory allocation.",
      "Handling potential issues like large files or EOF (End Of File)",
    ],
  },
  {
    title: "Minitalk",
    icon: logo_school,
    iconBg: "#FFEA00",
    date: "Jan 2023 - Present",
    points: [
      "Developing a simple client-server application for text communication.",
      "Utilizing signals (SIGUSR1 and SIGUSR2) for message transmission.",
      "Handling message decryption on the server side.",
    ],
  },
  {
    title: "So_long",
    icon: logo_school,
    iconBg: "#FFEA00",
    date: "Jan 2023 - Present",
    points: [
      "Creating a 2D platformer game.",
      "Implementing basic game mechanics like character movement, collision detection, and item collection.",
      "Utilizing a graphics library (likely MiniLibX) for rendering visuals.",
    ],
  },
  {
    title: "Push_swap",
    icon: logo_school,
    iconBg: "#FFEA00",
    date: "Jan 2023 - Present",
    points: [
      "Sorting an array of integers using an algorithm of choice.",
      "Handling edge cases like empty or single-element arrays",
      "Optimizing for performance and minimizing the number of swaps required.",
      "Utilizing stacks for manipulating the integer array",
    ],
  },
  {
    title: "Philosophers",
    icon: logo_school,
    iconBg: "#FFEA00",
    date: "Jan 2023 - Present",
    points: [
      "Simulating the classic Dining Philosophers Problem.",
      "Implementing synchronization mechanisms (mutexes, semaphores) to avoid deadlocks.",
      "Ensuring philosophers can eat and think without resource conflicts.",
      "Testing for deadlock-free behavior under various scenarios.",
    ],
  },
  {
    title: "Minishell",
    icon: logo_school,
    iconBg: "#FFEA00",
    date: "Jan 2023 - Present",
    points: [
    "Building a simple command-line interpreter.",
    "Parsing user input to identify commands and arguments.",
    "Creating built-in commands (cd, pwd, echo, env, unset, export) and enabling others be executed",
    "Handling environment variables and input/output redirection.",
    ],
  },
  {
    title: "NetPractice",
    icon: logo_school,
    iconBg: "#FFEA00",
    date: "Jan 2023 - Present",
    points: [
      "Configuring a small-scale network using tools like routing tables.",
      "Understanding TCP/IP addressing concepts like subnet masks and CIDR notation.",
      "Calculating available IP addresses within a subnet.",
      "Setting up network routes to control data flow between devices.",
    ],
  },
  {
    title: "Cub3d",
    icon: logo_school,
    iconBg: "#FFEA00",
    date: "Jan 2023 - Present",
    points: [
      "Rendering a 3D world using raycasting techniques.",
      "Parsing a custom level format file to define the map layout.",
      "Calculating wall intersections and distances for perspective rendering.",
      "Implementing texture mapping to add visual details to the 3D environment.",
    ],
  },
  {
    title: "C++ Modules",
    icon: logo_school,
    iconBg: "#FFEA00",
    date: "Jan 2023 - Present",
    points: [
     
  
    ],
  },
  {
    title: "Ft_irc",
    icon: logo_school,
    iconBg: "#FFEA00",
    date: "Work in progress..",
    points: [
      "Developing a basic IRC client application.",
      "Connecting to IRC servers and joining channels for communication.",
      "Sending and receiving messages in the IRC protocol format.",
      "Handling user authentication and basic channel management features.",
    ],
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
    source_code_link: "https://codepen.io/alaire/pen/wvPRaRz",
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
    source_code_link: "https://github.com/Alaire1/Cub3D_42",
  },
];

export { services, technologies, projects, experiences};
