import React from 'react'

// reactstrap components
import { Button, Container, Row, Col } from "reactstrap"

const Portfolio = () => {

  return (
    <div>
      <div className="section section-dark text-center">
        <Container>
          <h2 className="title">Our Portfolio</h2>
          <p>Software and solutions designed with love by CloudSpectus</p>
          <Row className="example-page">
            <Col className="text-center" md="6">
              <a href="examples/landing.html" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("../../../assets/img/examples/landing-page.png").default}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="/landing-page"
                target="_blank"
              >
                View Project
              </Button>
            </Col>
            <Col className="text-center" md="6">
              <a href="examples/profile.html" target="_blank">
                <img
                  alt="..."
                  className="img-rounded img-responsive"
                  src={require("../../../assets/img/examples/profile-page.png").default}
                  style={{ width: "100%" }}
                />
              </a>
              <Button
                className="btn-outline-neutral btn-round"
                color="default"
                href="/profile-page"
                target="_blank"
              >
                View Project
              </Button>
            </Col>
          </Row>
        </Container>
      </div>{" "}
    </div>
  );
};

export default Portfolio;
