import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="footer border border-t-[#33353F] border-l-transparent border-r-transparent text-white">
      <div className="container p-12 flex justify-between">
        <Link href={"/"}>
          <span className="px-2 text-2xl md:text-5xl font-semibold italic hover:italic text-transparent bg-clip-text bg-gradient-to-r  from-blue-500 to-cyan-500">
            IJ
          </span>
        </Link>
        <span className="text-slate-600">All rights reserved.</span>
      </div>
    </footer>
  );
};

export default Footer;
