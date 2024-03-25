import React, { useState } from 'react';

const Portfolio = () => {
  const [selectedSlide, setSelectedSlide] = useState('s-1');

  const handleChange = (event) => {
    setSelectedSlide(event.target.id);
  };

  return (
    <section id="portfolio">
        <div className="box">
      <input type="radio" id="s-1" name="slider-control" checked={selectedSlide === 's-1'} onChange={handleChange} />
      <input type="radio" id="s-2" name="slider-control" checked={selectedSlide === 's-2'} onChange={handleChange} />
      <input type="radio" id="s-3" name="slider-control" checked={selectedSlide === 's-3'} onChange={handleChange} />
      <div className="js-slider">
        <figure className="js-slider_item img-1">
          <div className="js-slider_img">
          <a href="https://tenziezthegame.netlify.app/" target="_blank" rel="noreferrer noopener"><img className="c-img-w-full" src="https://lh3.googleusercontent.com/pw/AP1GczO8bzAn8kVbaXv8K-5gdJyuxRQd-7plWVFawZK56lwJBRMRS1l-sD9l02pFMpO_yKxBnXXcYVydKVAKpTRPKYOHqp3eJ1jkH0IVwy-HJJP05xGo9k0=w2400" alt="" /></a> 
          </div>
          <figcaption className="wo-caption">
            <h3 className="wo-h3">
              <div className="c-label">Projects:</div><br />
              <br className="view-sm mb-s" />Tenzies <br /> <a href="https://github.com/JuanAlvarado772/Tenzies" target="_blank" rel="noreferrer noopener"><i className="fa-brands fa-github" style={{'color': 'black'}}></i></a></h3>
            <ul className="wo-credit">
              <li>Tenzies, is an engaging and interactive dice game built with React, where players roll ten dice aiming to get all of them to show the same number.</li>
              <br />
              <li>Players can "freeze" individual dice at their current value between rolls, strategizing to achieve uniformity across all dice.</li>
              <br />
              <li>
                <span className="c-txt-s"></span>
              </li>
            </ul>
          </figcaption>
        </figure>
        <figure className="js-slider_item img-2">
          <div className="js-slider_img">
          <a href="https://psapokemon.netlify.app/" target="_blank" rel="noreferrer noopener"><img className="c-img-h-full" src="https://lh3.googleusercontent.com/pw/ABLVV86llVzjiAJwz6K0rLxCqsAhb3qhjGcdEhXYCMu5wIY1OjBJ8I_PMR3ujtk_r5kOPKR4O3Nq6bt6EIMHBOwtIjFeZu1KMhDx1YTtcbfwV85x3gzD3C0=w2400" alt="" /></a>
          </div>
          <figcaption className="wo-caption">
            <h3 className="wo-h3">Pokemon Search <br /><a href="https://github.com/JuanAlvarado772/PSA1" target="_blank" rel="noreferrer noopener"><i className="fa-brands fa-github" style={{'color': 'black'}}></i></a></h3>
            <ul className="wo-credit">
              <li>A Pokemon search application utilizing the fetch API to access a extensive database fewaturing over 1,000 Pokemon characters.</li>
              <br /><li>This web application was designed to enrich Pokémon fans or non-fans alike by bringing their favorite Pokémon to life in a visually engaging and informative way.</li>
              <li></li>
            </ul>
          </figcaption>
        </figure>
        <figure className="js-slider_item img-3">
          <div className="js-slider_img">
            <a href="https://bookpal.netlify.app/" target="_blank" rel="noreferrer noopener">
              <img className="c-img-h-full" src="https://lh3.googleusercontent.com/pw/AP1GczMTqAVQomiCkYxr_OxISoL7aACcDZE4zxHxLLoBd6ylPDrQB5ichQzEDTv95wI8ptG8sESFH1D4EdSSXUyRFat2W-eO7aFcE4TLkEAZ-Wfd1UeJ7Vs=w2400" alt="BookPal Project" />
            </a> 
          </div>
          <figcaption className="wo-caption">
            <h3 className="wo-h3">
              BookPal<br/>
              <a href="https://github.com/JuanAlvarado772/BookPal" target="_blank" rel="noreferrer noopener"><i className="fa-brands fa-github" style={{'color': 'black'}}></i></a>
            </h3>
            <ul className="wo-credit">
              <li>BookPal simplifies the journey of discovering new books with a streamlined search functionality powered by the Google Books API. This full-stack project leverages Python for backend development, managing API requests and data processing to ensure users can easily find books that match their interests.</li>
              <br />
              <li>The React-based frontend presents a user-friendly interface, allowing seamless navigation and interaction with the search feature. BookPal is the go-to web application for book enthusiasts seeking to explore a vast library of books at their fingertips.</li>
            </ul>
          </figcaption>
        </figure>
        <div className="js-slider_nav">
          <label className="js-slider_nav_item s-nav-1 prev" htmlFor="s-3"></label>
          <label className="js-slider_nav_item s-nav-1 next" htmlFor="s-2"></label>
          <label className="js-slider_nav_item s-nav-2 prev" htmlFor="s-1"></label>
          <label className="js-slider_nav_item s-nav-2 next" htmlFor="s-3"></label>
          <label className="js-slider_nav_item s-nav-3 prev" htmlFor="s-2"></label>
          <label className="js-slider_nav_item s-nav-3 next" htmlFor="s-1"></label>
        </div>
        <div className="js-slider_indicator">
          <div className="js-slider-indi indi-1"></div>
          <div className="js-slider-indi indi-2"></div>
          <div className="js-slider-indi indi-3"></div>
        </div>
      </div>
    </div>
    </section>
    
  );
};

export default Portfolio