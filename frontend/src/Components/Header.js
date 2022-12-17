import React, { Component } from "react";
import ParticlesBg from "particles-bg";
import Fade from "react-reveal";
import Typography from "@mui/material/Typography";
import NameForm from "./NameForm";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <header id="home">
        <ParticlesBg type="lines" bg={true} />

        <nav id="nav-wrap">
          <a className="mobile-btn" href="#nav-wrap" title="Show navigation">
            Show navigation
          </a>
          <a className="mobile-btn" href="#home" title="Hide navigation">
            Hide navigation
          </a>

          <ul id="nav" className="nav">
            <li className="current">
              <a className="smoothscroll" href="#home">
                Home
              </a>
            </li>

            <li>
              <a className="smoothscroll" href="#about">
                About
              </a>
            </li>
          </ul>
        </nav>

        <div className="row banner">
          <div className="banner-text">
            <Fade bottom>
              <h1 className="responsive-headline">Hapiness Index</h1>
            </Fade>
            <Fade bottom>
              <h2 className="responsive-headline">
                What is your Mental Wellbeing Score?
              </h2>
            </Fade>
            <Fade bottom duration={1200}>
              <Typography variant="h6" color="white">
                Take the MHQ to find out. Its anonymous and takes 15 minutes or
                less.
              </Typography>
            </Fade>
            <Fade bottom duration={2000}>
              <ul className="social">
                <Link className="button btn project-btn" to="/name">
                  <i className="fa fa-book"></i>Start
                </Link>
                {/* <a href="" className="button btn project-btn">
                  <i className="fa fa-book"></i>Start
                </a> */}
                {/* <a href="" className="button btn github-btn">
                  <i className="fa fa-github"></i>Github
                </a> */}
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
