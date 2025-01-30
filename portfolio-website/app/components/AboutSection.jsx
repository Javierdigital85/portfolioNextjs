"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>HTML</li>
        <li>CSS</li>
        <li>SASS</li>
        <li>JavaScript</li>
        <li>Node.js</li>
        <li>React</li>
        <li>Redux</li>
        <li>React-Router-Dom</li>
        <li>Express</li>
        <li>Nest</li>
        <li>PostgreSQL</li>
        <li>TypeORM</li>
        <li>Sequelize</li>
        <li>Prisma</li>
        <li>MongoDB</li>
        <li>Tailwind</li>
        <li>Sooner</li>
        <li>Toastify</li>
        <li>Bootstrap</li>
        <li>TypeScript</li>
        <li>Postman</li>
        <li>Docker</li>
        <li>Table Plus</li>
        <li>Jest</li>
        <li>Supertest</li>
        <li>Cypress</li>
        <li>Cloudinary</li>
        <li>Bcryptjs</li>
        <li>JsonWebToken</li>
        <li>Joi</li>
        <li>Node Mailer</li>
        <li>Resend</li>
        <li>Swagger</li>
        <li>Render</li>
        <li>Versel</li>
      </ul>
    ),
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
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16 md:py-10">
        <div className="relative w-full h-[600px] md:h-[850px] sm:min-h-[300px]  mb-4 md:mb-0 sm:mb-2">
          <Image
            src="/images/nuevaimagen.avif"
            width={900}
            height={900}
            alt="Lorenzo Javier Colodro's portrait"
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 object-contain"
          />
        </div>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4 mt-10">About Me </h2>
          <p className="text-base lg:text-lg">
            I&apos;m a full stack developer eager to apply the skills I acquired
            through an intensive JavaScript Bootcamp. I have experience working
            on the frontend and backend. My challenge is to provide valuable
            contributions to any project I am involved in and meet the needs of
            the company. I&apos;m a team player and always ready to achieve new
            goals.
          </p>
          <div className="flex flex-row justify-start mt-8">
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
          <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
