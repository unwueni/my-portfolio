import React from "react";
import myProjectImg from "../assets/project.png";

export default function Projects() {
  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="max-w-md bg-white rounded shadow p-4">
        <img
          src={myProjectImg}
          alt="Screenshot of My Project"
          className="rounded mb-2"
        />
        <h3 className="text-xl font-semibold">My Project Title</h3>
        <p className="mb-2">Short description of your project goes here.</p>
        <a
          href="https://your-project-link.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:underline"
        >
          View Project
        </a>
      </div>
    </div>
  );
}