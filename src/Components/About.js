import React, { Component } from "react";
import Fade from "react-reveal";


class About extends Component {
  render() {
    if (!this.props.data) return null;

    const name = this.props.data.name;
    const profilepic = "images/" + this.props.data.image;
    const bio = this.props.data.bio;
    const street = this.props.data.address.street;
    const city = this.props.data.address.city;
    const state = this.props.data.address.state;
    const zip = this.props.data.address.zip;
    const phone = this.props.data.phone;
    const email = this.props.data.email;
    const resumeDownload = this.props.data.resumedownload;

    return (
      <section id="about" style={{ position: "relative" }}>
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                style={{
                  width: "100%",
                  height: "auto",

                }}
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col" style={{ color: "#bbede7" }}>
              <h2>ABOUT ME</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>CONTACTS DETAILS</h2>
                  <p className="address">
                    <span>Full Name :<br></br> Adithya Kalhara Hettiarachchi</span>
                    <br />
                    <hr />
                    <span>
                      Residence :<br></br>
                      5/1/1,
                      Vidyala WataMawatha,<br></br> Piliyandala, Sri Lanka.
                    </span>
                    <br />
                    <hr />
                    <span>Tel Number : <br></br>0779747787</span>
                    <br />
                    <hr />
                    <span>emails : <br></br><a href="adithyakalhara98@gmail.com" >adithyakalhara98@gmail.com</a>  <a href="adithya.2018448@iit.ac.lk" >adithya.2018448@iit.ac.lk</a></span>
                  </p>
                </div>
                <div className="columns download">
                  <p>
                    <a href={resumeDownload} className="button">
                      <i className="fa fa-download"></i>Download Resume
                    </a>
                    {/* <Link to="/files/Adithya Hettiarachchi_CV.pdf" target="_blank" download>Download</Link> */}

                  </p>
                </div>
              </div>
            </div>
          </div>
        </Fade>
      </section>
    );
  }
}

export default About;
