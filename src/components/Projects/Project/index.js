import React from "react";
import { useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom'
import './index.scss';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";


export default function Project({ project, id }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    navigate(`/projects/${project.title}`, { state: { background: location } })
  }

  return (
    <div className="container">
      <div className="projects">
        <img top src={project.image} alt={project.title}
          onClick={handleClick} />
        <h1 className="project-title">
          {project.title}
        </h1>
        <div>
          <p>
            {project.description}
          </p>
          <h3>
            {project.subtitle}
          </h3>
          <hr></hr>
        </div>
        <div className="back-button">
          <a href={`/projects/${project.title}`} onClick={handleClick}>
            Project Details
          </a> |
          <a href={project.repolink} target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithubSquare} /> View Code on Github
          </a>
        </div>
      </div>
    </div>
  )
}