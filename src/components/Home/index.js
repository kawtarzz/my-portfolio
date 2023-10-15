import { useState, useEffect } from "react"
import Loader from "react-loaders";
import { Link } from "react-router-dom";
import './index.scss'
import AnimatedLetters from "../AnimatedLetters";

const Home = () => {
  const [letterClass, setletterClass] = useState('text-animate')
  const name = 'Kawtar';
  const nameArray = [...name.split('')];
  const job = 'software developer';
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
            <span className={letterClass}>Hello! </span>
            <br />
            <span className={`${letterClass} _12`} >I</span>
            <span className={`${letterClass} _14`} >'m</span>



            <img
              src={""}
              alt=""
            />
            <span className={`${letterClass} _14`} >Kawtar</span>


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
          <h4>passionate web developer and designer seeking full-time opportunities! </h4>
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