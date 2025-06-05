import React from "react";

const projects = [
  {
    title: "Calculator",
    description: "A basic calculator for simple arithmetic operations.",
    link: "#",
  },
  {
    title: "Login Form",
    description: "Simple login form with validation.",
    link: "#",
  },
  {
    title: "To-Do App",
    description: "Track your tasks with a React-based to-do list.",
    link: "#",
  },
  {
    title: "Weather App",
    description: "Check current weather using an open API.",
    link: "#",
  },
];

export default function Projects() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6 text-blue-700">My Projects</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((proj, index) => (
          <div
            key={index}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold text-blue-600">{proj.title}</h2>
            <p className="text-gray-700 mb-2">{proj.description}</p>
            <a href={proj.link} className="text-sm text-blue-500 underline">
              View Project
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}
