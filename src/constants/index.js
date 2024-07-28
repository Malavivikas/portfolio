import { aptlogica, aptaraLogo, passogen } from "../assets/images";
import {
  car,
  contact,
  css,
  express,
  git,
  github,
  html,
  javascript,
  linkedin,
  mongodb,
  motion,
  mui,
  nextjs,
  nodejs,
  react,
  redux,
  sass,
  pricewise,
  tailwindcss,
  threads,
  typescript,
} from "../assets/icons";

export const skills = [
  {
    imageUrl: css,
    name: "CSS",
    type: "Frontend",
  },
  {
    imageUrl: express,
    name: "Express",
    type: "Backend",
  },
  {
    imageUrl: git,
    name: "Git",
    type: "Version Control",
  },
  {
    imageUrl: github,
    name: "GitHub",
    type: "Version Control",
  },
  {
    imageUrl: html,
    name: "HTML",
    type: "Frontend",
  },
  {
    imageUrl: javascript,
    name: "JavaScript",
    type: "Frontend",
  },
  {
    imageUrl: mongodb,
    name: "MongoDB",
    type: "Database",
  },
  {
    imageUrl: motion,
    name: "Framer Motion",
    type: "Animation",
  },
  {
    imageUrl: mui,
    name: "Material-UI",
    type: "Frontend",
  },
  {
    imageUrl: nextjs,
    name: "Next.js",
    type: "Frontend",
  },
  {
    imageUrl: nodejs,
    name: "Node.js",
    type: "Backend",
  },
  {
    imageUrl: react,
    name: "React",
    type: "Frontend",
  },
  {
    imageUrl: redux,
    name: "Redux",
    type: "State Management",
  },
  {
    imageUrl: sass,
    name: "Sass",
    type: "Frontend",
  },
  {
    imageUrl: tailwindcss,
    name: "Tailwind CSS",
    type: "Frontend",
  },
  {
    imageUrl: typescript,
    name: "TypeScript",
    type: "Frontend",
  },
];

export const experiences = [
  {
    title: "Web Developer Intern",
    company_name: "Passogen Technologies",
    icon: passogen,
    iconBg: "#fbc3bc",
    date: "Aug 2019 - Oct 2019",
    points: [
      "Conceptualized, designed, and developed the website for seamless user experience and efficient functionality.",
      "Built a robust and maintainable backend using CodeIgniter's MVC architecture.",
      "Created responsive front-end interfaces with HTML, CSS, Bootstrap, and JavaScript, ensuring user-friendly navigation and aesthetics.",
      "Managed and optimized MySQL database for improved website performance.",
    ],
  },
  {
    title: "Developer",
    company_name: "Aptlogca Technologies Pvt. Ltd.",
    icon: aptlogica,
    iconBg: "#a2d2ff",
    date: "October 2021 - Sept 2023",
    points: [
      "Project: Cisco Skills For All",
      "Developed interactive courses within React.",
      "Created responsive interfaces and managed content and language translation through JSON.",
      "Maintained project version control using GitLab repository with GitHub desktop.",
      "Led the team in the absence of the team leader, ensuring project continuity and timely completion.",
      "Project: HYSPEC Portfolio",
      "Created a portfolio website from scratch, using ReactJS for development, SCSS for design, and GSAP for animations.",
      "Crafted user-friendly, responsive layouts with seamless animations and transitions.",
      "Managed version control using Git and GitHub, ensuring efficient collaboration within the development team.",
    ],
  },
];

export const socialLinks = [
  {
    name: "Contact",
    iconUrl: contact,
    link: "/portfolio/contact",
  },
  {
    name: "GitHub",
    iconUrl: github,
    link: "https://github.com/Malavivikas",
  },
  {
    name: "LinkedIn",
    iconUrl: linkedin,
    link: "https://www.linkedin.com/in/vikas-malavi",
  },
];

export const projects = [
  {
    iconUrl: pricewise,
    theme: "btn-back-red",
    name: "Books",
    description:
      "Designed and developed a books gallery. Created basic add, remove, update and delete functionality with axios and json server in React.",
    link: "https://Malavivikas.github.io/Books",
  },
  {
    iconUrl: threads,
    theme: "btn-back-green",
    name: "React Reusable Components",
    description:
      "I've crafted a suite of reusable ReactJS components to streamline front-end development. These components are designed to enhance UI consistency, improve code maintainability, and expedite the creation of interactive and responsive user interfaces.",
    link: "https://malavivikas.github.io/Components",
  },
  {
    iconUrl: car,
    theme: "btn-back-blue",
    name: "Insights App",
    description:
      "Designed and built a static insights app which contains Dashboard with table and doughnut chart and a create Ad multistep form with Material UI and chart.",
    link: "https://malavivikas.github.io/keywordio-test/",
  },
];
