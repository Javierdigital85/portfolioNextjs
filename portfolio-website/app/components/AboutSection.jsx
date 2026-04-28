"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const SKILLS_DATA = [
  { name: "HTML", category: "Frontend" },
  { name: "CSS / SASS", category: "Frontend" },
  { name: "JavaScript", category: "Frontend" },
  { name: "TypeScript", category: "Frontend" },
  { name: "React", category: "Frontend" },
  { name: "React Context", category: "Frontend" },
  { name: "Redux", category: "Frontend" },
  { name: "Tailwind", category: "Frontend" },
  { name: "Bootstrap", category: "Frontend" },
  { name: "Node.js", category: "Backend" },
  { name: "Express", category: "Backend" },
  { name: "Nest", category: "Backend" },
  { name: "PostgreSQL", category: "Backend" },
  { name: "MongoDB", category: "Backend" },
  { name: "TypeORM / Prisma", category: "Backend" },
  { name: "JWT / Bcrypt", category: "Backend" },
  { name: "Swagger", category: "Backend" },
  { name: "Jest / Supertest", category: "Testing" },
  { name: "Cypress", category: "Testing" },
  { name: "Docker", category: "DevOps" },
  { name: "Vercel / Render", category: "DevOps" },
  { name: "Cloudinary", category: "DevOps" },
  { name: "AWS CDK", category: "AWS" },
  { name: "AWS Lambda", category: "AWS" },
  { name: "API Gateway", category: "AWS" },
  { name: "DynamoDB", category: "AWS" },
  { name: "AWS Cognito", category: "AWS" },
  { name: "AWS Amplify", category: "AWS" },
  { name: "SNS", category: "AWS" },
  { name: "CloudWatch", category: "AWS" },
  { name: "IAM", category: "AWS" },
  { name: "Secrets Manager", category: "AWS" },
  { name: "Postman", category: "Tools" },
  { name: "AWS Toolkit", category: "Tools" },
  { name: "Kiro", category: "Tools" },
  { name: "Thunder Client", category: "Tools" },
  { name: "AWS CLI", category: "Tools" },
];

const CATEGORY_COLORS = {
  Frontend: "bg-blue-500/20 text-blue-300 border border-blue-500/30",
  Backend: "bg-purple-500/20 text-purple-300 border border-purple-500/30",
  Testing: "bg-green-500/20 text-green-300 border border-green-500/30",
  DevOps: "bg-orange-500/20 text-orange-300 border border-orange-500/30",
  AWS: "bg-cyan-500/20 text-cyan-300 border border-cyan-500/30",
  Tools: "bg-pink-500/20 text-pink-300 border border-pink-500/30",
};

const SkillsList = () => (
  <div className="flex flex-wrap gap-2">
    {SKILLS_DATA.map((skill, i) => (
      <span
        key={i}
        className={`text-xs font-medium px-3 py-1 rounded-full ${CATEGORY_COLORS[skill.category]}`}
      >
        {skill.name}
      </span>
    ))}
  </div>
);

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: <SkillsList />,
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="space-y-4">
        {[
          { title: "Plataforma 5 Coding Bootcamp", sub: "Full Stack JavaScript Developer" },
          { title: "Cabin Crew Certification", sub: "Qatar Airways" },
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1 w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
            <div>
              <p className="font-semibold text-white">{item.title}</p>
              <p className="text-sm text-[#ADB7BE]">{item.sub}</p>
            </div>
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certification",
    content: (
      <ul className="space-y-3">
        {[
          "Programación Web FullStack",
          "JavaScript Bootcamp",
          "Backend Developer Certification — No Country",
          "🏆 Winner Hackathon — Backend Developer, No Country",
          "Proof of Soft Skills — No Country",
          "Service Excellence Program (SEP) — Qatar Airways",
        ].map((cert, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="mt-1 w-2 h-2 rounded-full bg-blue-400 flex-shrink-0" />
            <p className="text-sm text-[#ADB7BE]">{cert}</p>
          </li>
        ))}
      </ul>
    ),
  },
];

const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => setTab(id));
  };

  return (
    <section className="text-white mb-6" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 py-6 px-4 xl:gap-16 sm:py-10 xl:px-16 md:py-8">
        {/* Image */}
        <div className="relative w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[520px] mb-6 md:mb-0 flex-shrink-0">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[420px] md:h-[420px] lg:w-[500px] lg:h-[500px]">
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

        {/* Content */}
        <div className="flex flex-col justify-center min-h-[300px] sm:min-h-[380px] md:min-h-[450px] lg:min-h-[520px]">
          <div className="w-fit mb-5 mt-6 sm:mt-10">
            <h2 className="text-3xl sm:text-4xl font-bold">About Me</h2>
            <div className="h-1 bg-blue-500 rounded mt-2" />
          </div>

          <p className="text-sm sm:text-base lg:text-lg leading-relaxed text-[#ADB7BE] mb-6">
            I&apos;m a <span className="text-white font-semibold">Full Stack Developer</span> passionate about building
            scalable, user-friendly applications. With experience across the full stack — from crafting
            responsive UIs to designing robust APIs — I bring a collaborative mindset and a drive to
            deliver real value in every project I join.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            {[
              { value: "10+", label: "Projects" },
              { value: "2+", label: "Years Exp." },
              { value: "5+", label: "Tech Stacks" },
            ].map((stat, i) => (
              <div key={i} className="bg-[#181818] rounded-xl p-3 text-center border border-[#2a2a2a]">
                <p className="text-2xl font-bold text-blue-400">{stat.value}</p>
                <p className="text-xs text-[#ADB7BE] mt-1">{stat.label}</p>
              </div>
            ))}
          </div>

          {/* Tabs */}
          <div className="flex flex-row justify-start gap-1 mb-4">
            {TAB_DATA.map((t) => (
              <TabButton
                key={t.id}
                selectTab={() => handleTabChange(t.id)}
                active={tab === t.id}
              >
                {t.title}
              </TabButton>
            ))}
          </div>

          {/* Tab content */}
          <div className="bg-[#181818] rounded-xl p-4 border border-[#2a2a2a] min-h-[180px]">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
