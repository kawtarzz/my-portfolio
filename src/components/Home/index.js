import { useState, useEffect } from "react"
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import './index.scss'
import AnimatedLetters from "../AnimatedLetters";

const Home = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  const name = 'Kawtar';
  const nameArray = [...name.split('')];
  const job = 'web developer';
  const jobArray = [...job.split('')];

  const animate = () => {
    return setTimeout(() => {
      setletterClass('text-animate-hover')
    }, 4000)
  }

  useEffect(() => {
    animate()
  }, [])

  return (
    <>
      <div className="container home-page">
        <div>
          <h1>
            <span className={letterClass}>
              Hello! </span>
            <br />
            <span className={`${letterClass} _12`} >I</span>
            <span className={`${letterClass} _14`} >'m</span>
            <img
              src={""}
              alt=""
            />
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={16}
            />
            <br />
            <span className={`${letterClass} _15`} >a</span>
            <span className={`${letterClass} _16`} > </span>

            <AnimatedLetters
              letterClass={letterClass}
              strArray={jobArray}
              idx={16}
            />
          </h1>
          <span className={`${letterClass} _15`} > </span>
          <span className={`${letterClass} _16`} > </span>
          <h4>
            Combining technical expertise with creative flair to create innovative solutions in web development and brand design. With an eye for detail and a deep understanding of design principles that inspire visually appealing identities and engaging digital experiences.
          </h4>
          <Link to="/contact"
            className="flat-button">
            <span>Get in touch</span>
          </Link>
        </div>
      </div>
      <Loader type="ball-pulse" active={true} />
    </>
  )
}

export default Home;