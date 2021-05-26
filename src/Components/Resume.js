import React, { Component } from "react";
import Slide from "react-reveal";
import tickSign from "../assets/tick.png";
import heartSign from "../assets/heartred.png";
import Lsign from "../assets/thunderblue.png";
import PlusSign from "../assets/plusyellow.png";



class Resume extends Component {
  getRandomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  render() {
    if (!this.props.data) return null;

    const skillmessage = this.props.data.skillmessage;
    const education = this.props.data.education.map(function (education) {
      return (
        <div key={education.school}>
          <h3>{education.school}</h3>
          <p className="info">
            {education.degree} <span>&bull;</span>
            <em className="date">{education.graduated}</em>
          </p>
          <p>{education.description}</p>
        </div>
      );
    });

    const work = this.props.data.work.map(function (work) {
      return (
        <div key={work.company}>
          <h3>{work.company}</h3>
          <p className="info">
            {work.title}
            <span>&bull;</span> <em className="date">{work.years}</em>
          </p>
          <p>{work.description}</p>
        </div>
      );
    });

    const skills = this.props.data.skills.map((skills) => {
      const backgroundColor = this.getRandomColor();
      const className = "bar-expand " + skills.name.toLowerCase();
      const width = skills.level;

      return (
        <li key={skills.name}>
          <span style={{ width, backgroundColor }} className={className}></span>
          <em>{skills.name}</em>
        </li>
      );
    });

    return (
      <section id="resume" >
        <Slide left duration={1300}>
          <div className="row education">
            <div className="three columns header-col">
              <h1>
                <p>Education in University</p>
              </h1>
            </div>

            <div className="nine columns main-col">
              <div className="row item">
                <div className="twelve columns"><h2>Informatics Institute of Technology</h2>
                  <h1> UNDERGRADUATE UNIVERSITY OF WESTMINSTER (UK) </h1>
                  <p style={{ fontSize: "1.8rem" }}>Level 05 - from September 2020 to May 2021</p>
                  <p>MODULES :</p>
                  <ul style={{ listStyleType: "square" }}>
                    <li>Software Development Group Project</li>
                    <li> Database Systems</li>
                    <li>Object Oriented Programming </li>
                    <li>Object Oriented Programming </li>
                    <li>Client Server Architecture </li>
                    <li>Mobile Application Development</li>
                    <li>Algorithms: Theory Design and Implementation</li>


                  </ul>
                  <hr />
                  <p style={{ fontSize: "1.8rem" }}>Level 04 - from September 2019 to May 2020</p>
                  <p>MODULES :</p>
                  <ul style={{ listStyleType: "square" }}>
                    <li>Programming Principles 1 (Python)</li>
                    <li>  Programming Principle 2 (JAVA) </li>
                    <li>Mathematics for Computing</li>
                    <li>Computer Science Practice</li>
                    <li> Computer System Fundamentals </li>
                    <li>Web Design and Development</li>



                  </ul>
                </div>

              </div>
            </div>

          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <p>Education in College</p>

              </h1>
            </div>

            <div className="nine columns main-col"  >
              <h2 style={{ fontSize: "2.3rem" }}>Royal College Colombo 07 <br></br>Central College Piliyandala</h2>
              <h1>  </h1>
              <p style={{ fontSize: "1.8rem" }}>G.C.E. Advanced Level
                2018 (2nd attempt) </p>
              <ul style={{ listStyleType: "square" }}>
                <li>Combined Mathematics</li>
                <li> Physics </li>
                <li>Chemistry</li>

              </ul>

              <hr />
              <p style={{ fontSize: "1.8rem" }}>G.C.E. Advanced Level
                2017 (1st attempt)</p>
              <ul style={{ listStyleType: "square" }}>
                <li>Combined Mathematics</li>
                <li> Physics </li>
                <li>Chemistry</li>

              </ul>

              <hr />
              <p style={{ fontSize: "1.8rem" }}>G.C.E. Odinary Level
                2014 (1st attempt)</p>
              <p>GRADES: 5A | 2B | 2C </p>

            </div>
          </div>
        </Slide>

        <Slide left duration={1300}>
          <div className="row skill">
            <div className="three columns header-col">
              <h1>
                <p>Skills</p>
              </h1>
            </div>

            <div className="nine columns main-col">
              <p>{skillmessage}</p>

              <div className="bars">
                <ul className="skills">{skills}</ul>
              </div>
            </div>
          </div>

        </Slide>

        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <p>Familiar with</p>

              </h1>
            </div>

            <div className="nine columns main-col">


              <ul>
                <li><img src={tickSign} style={{ width: "2.1rem" }} />  IntelliJ IDEA</li>
                <li><img src={tickSign} style={{ width: "2.1rem" }} />  Pycharm</li>
                <li><img src={tickSign} style={{ width: "2.1rem" }} />  NetBeans</li>
                <li><img src={tickSign} style={{ width: "2.1rem" }} />  Visual Studio Code</li>
                <li><img src={tickSign} style={{ width: "2.1rem" }} />  Notepad++</li>
              </ul>

            </div>
          </div>
        </Slide>
        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <p>Interests</p>

              </h1>
            </div>

            <div className="nine columns main-col">
              <ul>
                <li><img src={heartSign} style={{ width: "1.5rem" }} />  Proven leading skills to work coordinately</li>
                <li><img src={heartSign} style={{ width: "1.5rem" }} />  Android application Development</li>
                <li><img src={heartSign} style={{ width: "1.5rem" }} />  Cyber security</li>
              </ul>


            </div>
          </div>
        </Slide>



        <Slide left duration={1300}>
          <div className="row work">
            <div className="three columns header-col">
              <h1>
                <p>Personal Skills</p>

              </h1>
            </div>

            <div className="nine columns main-col">

              <ul>
                <li><img src={PlusSign} style={{ width: "2rem" }} />  Ability to work in a team or independently</li>
                <li><img src={PlusSign} style={{ width: "2rem" }} />  Time management and Teamwork m,and Communication skills</li>
                <li><img src={PlusSign} style={{ width: "2rem" }} />  Ability to complete a task within a given period of time</li>
                <li><img src={PlusSign} style={{ width: "2rem" }} />  Ability to work under pressure</li>
                <li><img src={PlusSign} style={{ width: "2rem" }} />  Ability to take responsibilities</li>
                <li><img src={PlusSign} style={{ width: "2rem" }} />  Proven leading skills to work coordinately</li>
              </ul>
            </div>
          </div>
        </Slide>
      </section>
    );
  }
}
export default Resume;