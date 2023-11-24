import Carousel from "react-gallery-carousel";

import "react-gallery-carousel/dist/index.css";
import { CarouselItem } from "react-bootstrap";


function ImageCarousel({ data }) {
  const images = data.map((data) => {
    return {
      src: data.image,
      alt: data.title
    }
  })
  const description = data.map((data) => {
    return {
      title: data.title,
      subtitle: data.subtitle,
      description: data.description,
      problem: data.problem,
      solution: data.solution,
      repolink: data.repolink
    }
  })

  return (
    <div className="carousel">
      <Carousel image={data.image} hasThumbnails={true} hasIndexBoard={true} style={{ width: '70vw', height: '50vw', marginInline: '10rem', marginTop: '3rem' }}>
        <CarouselItem>
          <h3>{description[0].title}</h3>
          <p>{description[0].subtitle}</p>
          <p>{description[0].description}</p>
          <p>{description[0].problem}</p>
          <p>{description[0].solution}</p>
        </CarouselItem>
      </Carousel>
    </div>
  );
}
export default ImageCarousel;