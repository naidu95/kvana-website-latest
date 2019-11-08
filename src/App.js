import React from 'react';
import './App.css';

function App() {
  return (
    <div className="kvana-website">
      <div className="nav-header">
        <div className="container">
          <header>
            <div>
              <a style={{ fontSize: '30px', paddingTop: '10px' }}><img src="logo.png" alt="29andNaidu" className="logo" style={{ verticalAlign: 'middle' }} />Kvana</a>
            </div>
            <nav>
              <a href="#" className="hide-desktop">
                <img src="menu.svg" alt="toggle" className="menu" id="menu" />
              </a>
              <ul className="show-desktop hide-mobile" id="nav">
                <li id="exit" className="exit-btn hide-desktop"><img src="menu.svg" alt="exit" /></li>
                <li><a href="#">Home</a></li>
                <li><a href="#">Work</a></li>
                <li><a href="#">About</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </nav>
          </header>
        </div>
      </div>
      <div className="landing-page">
        <ul className="container">
          <li>
            <div style={{ textAlign: 'left', marginTop: '5em' }}>
              <span>We are</span><br />
              <span style={{ textTransform: "uppercase" }}>Kvana</span>
              <p>The world is mobile. You should be too. Kvana is a full-service app development company for iOS, Android and the web. We work with companies, brands and funded startups to create great products. Kvana has you covered from conception to launch.</p>
              <p>Our Eighteen-person team of dedicated developers has expertise in a wide variety of tools and technologies, including Ruby on Rails, Java, Objective-C, Node.js, iBeacons, OpenGL and much more. We work fast. With teams in North America and Asia, Kvana can work on your project around the clock.</p>
            </div>
          </li>
          <li>
            <div>
              <img src="landing-page.png" alt="landing-page" />
            </div>
          </li>
        </ul>

        <div className="downArrow bounce">
          <img width="40" height="40" alt="" src="down-arrow.svg" />
        </div>
      </div>
      <div className="work">
        <div className="work-title">
          <p id="title">Work</p>
        </div>
        <div className="work-description container">
        <div className="description">
            <span>Kvana does iOS right and depending on your existing infrastructure probably in a month. Our development is spread to various domains relating to entertainment, sport, video, content management etc. Kvana is developing for Android since the birth of the platform. As this powerful mobile and tablet-friendly OS gains an ever-widening foothold among hardware manufacturers. Kvana's Experienced System Analyst and Developers work on your Custom Projects from its concept through its completion.</span>
          </div>
          <div className="image">
            <img alt="team-work" width="40%" src="team-work.svg" />
          </div>
          
        </div>

      </div>
    </div>


  );
}

export default App;
