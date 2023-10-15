import { Gallery } from "react-grid-gallery";
import React from "react";
import "./index.scss";

const Portfolio = () => {
  const [loading, setLoading] = React.useState(true);


  const images = [
    {
      id: 1,
      src: "https://onedrive.live.com/embed?resid=DEB0002FC4BFD90D%2143153&authkey=%21ABFbfQeiCHjn25k&width=800",
      caption: "Shop the Block- Full-Stack E-commerce Application",
      tags: [
        { value: "React", title: "Shop the Block - Full-Stack Server-Side Capstone" },
        { value: ".NET Stack", title: "Web API" },
        { value: "C#", title: "Back-End" },
        { value: "SQL", title: "Database" },
      ],
      alt: "Productivity Tracking Application",
    },
    {
      id: 2,
      src: "https://onedrive.live.com/embed?resid=DEB0002FC4BFD90D%2143204&authkey=%21APdNUoPA0qrtGQc&width=660",
      caption: "CookiJar- Productivity Tracking Application",
      tags: [
        { value: "Front-End", title: "CookiJar" },
        { value: "React", title: "Client" },
        { value: "Bootstrap", title: "Styling" },
        { value: "JSON REST API", title: "Server" },
      ],
      alt: "Productivity Tracking Application",
    }
  ];

  return (
    <div className="portfolio-page">
      {
        images.map((image) => {
          return (
            <Gallery key={image.id} images={images} className="images-container" />
          )
        })
      }
    </div>
  )
}

export default Portfolio;