import React from "react";
import AOS from "aos";

const About = ({ data }) => {
  if (data) {
    var name = data.name;
    var profilepic = "images/" + data.image;
    var bio = data.bio;
    var street = data.address.street;
    var city = data.address.city;
    var state = data.address.state;
    var zip = data.address.zip;
    var phone = data.phone;
    var email = data.email;
    var resumeDownload = data.resumedownload;

    AOS.init({
      duration: 2000,
    });
  }

  return (
    <section id="about">
      <div className="row">
        <div
          className="three columns"
          data-aos="fade-right"
          data-aos-delay="300"
        >
          <img
            className="profile-pic"
            src={profilepic}
            alt="Michael's's Profile Pic"
          />
        </div>
        <div
          className="nine columns main-col"
          data-aos="fade-left"
          data-aos-delay="600"
        >
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
                <a
                  href={resumeDownload}
                  className="button"
                  target="_blank"
                  rel="noreferrer"
                >
                  <i className="fa fa-download"></i>Download Resume
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
