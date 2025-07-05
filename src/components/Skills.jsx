import React from "react";

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "React",
  "Tailwind CSS",
  "Node.js",
  // Add more as needed
];

export default function Skills() {
  return (
    <div className="py-12 bg-gray-100">
      <h2 className="text-3xl font-semibold text-center mb-6">My Skills</h2>
      <div className="flex flex-wrap justify-center gap-4">
        {skills.map((skill) => (
          <span key={skill} className="px-4 py-2 bg-white rounded shadow text-gray-800">{skill}</span>
        ))}
      </div>
    </div>
  );
}