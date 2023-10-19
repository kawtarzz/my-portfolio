import React from "react";
import { projects } from "./Projects/data.js"
import "./index.scss"


function Portfolio() {
  return (
    <div className="portfolio-page">
      <section id="projects" className="text-gray-400 bg-gray-900 body-font">
        <div>
          <h1 className="page-title">
            Portfolio
          </h1>
          <h3>
            Below you'll find a selection of my favorite projects & experiences.
          </h3>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.image}
              className="sm:w-1/2 w-100 p-4">
              <div className="images-container">
                <img
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={project.image}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}

                  </h1>
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-500 mb-1">
                    {project.subtitle}
                  </h2>
                  <h4>{project.description}</h4>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}

export default Portfolio;