import { useState, useEffect } from "react"
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import './index.scss'
import AnimatedLetters from "../AnimatedLetters";
import {
  faAngular,
  faCss3,
  faGitAlt,
  faHtml5,
  faJsSquare,
  faReact,
} from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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
        <div className="text-zone">
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

          <div className="stage-cube-cont">
            <div className="cubespinner">
              <div className="face1">
                <FontAwesomeIcon icon={faAngular} color="#DD0031" />
              </div>
              <div className="face2">
                <FontAwesomeIcon icon={faHtml5} color="#F06529" />
              </div>
              <div className="face3">
                <FontAwesomeIcon icon={faCss3} color="#28A4D9" />
              </div>
              <div className="face4">
                <FontAwesomeIcon icon={faReact} color="#5ED4F4" />
              </div>
              <div className="face5">
                <FontAwesomeIcon icon={faJsSquare} color="#EFD81D" />
              </div>
              <div className="face6">
                <FontAwesomeIcon icon={faGitAlt} color="#EC4D28" />
              </div>
            </div>
          </div>

        </div>
      </div>
      <Loader type="ball-pulse" active={true} />
    </>
  )
}

export default Home;