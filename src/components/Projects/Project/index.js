import React from "react";
import { Link, useNavigate } from "react-router-dom"
import { useLocation } from 'react-router-dom'
import { Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap"
import './index.scss'

export default function Project({ project }) {
  const navigate = useNavigate();
  const location = useLocation();

  const handleClick = () => {
    const path = location.pathname;
    const newPath = path + "/" + project.title;
    navigate(newPath);
  }

  return (
    <Card className="m-4" key={project.id}>
      <CardImg top width="43%" src={project.image} alt={project.title}
        onClick={handleClick} />
      <CardBody>
        <CardTitle tag="h2">{project.title}</CardTitle>
        <CardSubtitle tag="h4" className="mb-2 text-muted">{project.subtitle}</CardSubtitle>

        <CardText>{project.description}</CardText>
      </CardBody>

    </Card>
  )
}