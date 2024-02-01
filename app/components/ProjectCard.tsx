import React from "react";
import { ProjectCardProps } from "./typings";
import { EyeIcon } from "@heroicons/react/24/outline";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import GithubIcon from "../../public/images/github-icon.svg";
import Link from "next/link";
import Image from "next/image";

const ProjectCard = ({
  title,
  stack,
  description,
  githubUrl,
  projectUrl,
}: ProjectCardProps) => {
  return (
    <Card className="bg-gradient-to-br from-blue-500 to-cyan-500 text-white items-center">
      <CardContent>
        <Typography
          className="font-semibold text-xl text-center"
          color="text.secondary"
          gutterBottom
        >
          {title}
        </Typography>
        <Typography className="my-[10px] text-center">{stack}</Typography>
        <Typography className="my-[16px] text-center">{description}</Typography>
        <div className="flex justify-center items-center gap-5">
          {githubUrl && (
            <Link
              href={githubUrl}
              target="_blank"
              className="flex justify-center"
            >
              <Image src={GithubIcon} alt="Github Icon" />
            </Link>
          )}
          {projectUrl && (
            <Link
              href={projectUrl}
              target="_blank"
              className="flex justify-center"
            >
              <EyeIcon className="h-10 w-10" />
            </Link>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
