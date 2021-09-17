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
    // const resumeDownload = this.props.data.resumedownload;

    // let cvImage = "images/portfolio/cv.jpg";
 
    return (
      <section id="about">
        <Fade duration={1000}>
          <div className="row">
            <div className="three columns">
              <img
                className="profile-pic"
                src={profilepic}
                alt="Nordic Giant Profile Pic"
              />
            </div>
            <div className="nine columns main-col">
              <h2>About Me</h2>

              <p>{bio}</p>
              <div className="row">
                <div className="columns contact-details">
                  <h2>Contact Details</h2>
                  <p className="address">
                    <span>{name}</span>
                    <br />
                    <span>
                      {street}
                      <br />
                      {city} {state}, {zip}
                    </span>
                    <br />
                    <span>{phone}</span>
                    <br />
                    <span>{email}</span>
                  </p>
                </div>
                
                <div className="columns download">
                  <p>
                  <div  className="columns portfolio-item">
                  <div className="item-wrap">
            <div style={{ textAlign: "center" }}> 
            <a href="https://onedrive.live.com/embed?cid=3F7AFC818D31A886&resid=3F7AFC818D31A886%2153572&authkey=AGznMJ5jqzAy_EY&em=2" target="_blank" rel="noreferrer">
              <h4>Resume</h4></a></div>
              <iframe title="iframe" src="https://onedrive.live.com/embed?resid=3F7AFC818D31A886%2153572&amp;authkey=%21AGznMJ5jqzAy_EY&amp;em=2&amp;wdStartOn=1" width="350px" height="160px" frameborder="3px">This is an embedded <a target="_blank" rel ="noreferrer" href="https://office.com">Microsoft Office</a> document, powered by <a target="_blank" rel = "noreferrer" href="https://office.com/webapps">Office</a>.</iframe>

            </div>
            </div>
                  
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
