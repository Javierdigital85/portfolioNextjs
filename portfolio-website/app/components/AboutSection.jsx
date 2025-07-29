"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

// Skills data array for better management
const SKILLS_DATA = [
  "HTML",
  "CSS",
  "SASS",
  "JavaScript",
  "Node.js",
  "React",
  "Redux",
  "React-Router-Dom",
  "Express",
  "Nest",
  "PostgreSQL",
  "TypeORM",
  "Sequelize",
  "Prisma",
  "MongoDB",
  "Tailwind",
  "Sooner",
  "Toastify",
  "Bootstrap",
  "TypeScript",
  "Postman",
  "Docker",
  "Table Plus",
  "Jest",
  "Supertest",
  "Cypress",
  "Cloudinary",
  "Bcryptjs",
  "JsonWebToken",
  "Joi",
  "Node Mailer",
  "Resend",
  "Swagger",
  "Render",
  "Vercel",
];

// Component for rendering skills in responsive columns
const SkillsList = ({ skills }) => {
  const shouldUseColumns = skills.length > 10;

  return (
    <div
      className={`grid gap-y-2 ${
        shouldUseColumns ? "grid-cols-1 sm:grid-cols-2 gap-x-6" : "grid-cols-1"
      }`}
    >
      {skills.map((skill, index) => (
        <div key={index} className="flex items-center">
          <span className="text-blue-400 mr-3 text-sm">•</span>
          <span className="text-white text-sm sm:text-base">{skill}</span>
        </div>
      ))}
    </div>
  );
};

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: <SkillsList skills={SKILLS_DATA} />,
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Plataforma 5 Coding Bootcamp.</li>
        <li>Cabin Crew Certification in Qatar Airways.</li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-2">
        <li>Programación Web FullStack</li>
        <li>JavaScript Bootcamp</li>
        <li>Backend Developer Certification by No Country</li>
        <li>
          Winner Hackathon Certification as a Backend Developer by No Country
        </li>
        <li>Hackathon Certification of Proof of Sof Skills by No Country</li>
        <li>Service Excellence Program & SEP Qatar Airways</li>
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white lg:min-h-[800px] mb-10" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 md:py-10">
        {/* Profile Image Container - Fixed positioning to prevent movement */}
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] mb-6 md:mb-0 flex-shrink-0">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[500px] lg:h-[500px]">
              <Image
                src="/images/nuevaimagen.avif"
                fill
                alt="Lorenzo Javier Colodro's portrait"
                className="object-contain"
                priority
              />
            </div>
          </div>
        </div>
        {/* Content Section - Fixed height to prevent image movement */}
        <div className="text-left flex flex-col min-h-[400px] sm:min-h-[500px] md:min-h-[600px] lg:min-h-[700px]">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3 sm:mb-4 mt-6 sm:mt-10">
            About Me{" "}
          </h2>
          <p className="text-sm sm:text-base lg:text-lg leading-relaxed">
            I&apos;m a full stack developer eager to apply the skills I acquired
            through an intensive JavaScript Bootcamp. I have experience working
            on the frontend and backend. My challenge is to provide valuable
            contributions to any project I am involved in and meet the needs of
            the company. I&apos;m a team player and always ready to achieve new
            goals.
          </p>
          <div className="flex flex-row justify-start mt-4 sm:mt-6">
            <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>

            <TabButton
              selectTab={() => handleTabChange("certification")}
              active={tab === "certification"}
            >
              Certification
            </TabButton>
          </div>
          {/* Tab Content Container - Fixed height to prevent layout shifts */}
          <div className="mt-4 sm:mt-6 min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
