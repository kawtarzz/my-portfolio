
import { Link } from "react-router-dom";
import './index.scss'
import React from 'react'


const Home = () => {


  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            Full-stack developer with a background in visual design.
            Blending creativity & technology to build intuitive, user-centric applications that look good and make sense.
          </h1>
          <Link className="flat-button" to="/portfolio">
            _portfolio
          </Link>
        </div>
      </div >
    </>)
}

export default Home;
