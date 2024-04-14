"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
import { height } from "@fortawesome/free-brands-svg-icons/fa42Group";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <li>Node.js</li>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <li>Express</li>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <li>PostgreSQL</li>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <li>Sequelize</li>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <li>JavaScript</li>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <li>React</li>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <li>Nest</li>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <li>MongoDB</li>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <li>Tailwind</li>
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        <li>TypeScript</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Plataforma 5, Coding Bootcamp</li>
        <li>Cabin Crew Certification in Qatar Airways</li>
      </ul>
    ),
  },
  {
    title: "Certification",
    id: "certification",
    content: (
      <ul className="list-disc pl-2">
        <li>5 years within Aviation industry.</li>
        <li>2 years programming.</li>
      </ul>
    ),
  },
];
{/* eslint-disable-next-line react/no-unescaped-entities */}
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <Image
          src="/images/nuevaimagen.avif"
          width={900}
          height={900}
          alt="Lorenzo Javier Colodro's portrait"
          className="rounded"
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold mb-4">About Me </h2>
          <p className="text-base lg:text-lg">
            I'm Lorenzo Javier Colodro and I'm excited to apply the skills I
            acquired through an intensive JavaScript Bootcamp. My challenge is
            to provide valuable contributions to any project I am involved in
            and meet the needs of the company.
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
              Experience
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
