import React from "react";
import { ProjectCardProps } from "./typings";
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
        {githubUrl && (
          <Link
            href={githubUrl}
            target="_blank"
            className="flex justify-center"
          >
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
        )}
      </CardContent>
    </Card>
  );
};

export default ProjectCard;
