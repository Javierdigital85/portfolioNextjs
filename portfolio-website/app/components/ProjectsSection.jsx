"use client";
import React, { useState, useRef } from "react";
import ProjectsCard from "./ProjectsCard";
import ProjectTag from "./ProjectTag";
import { motion, useInView } from "framer-motion";
//ACA TENEMOS QUE AGREGAR LAS RUTAS HACIA EL GITHUB DE CADA PROYECTO Y AL SITIO
const projectsData = [
  {
    id: 1,
    title: "TMDB",
    description:
      "The Movie Database is an app where you can see the latest films and series currently airing, as well as upcoming movies and series. Customers can register and easily store their favorite shows.",
    image: "/images/projects/tmdbImage.png",
    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/Javierdigital85/26-checkpoint-TMDB/tree/main/src",
    previewUrl:
      "https://github.com/Javierdigital85/26-checkpoint-TMDB/tree/main/api",
  },
  {
    id: 2,
    title: "House of Dev",
    description:
      "House Of Dev App is an application where you can rent or buy properties within Argentina and visit the properties that the customer is interested in.",
    image: "/images/projects/houseOfDevOne.png",

    tag: ["All", "Web"],
    gitUrl:
      "https://github.com/hernanortiz18/houseOfDev-src/tree/develop/Front",
    previewUrl: "https://github.com/Javierdigital85/houseOfDev",
  },
  {
    id: 3,
    title: "Delivery App",
    description:
      "Box App is a mobile delivery application where the admin can monitor daily operations, assign or reassign packages as necessary, and edit shipments to modify addresses or change delivery personnel.",
    image: "/images/projects/boxApp.png",
    tag: ["All", "Mobile"],
    gitUrl: "https://github.com/javiertrombetta/p5-box-front",
    previewUrl: "https://github.com/javiertrombetta/p5-box-back",
  },
  {
    id: 4,
    title: "Portfolio",
    description:
      "This portfolio serves as a snapshot of my journey as a developer, showcasing a diverse range of projects that I've undertaken. Each project is a testament to my adaptability and dedication to learn and mastering new technologies. Whether it's creating responsive web designs, developing interactive mobile apps, or implementing frontend and backend solutions.",
    image: "/images/projects/portfolioUno.png",
    tag: ["All", "Web"],
    gitUrl: "https://github.com/Javierdigital85/portfolioNextjs",
    previewUrl:
      "https://github.com/Javierdigital85/portfolioNextjs/tree/main/portfolio-website/app/api/send",
  },
];

const ProjectsSection = () => {
  const [tag, setTag] = useState("All");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const handleTagChange = (newTag) => {
    setTag(newTag);
  };

  const filteredProjects = projectsData.filter((project) =>
    project.tag.includes(tag)
  );

  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };

  return (
    <section>
      <h2
        id="projects"
        className="text-center text-4xl font-bold text-white mt-20 mb-8 md:mb-12"
      >
        My Projects
      </h2>
      <div className="text-white flex flex-row justify-center items-center gap-2 py-6">
        <ProjectTag
          onClick={handleTagChange}
          name="All"
          isSelected={tag === "All"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Web"
          isSelected={tag === "Web"}
        />
        <ProjectTag
          onClick={handleTagChange}
          name="Mobile"
          isSelected={tag === "Mobile"}
        />
      </div>
      <ul ref={ref} className="grid md:grid-cols-3 gap-8 md:gap-12">
        {filteredProjects.map((project, index) => (
          <motion.li
            key={index}
            variants={cardVariants}
            initial="initial"
            animate={isInView ? "animate" : "initial"}
            transition={{ duration: 0.3, delay: index * 0.4 }}
          >
            <ProjectsCard
              key={project.id}
              imgUrl={project.image}
              title={project.title}
              description={project.description}
              gitUrl={project.gitUrl}
              previewUrl={project.previewUrl}
            />
          </motion.li>
        ))}
      </ul>
    </section>
  );
};

export default ProjectsSection;
