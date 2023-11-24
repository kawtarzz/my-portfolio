import React from "react";
import Project from "./Project";
import './index.scss'
import { projects } from './_data/data';

function Projects() {
  return (
    <>
      <div className="portfolio">
        <h1>Portfolio</h1>
        {projects.map((project) => (
          <div key={project.id} className="col-xs-12 col-sm-8 col-lg-4">
            <Project key={project.id} project={project} />
          </div>
        ))}
      </div>
    </>
  );
}

export default Projects;
