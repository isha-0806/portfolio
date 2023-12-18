import {
  JSXElementConstructor,
  MouseEvent,
  MouseEventHandler,
  ReactElement,
  ReactNode,
} from "react";
import { UrlObject } from "url";

export type NavLinkProps = {
  href: string | UrlObject;
  title: string;
};

export type TabButtonProps = {
  active: boolean;
  selectTab: MouseEventHandler;
  children: ReactNode;
};

export type ProjectCardProps = {
  stack?: string;
  title: string;
  description: string;
  githubUrl?: string;
};

export type EmailRequest = {
  body: {
    email: string;
    subject: string;
    message: string;
  };
};
