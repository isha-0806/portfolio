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
      githubUrl: "https://github.com/isha-0806/portfolio",
    },
    {
      title: "Pro Web Application - Upstox",
      id: "project_2",
      stack: "ReactJs | Typescript | Redux | HTML | CSS",
      description:
        "Worked on various features to enhance the application throughout for better user experience.",
    },
    {
      title: "Movie Search Application",
      id: "project_3",
      description:
        "Application for searching movies and getting details about them.",
      stack: "NextJs | Typescript | HTML | Tailwind CSS",
      githubUrl: "https://github.com/isha-0806/movie-search-app",
      projectUrl: "https://movie-search-app-pyp3-isha-0806.vercel.app/",
    },
  ];
  return (
    <section className="text-white flex flex-col pt-24" id="projects">
      <h2 className="text-4xl font-bold text-white text-center mb-8">
        My Projects
      </h2>
      <div className="grid gap-10 w-full grid-rows-3 lg:grid-cols-3 lg:grid-rows-1">
        {project_data.map(
          ({ title, id, description, stack, githubUrl, projectUrl }) => (
            <ProjectCard
              title={title}
              key={id}
              description={description}
              stack={stack}
              githubUrl={githubUrl}
              projectUrl={projectUrl}
            />
          )
        )}
      </div>
    </section>
  );
};

export default ProjectSection;
