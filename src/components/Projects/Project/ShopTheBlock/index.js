import React from 'react'
import { projects } from '../../_data/data'
import { Card, CardText, CardTitle, Container, CardImg, CardHeader, CardSubtitle } from 'reactstrap'
import '../index.scss'

function ShopTheBlock() {
  const project = projects[1]
  return (
    <>
      <div className="portfolio" fluid="true">
        <div className="card">
          <a href="/projects"><h3>
            Back to Portfolio
          </h3>
          </a>
          <div className="col-xs-12 col-sm-8 col-lg-4">
            <Card className="project" key={project.id}>
              <CardHeader className="project-header">
                <CardImg top style={{ width: '48rem' }} className="project-img" src={project.image} alt={project.title} />
                <CardTitle tag="h2" className="title">{project.title}</CardTitle>
              </CardHeader>
              <CardText className="project-item">
                <h4>
                  {project.description}
                </h4>
                <hr />
                <h4>Problem:</h4>
                <br></br>
                <h5>
                  {project.problem}
                </h5>
                <h4>Solution:</h4>
                <br></br>
                <h5>
                  {project.solution}
                </h5>
                <hr />
                <CardSubtitle tag="h4" className="mb-2 text-muted">
                  Tech Stack:
                  <h5>
                    {project.subtitle}
                  </h5>
                </CardSubtitle>
                <hr />
              </CardText>
            </Card>
          </div>
        </div>

      </div>
    </>
  )
}

export default ShopTheBlock