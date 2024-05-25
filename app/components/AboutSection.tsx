"use client";
import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";
const AboutSection = () => {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id: string) => {
    startTransition(() => {
      setTab(id);
    });
  };

  const tab_data = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Javascript</li>
          <li>ReactJs</li>
          <li>NextJs</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>Tailwind CSS</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>B.Tech (Software Engineering), Delhi Technological University</li>
          <li>Class XII ( CBSE) Apeejay School Pitampura, Delhi</li>
          <li>Class X ( CBSE) Apeejay School Pitampura, Delhi</li>
        </ul>
      ),
    },
    {
      title: "Experience",
      id: "experience",
      content: (
        <ul className="list-disc pl-2">
          <li>
            Software Development Engineer 2 -- Upstox (RKSV Ltd.) (Current)
          </li>
          <li>Software Development Engineer 1 -- Upstox (RKSV Ltd.)</li>
          <li>Technical Executive -- UIDAI Technology Centre</li>
        </ul>
      ),
    },
  ];

  return (
    <section className="text-white" id="about">
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-[95px] xl:gap-16">
        <Image
          src="/images/about-image.png"
          alt="about image"
          width={500}
          height={500}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg">
            I am a frontend web developer with a passion for creating
            interactive and responsive web applications. I have experience
            working with JavaScript, React, Redux, HTML, CSS, and Git. I am a
            quick learner and I am always looking to expand my knowledge and
            skill set. I am a team player and I am excited to work with others
            to create amazing applications.
          </p>
          <div className="flex flex-row mt-8">
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
              selectTab={() => handleTabChange("experience")}
              active={tab === "experience"}
            >
              Experience
            </TabButton>
          </div>
          <div className="mt-8">
            {tab_data.find((data) => data.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
