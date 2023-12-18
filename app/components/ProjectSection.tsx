import React from "react";
import ProjectCard from "./ProjectCard";

const ProjectSection = () => {
  const project_data = [
    {
      title: "Portfolio Website",
      id: "project_1",
      stack: "NextJs | Typescript | HTML | Tailwind CSS",
      description:
        "Simple responsive portfolio website designed using NextJs and Tailwind CSS",
      githubUrl: "https://github.com/isha-0806",
    },
    {
      title: "Pro Web Application - Upstox",
      id: "project_2",
      stack: "ReactJs | Typescript | Redux | HTML | CSS",
      description:
        "Worked on various features to enhance the application throughout for better user experience.",
    },
    {
      title: "Resident Web Portal - myAadhaar",
      id: "project_3",
      description:
        "Developed resident centric portal for providing various services around Aadhaar.",
      stack: "ReactJs | Redux | HTML | CSS ",
    },
  ];
  return (
    <section className="text-white flex flex-col pt-24" id="projects">
      <h2 className="text-4xl font-bold text-white text-center mb-8">
        My Projects
      </h2>
      <div className="grid gap-10 w-full grid-rows-3 lg:grid-cols-3 lg:grid-rows-1">
        {project_data.map(({ title, id, description, stack, githubUrl }) => (
          <ProjectCard
            title={title}
            key={id}
            description={description}
            stack={stack}
            githubUrl={githubUrl}
          />
        ))}
      </div>
    </section>
  );
};

export default ProjectSection;
