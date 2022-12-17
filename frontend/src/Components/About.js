import React, { Component } from "react";
import Fade from "react-reveal";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";

class About extends Component {
  render() {
    // if (!this.props.data) return null;

    const name = "Happiness Index";
    const city = "Lahore";
    const province = "Punjab";
    const zip = "54782";
    const bio =
      "We, at Happiness Index use state of the art technology to measure your mental wellbeing. We use a combination of AI and ML to measure your mental wellbeing. We also provide you with a personalized plan to improve your mental wellbeing.";
    const phone = "+92 312 795 0074";
    const email = "shaheerr7@gmail.com";

    return (
      <section id="about">
        <Fade duration={1000}>
          <Container>
            <Grid container spacing={12}>
              <Grid item xs={12} sm={12} md={9}>
                <h2>About Us</h2>

                <Typography variant="h6" color="white">
                  {bio}
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={3}>
                <h2>Contact Details</h2>
                <p className="address">
                  <span>{name}</span>

                  <br />
                  <span>{email}</span>
                  <br />
                  <span>{phone}</span>
                  <br />
                  <span>
                    {city} {province}, {zip}
                  </span>
                </p>
              </Grid>
            </Grid>
          </Container>
        </Fade>
      </section>
    );
  }
}

export default About;
