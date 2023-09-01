import React, { useEffect, useState } from "react";
import Loader from "react-loaders";
import AnimatedLetters from "../AnimatedLetters";
import "./index.scss";


const Portfolio = () => {
  const [letterClass, setLetterClass] = useState('text-animate');
  const [portfolio, setPortfolio] = useState([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 3000);

    return () => {
      clearTimeout(timer);
    }
  });


  const renderPortfolio = () => {
    return (
      <div className="images-container">

        {('Hello')}
      </div>
    );
  }


  return (
    <>
      <div className="container portfolio-page">
        <div className="row">
          <div className="col-12">
            <div className="portfolio-title">
              {'Portfolio'}
              <br></br>


            </div>
          </div>
        </div>

        <Loader type="pacman" />
      </div>
    </>
  );
};

export default Portfolio;