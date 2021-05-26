import React, { Component } from "react";
import Zmage from "react-zmage";
import Fade from "react-reveal";
import VIUWER from "../assets/viuwernew.jpg";
import movie from "../assets/movie.jpg";
import auto from "../assets/Auto.jpg";
import Slide from "react-reveal";

let id = 0;
class Portfolio extends Component {
  render() {
    if (!this.props.data) return null;

    const projects = this.props.data.projects.map(function (projects) {
      let projectImage = "images/portfolio/" + projects.image;

      return (

        <div key={id++} className="columns portfolio-item">

          <div className="item-wrap">
            <Zmage alt={projects.title} src={projectImage} />
            <div style={{ textAlign: "center" }}>{projects.title}</div>
          </div>
        </div>
      );
    });

    return (
      <section id="portfolio">
        <Fade left duration={1000} distance="40px">
          <div className="row">
            <div className="twelve columns collapsed">
              <h1 style={{ fontSize: "2.5rem", color: "black", paddingBottom: "5%" }}>Check Out Some of my recent Projects.</h1>

              <div
                id="portfolio-wrapper"

              >

                <div className="row work">
                  <div className="three columns header-col">
                    <h1>
                      <p style={{ fontSize: "2.5rem", color: "black" }}>2021</p>

                    </h1>
                  </div >

                  <div className="nine columns main-col">
                    <h2 style={{ fontSize: "2.3rem" }}>Project VIUWER</h2>
                    <h1>  </h1>
                    <p style={{ fontSize: "1.8rem", color: "black" }}>Second Year Data Science Project (SDGP) Led the team of
                    an End-to-End developed project to measure the social
impact of a particular YouTube video.</p>

                    <ul style={{ listStyleType: "square", color: "black" }}>
                      <li><a href="https://youtu.be/QRDZxtTWafs">Click here to watch the Implementation Done by the team</a></li>
                      <li><a href="https://youtu.be/v_emR7KFpP0">Click here to watch the Demonstration of the Application</a></li>

                    </ul>
                  </div>
                </div>
              </div>

              <div
                id="portfolio-wrapper"

              >

                <div className="row work">
                  <div className="three columns header-col">
                    <h1>
                      <p style={{ fontSize: "2.5rem", color: "black" }}>2021</p>

                    </h1>
                  </div >

                  <div className="nine columns main-col">
                    <h2 style={{ fontSize: "2.3rem", color: "black" }}>Project "Auto Cruise"</h2>
                    <h1>  </h1>
                    <p style={{ fontSize: "1.8rem", color: "black" }}>Gaming application developed using android for mobiles.</p>





                  </div>
                </div>



              </div>

              <div
                id="portfolio-wrapper"

              >

                <div className="row work">
                  <div className="three columns header-col">
                    <h1>
                      <p style={{ fontSize: "2.5rem", color: "black" }}>2021</p>

                    </h1>
                  </div >

                  <div className="nine columns main-col">
                    <h2 style={{ fontSize: "2.3rem", color: "black" }}>Project "Movie Mania"</h2>
                    <h1>  </h1>
                    <p style={{ fontSize: "1.8rem", color: "black" }}>Movie registering application developed using android for mobiles. </p>





                  </div>
                </div>



              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default Portfolio;
