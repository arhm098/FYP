import React, { Component } from "react";
import Fade from "react-reveal";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="row">
          <Fade bottom>
            <div className="twelve columns">
              <ul className="social-links">
                <li key="facebook">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.facebook.com"
                  >
                    <i className="fa fa-facebook"></i>
                  </a>
                </li>
                <li key="twitter">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.twitter.com"
                  >
                    <i className="fa fa-twitter"></i>
                  </a>
                </li>
                <li key="linkedin">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.linkedin.com"
                  >
                    <i className="fa fa-linkedin"></i>
                  </a>
                </li>
                <li key="instagram">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://www.instagram.com"
                  >
                    <i className="fa fa-instagram"></i>
                  </a>
                </li>
                <li key="github">
                  <a
                    rel="noreferrer"
                    target="_blank"
                    href="https://github.com/ShaheerRehman?tab=repositories"
                  >
                    <i className="fa fa-github"></i>
                  </a>
                </li>
              </ul>

              <ul className="copyright">
                <li>&copy; Copyright 2022 Happiness Index</li>
              </ul>
            </div>
          </Fade>

          <div id="go-top">
            <a className="smoothscroll" title="Back to Top" href="#home">
              <i className="icon-up-open"></i>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
