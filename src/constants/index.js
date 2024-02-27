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
    title: "Junior Web Developer",
    company_name: "New Aptara Media Pvt. Ltd.",
    icon: aptaraLogo,
    iconBg: "#accbe1",
    date: "November 2018 - March 2019",
    points: [
      "Contributed to the migration and development of educational e-books for Pearson ET1, utilizing XHTML and CSS to create high-quality ePUBs.",
      "Collaborated with the production team to convert existing educational materials into e-book formats, ensuring compatibility across various e-reader devices.",
      "Conducted quality checks and validation to ensure ePUB files met industry standards and were error-free.",
      "Worked closely with project managers and content editors to meet tight deadlines and deliver error-free e-books.",
    ],
  },
  {
    title: "Web Developer Intern",
    company_name: "Passogen Technologies",
    icon: passogen,
    iconBg: "#fbc3bc",
    date: "Aug 2019 - Oct 2019",
    points: [
      "Single-handedly conceptualized, designed, and developed the website ensuring a seamless user experience and efficient functionality.",
      "Utilized CodeIgniter's MVC architecture to build a robust and maintainable backend.",
      "Designed and implemented responsive frontend interfaces using HTML, CSS, and JavaScript, focusing on user-friendly navigation and aesthetics.",
      "Integrated and managed MySQL databases, optimizing data storage and retrieval for improved website performance.",
    ],
  },
  {
    title: "Junior UI UX Designer",
    company_name: "Aptlogca Technologies Pvt. Ltd.",
    icon: aptlogica,
    iconBg: "#b7e4c7",
    date: "Oct 2021 - Mar 2023",
    points: [
      "Contributed to the design and development of interactive e-learning courses using the Adapt Framework, focusing on enhancing the user experience and learning outcomes.",
      "Designed responsive course interfaces, ensuring a seamless experience across devices.",
      "Creating and managing content using JSON for various courses.",
      "Managing project repository on Gitlab for creating new branches and merging updated courses.",
    ],
  },
  {
    title: "Junior Software Engineer",
    company_name: "Aptlogca Technologies Pvt. Ltd. ",
    icon: aptlogica,
    iconBg: "#a2d2ff",
    date: "April 2023 - Sept 2023",
    points: [
      "Conceptualized and executed the entire website independently.",
      "Designed and developed a personal portfolio website entirely from scratch, showcasing a range of technical and creative skills.",
      "Created a visually appealing and user-friendly website layout with a focus on responsive design principles.",
      "Ensured cross-browser compatibility and responsive behavior across various devices and screen sizes.",
      "Implemented smooth animations and transitions to enhance user engagement and navigation.",
      "Used Git & Github for controlling the development flow.",
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
    link: "https://github.com/Malavivikas/Books",
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
    link: "https://malavivikas.github.io/kewordio-test/",
  },
];
