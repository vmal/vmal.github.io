import React from "react";
import {CgStudio, CgWorkAlt} from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Iowa State University",
    location: "Ames, Iowa",
    description:
        "I graduated from Iowa State University with a Major in Software Engineering. During this time I was also actively involved with " +
        "the startup community in my college and helped several startups build out their MVP.",
    icon: React.createElement(LuGraduationCap),
    date: "2014-2018",
  },
  {
    title: "Skratch (Full Stack Engineer)",
    location: "Des Moines, Iowa",
    description:
      "I worked as a Full Stack Engineer building out the startup's backend infrastructure in Node JS and supporting the front end team.",
    icon: React.createElement(CgWorkAlt),
    date: "2018-2019",
  },
  {
    title: "Tocca (Senior Backend Engineer)",
    location: "San Fransisco, CA",
    description:
      "I worked as a Senior Backend Engineer building out the startup's backend infrastructure using Node JS, Google Cloud and Firebase",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2020",
  },
  {
    title: "Amazon (Software Development Engineer)",
    location: "Vancouver, BC",
    description:
      "I worked as an SDE on platform team in Amazon Retail to optimize and vend correct discounted shipping/delivery prices. I work ranged from " +
        "feature development, devops to helping the team in product roadmap planning and sprint planning.",
    icon: React.createElement(CgWorkAlt),
    date: "2020 - 2023",
  },
  {
    title: "ESARC (Senior Software Engineer & Co-Founder)",
    location: "Vancouver, BC",
    description:
        "I started my own software consulting agency that aims to help Startups or big corporation build out their MVP's or prototypes from dream to realities.",
    icon: React.createElement(CgStudio),
    date: "2020 - 2023",
  },
] as const;

export const projectsData = [
  {
    title: "CorpComment",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
    imageUrl: corpcommentImg,
  },
  {
    title: "rmtDev",
    description:
      "Job board for remote developer jobs. I was the front-end developer. It has features like filtering, sorting and pagination.",
    tags: ["React", "TypeScript", "Next.js", "Tailwind", "Redux"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Word Analytics",
    description:
      "A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
    tags: ["React", "Next.js", "SQL", "Tailwind", "Framer"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "JAVA",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Prisma",
  "MongoDB",
  "Redux",
  "GraphQL",
  "Apollo",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;
