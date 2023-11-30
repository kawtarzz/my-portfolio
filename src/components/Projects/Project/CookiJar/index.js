
import { projects } from '../../_data/data';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithubSquare } from '@fortawesome/free-brands-svg-icons';
export default function CookiJar() {
  const project = projects[0]

  return (
    <>
      <div className='container'>
        <div className="projects" key={project.id}>
          <img src={project.image} alt="" />
          <h1 className="project-title">
            {project.title}
          </h1>
          <h2 className="description">
            {project.description}
          </h2>
          <hr />
          <h2>Problem:</h2>
          <p>
            {project.problem}
          </p>
          <h2>Solution:</h2>
          <p className="solution">
            {project.solution}
          </p>
          <h2 className="tech-stack">
            Tech Stack:
          </h2>
          <h3>
            {project.subtitle}
          </h3>
          <hr></hr>
          <div className="back-button">
            <a href="/projects">
              Back to Portfolio
            </a>
            <a href={project.repolink} target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithubSquare} /> View Code on Github
            </a>
          </div>
        </div>
      </div>
    </>
  )
}