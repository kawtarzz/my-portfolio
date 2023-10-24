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
                  {project.description}
                  <Card.Subtitle>
                    <h4>
                      Tech:
                    </h4>
                    <h5>
                      {project.subtitle}
                    </h5>
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