import React from "react";
import NavLink from "./NavLink";
import { NavLinkProps } from "./typings";

type Props = {
  links: NavLinkProps[];
};
const MenuOverlay: React.FC<Props> = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center">
      {links.map(({ href, title }) => (
        <li key={title}>
          <NavLink href={href} title={title} />
        </li>
      ))}
    </ul>
  );
};

export default MenuOverlay;
