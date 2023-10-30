import React from "react";
import { projects } from "./Projects/data.js"
import { Card } from "react-bootstrap";

function Portfolio() {
  return (
    <>
      <div className="container portfolio-page">
        <div className="text-zone">
          <h1>
            Portfolio
          </h1>
          {projects.map((project) => (
            <Card key={project.id}>
              <Card.Body>
                <Card.Title>
                  <h2>
                    {project.title}
                  </h2>
                </Card.Title>
                <Card.Img variant="top" className="header_img" src={project.image} to={project.link} />
                <hr></hr>
                <Card.Text>
                  <h4>
                    {project.description}
                  </h4>
                  <hr />
                  <h4>
                    Problem:
                  </h4>
                  {project.problem} <br />
                  <h4>
                    Solution:
                  </h4>
                  {project.solution}
                  <hr />
                  <Card.Subtitle>
                    <h4>
                      Tech:
                    </h4>
                    {project.subtitle}
                    <p>
                      <Card.Link href={project.repolink}>Repo</Card.Link>
                    </p>
                  </Card.Subtitle>
                </Card.Text>
              </Card.Body>
            </Card>
          ))}
        </div>
      </div>
      <hr />
    </>
  );
}

export default Portfolio;