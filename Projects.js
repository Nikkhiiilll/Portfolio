import React from "react";
import projects from "projects.json";

function Projects() {
  return (
    <section id="projects">
      <h2>Projects</h2>
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((p, i) => (
          <div
            key={i}
            className="bg-white shadow rounded-xl p-6 hover:shadow-lg transition"
          >
            <h3 className="text-xl font-semibold text-gray-900">{p.title}</h3>
            <p className="text-sm text-gray-500 mt-1">{p.tech}</p>
            <p className="mt-4">{p.description}</p>
            <a
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              View Live
            </a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

