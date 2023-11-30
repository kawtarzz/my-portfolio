import React from "react";
import Project from "./Project";
import { projects } from './_data/data';

function Projects() {
  return (
    <>
      {projects.map((project) => (
        <Project key={project.id} id={project.id} project={project} />
      ))}
    </>
  );
}

export default Projects;
