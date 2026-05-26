import React from "react";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";

export default function Links() {
  return (
    <div className="flex gap-3 pt-2">
      <a
        href="https://github.com/marco-boone"
        className="text-subtext0 transition-colors hover:text-blue"
        aria-label="GitHub"
      >
        <FaGithub />
      </a>
      <a
        href="https://www.linkedin.com/in/marco-boone-220200262/"
        className="text-subtext0 transition-colors hover:text-blue"
        aria-label="LinkedIn"
      >
        <FaLinkedin />
      </a>
    </div>
  );
}
