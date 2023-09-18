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

  useEffect(() => {
    fetch('https://api.github.com/users/kawtarzz/repos')

      .then((response) => response.json())
      .then((data) => {
        const portfolio = data.map((item) => {
          return {
            title: item.name,
            description: item.description,
            image: item.homepage,
            url: item.html_url,
          };
        });
        setPortfolio(portfolio);
      });
  }, []);


  const renderPortfolio = () => {
    return (
      <div className="images-container">

        {portfolio.map((item, index) => {
          return (
            <div className="image-container" key={index}>
              <img src={item.image} alt="" />
              <div className="overlay">
                <div className="overlay-text">

                  <a href={item.url}> <h3 className="overlay-text">{item.title}</h3> </a>
                  <br></br>
                  <br></br>
                  <p>{item.description}</p>
                </div>
              </div>
            </div>
          );
        })}

      </div>
    );
  }


  return (
    <>
      <div className="container portfolio-page">
        <div className="row">
          <div className="col-12">
            <div className="portfolio-title">
              <br></br>
              <span className={`${letterClass} _12`}>Portfolio</span>
              {renderPortfolio()}
            </div>
          </div>
        </div>

        <Loader type="pacman" />
      </div>
    </>
  );
};

export default Portfolio;