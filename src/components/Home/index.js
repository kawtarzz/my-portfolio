
import { Link } from "react-router-dom";
import './index.scss'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const [path, setPath] = useState("/")

  const handleClick = () => {
    if (path === "/") {
      setPath("/projects")
    } else {
      setPath("/")
    }
  }

  return (
    <>
      <div className="container">
        <div className="home-page">
          <h1 className="header h1">
            Full-stack developer with a background in visual design.
            Blending creativity & technology to build intuitive, user-centric applications that look good and make sense.
          </h1>
        </div>
        <br></br>
        <div className="button-container">
          <Link className="flat-button" to={path} onClick={handleClick}>
            _portfolio
          </Link>
        </div>
      </div >
    </>)
}

export default Home;
