import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";

class Header extends Component {
  render() {
    if (!this.props.data) return null;

    const project = this.props.data.project;
    const github = this.props.data.github;
    const name = this.props.data.name;
    const description = this.props.data.description;
    const networks = this.props.data.social.map(function (network) {
      return (
        <li key={network.name}>
          <a href={network.url}>
            <i className={network.className}></i>
          </a>
        </li>
      );
    });


    return (
      <header id="home">
        <ParticlesBg type="cobweb" bg={true} color={"#c6f7f7"} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home" style={{ fontSize: "120%" }}>
                HOME
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about" style={{ fontSize: "120%" }}>
                ABOUT
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#resume" style={{ fontSize: "120%" }}>
                RESUME
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#portfolio" style={{ fontSize: "120%" }}>
                PROJECTS
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#contact" style={{ fontSize: "120%" }}>
                CONTACT
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline" style={{ color: "#e1f2f0" }}>{name}</h1>
            </Fade>
            <Fade bottom duration={1200}>
              <h3>{description}.</h3>
            </Fade>
            <hr />
            <Fade bottom duration={2000}>
              <ul className="social">

                {networks}
              </ul>
            </Fade>
          </div>
        </div>

        <p className="scrolldown">
          <a className="smoothscroll" href="#about">
            <i className="icon-down-circle"></i>
          </a>
        </p>
      </header>
    );
  }
}

export default Header;
