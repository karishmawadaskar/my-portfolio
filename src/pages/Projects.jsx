import React from "react";

const projects = [
  {
    title: "fuji-film ",
    description: "The Fuji Film  is a full-stack web application developed using the MERN stack, designed to efficiently manage film records. The system allows users to add, view, edit, and delete film entries, making it easier to track and organize film-related data.",
    link: "https://fuji-film2.onrender.com",
  },
  {
    title: "QuickNotes [Front End Project] ",
    description: "Quick Notes, a simple yet powerful web application built using React.js. Whether you're a student juggling assignments or a professional managing a busy schedule, this app is designed to help you stay on top of your tasks! 💻📚",
    link: "https://lnkd.in/gtE-EjbT",
  },
  {
    title: "Kids Quizzland [Front End Project]",
    description: "Kids Quizzland is a vibrant and engaging platform where kids can explore and learn through quizzes. Our goal is to make learning enjoyable by providing quizzes in a simple and funny language, accompanied by fun stickers and images.This is a very interactive layout of our website.",
    link: "https://kids-quizzland.netlify.app",
  },
  {
    title: "Agrimart [Front End Project]",
    description: "Agrimart - where we deliver fresh, organic, and wholesome products directly to your doorstep. At Agrimart, we believe in bringing the goodness of nature straight from farms to your table. With our easy-to-use platform, you can explore a wide range of farm-fresh products and enjoy the convenience of quick delivery.",
    link: "https://agrimart-eta.vercel.app/",
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
