import { FaXTwitter, FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa6";

import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { SiMongodb, SiTypescript } from "react-icons/si";
import { FaCss3Alt, FaNodeJs } from "react-icons/fa";

import image1 from "../assets/project1.png";
import image2 from "../assets/project2.png";
import image3 from "../assets/project3.png";
import image4 from "../assets/project4.png";

import udemycertificate from "../assets/udemyCertificate.jpeg";
import { IoLogoHtml5, IoLogoJavascript } from "react-icons/io";

export const NAVIGATION_LINKS = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Certificates", href: "#certificates" },
  { label: "Contact", href: "#contact" },
];

export const PROFILE = {
  name: "Aditya Deshmukh",
  info: "My future goal is to create exitsing projects that use for Industry Development Github.",
};

export const ABOUT = {
  text1:
    "I create dynamic, responsive websites that blend creativity with efficiency",
  text2:
    "Hello! I'm Aditya Deshmukh, a full-stack developer with a flair for graphic design. I thrive on crafting web experiences that are not only visually stunning but also highly functional and user-friendly. My passion for detail ensures that every project is polished and professional. Beyond coding, I'm an avid explorer of new cultures and cuisines. My curiosity drives me to stay on the cutting edge of technology and design trends, bringing innovative and practical solutions to every challenge. Whether I'm developing a sleek website or diving into the latest tech, I am dedicated to delivering excellence in every project.",
};

export const projectData = [
  {
    title: "Full Stack Grocery Store",
    image: image4,
    category: "Full Stack",
    description:
      "This project is an online grocery store application built with Next.js, Tailwind CSS, and Shadcn UI. It utilizes Razorpay Payment Gateway for processing online payments and Axios for making HTTP requests. Check it out!",
    githubLink: "https://github.com/Aditya-Deshmukh9/MERN-Grocery-Store",
    liveLink: "https://full-stack-grocery-store-aditya.vercel.app/",
  },
  {
    title: "Live Forecast Weather",
    image: image3,
    category: "Frontend",
    description:
      "Live Forecast Weather app built with MERN stack, integrating OpenweatherApi for real-time updates, with 100+ regular users",
    githubLink: "https://github.com/Aditya-Deshmukh9/Live-weather-frontend",
    liveLink: "https://live-weather-frontend.vercel.app/",
  },
  {
    title: "E-Cart",
    image: image2,
    category: "Frontend",
    description:
      "Using React Js, Tailwind css and Context Api for State management. Here I create Full Cart functionality, product add in Search the products etc",
    githubLink: "https://github.com/Aditya-Deshmukh9/E-cart",
    liveLink: "https://ecart-react.netlify.app/",
  },
  {
    title: "ContentGenie",
    image: image1,
    category: "Full Stack",
    description:
      "Using React Js, Typescript, Tailwind css and Redux Toolkit for State management. Here I create Full Ai Content Genrator Dashboard with response edit functionality",
    githubLink: "https://github.com/Aditya-Deshmukh9/ai-content-generator",
    liveLink: "https://ai-content-generator-tau.vercel.app/",
  },
];

export const SKILLS = [
  {
    icon: <IoLogoHtml5 className="text-4xl lg:text-6xl text-orange-500" />,
    name: "Html",
    experience: "2+ years",
  },
  {
    icon: <FaCss3Alt className="text-4xl lg:text-6xl text-sky-400" />,
    name: "CSS",
    experience: "2+ years",
  },
  {
    icon: <IoLogoJavascript className="text-4xl lg:text-6xl text-yellow-300" />,
    name: "Javascript",
    experience: "2+ years",
  },
  {
    icon: (
      <SiTypescript className="text-4xl lg:text-6xl text-blue-500 bg-white rounded-md" />
    ),
    name: "Typescript",
    experience: "2+ years",
  },
  {
    icon: <RiReactjsLine className="text-4xl lg:text-6xl text-cyan-400" />,
    name: "React",
    experience: "2+ years",
  },
  {
    icon: <TbBrandNextjs className="text-4xl lg:text-6xl text-white" />,
    name: "Next.js",
    experience: "1+ year",
  },
  {
    icon: <SiMongodb className="text-4xl lg:text-6xl text-green-600" />,
    name: "MongoDB",
    experience: "1.5+ years",
  },
  {
    icon: <FaNodeJs className="text-4xl lg:text-6xl text-green-600" />,
    name: "Node.js",
    experience: "2+ years",
  },
];

export const CERTIFICATES = {
  title: "The Complete 2023 Web Development Bootcamp",
  image: udemycertificate,
};

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://x.com/ ",
    icon: <FaFacebook fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/adityadesh937?t=U_Wy5P0J2o2q1tRciLNOqg&s=08",
    icon: <FaXTwitter fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Aditya-Deshmukh9",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.linkedin.com/in/aditya-deshmukh-878482229",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
];
