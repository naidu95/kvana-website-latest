import React from 'react';
import './App.css';
import Slider from "react-slick";

export default class App extends React.Component {

  render() {
    const settings = {
      dots: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 1,
      autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear"
    };
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
              <img alt="team-work" width="50%" src="team-work.svg" />
            </div>

          </div>
          <div className="clients">
            <div class="container">
              <h2>Our Clients</h2>
              <Slider {...settings} >
                <div ><img src="remidy.png" /></div>
                <div ><img src="mumsy.png" /></div>
                <div ><img src="Livefyre.png" /></div>
                <div ><img src="caddybeacon.png" /></div>
              </Slider>
            </div>
          </div>
        </div>
        <div className="about">
          <div className="container">
            <div className="about-title">
              <p id="title">About</p>
            </div>
            <div className="about-description">
              <div className="description">
                <span>We are part of Facebook's FBStart program and IBM's Global Entreprenuer program At Kvana, we are a collective of designers, developers, and digital strategists, our philosophy for delivering fresh is integrating everywhere, in our teams, workspaces, process, and deliverables. Together with our clients, we create innovative combinations.</span>
              </div>
              <p>we specialize in:</p>
            </div>
            <div class="specialization">
              <div className="ios">
                <div><i class="fa fa-apple" aria-hidden="true"></i></div>
                <p>ios</p>
              </div>
              <div className="ios">
                <div><i class="fa fa-android" aria-hidden="true"></i></div>
                <p>android</p>
              </div>
              <div className="ios">
                <div><i class="fa fa-diamond" aria-hidden="true"></i></div>
                <p>web</p>
              </div>
              <div className="ios">
                <div><i class="fa fa-mobile" aria-hidden="true"></i></div>
                <p>app design</p>
              </div>
              <div className="ios">
                <div><i class="fa fa-user" aria-hidden="true"></i></div>
                <p>ux/ui</p>
              </div>
            </div>
          </div>
        </div>
        <div className="contact">
          <div className="container">
            <div className="contact-title">
              <p id="title">Contact Us</p>
            </div>
            <div className="contact-description">
              <div>
                <img width="400" height="400" alt="" src="contact-us.svg" />
              </div>
              <div>
                <p>We’re always looking for new projects to work on, if you have some please write us!</p>
                <a href="mailto:contact@kvana.com">Contact</a>
              </div>

            </div>
            <div class="address">
              <div>
                <i class="fa fa-map-marker" aria-hidden="true" style={{ fontSize: "50px", textAlign: "center" }}></i>
                <address>
                  <p>Kvana Inc.</p>
                  <p>177 Park Avenue,</p>
                  <p>Suite 200,</p>
                  <p>San Jose, CA 95113.</p>
                  <p>(415) 484-5689</p>
                </address>
              </div>
              <div>
                <i class="fa fa-map-marker" aria-hidden="true" style={{ fontSize: "50px" }}></i>
                <address>
                  <p>#302, Harsha Homes,</p>
                  <p>Near Madhapur Police Station,</p>
                  <p>Kavuri Hills, Madhapur,</p>
                  <p>Hyderabad-500081. India.</p>
                  <p>+91 9700733431/9640685656</p>
                </address>
              </div>
            </div>
          </div>
        </div>
        <div class="footer">
          <div className="container">
          <p>Terms & Conditions</p>
          <p>Designed and developed by Kvana.com@2019</p>
          <p>Contact</p>
          </div>
        </div>
      </div>
    )
  }


}

