import React from 'react'

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap"

const Partners = () => {

  return (
    <div>
      <div div className="section text-center">
        <Container>
          <Row className="row-grid justify-content-center">
            <Col className="text-center" lg="8">
              <div className="text-center">
                <h2 className="title">
                  Our Partners
                </h2>
                <Row className="justify-content-center">
                  <Col lg="2" xs="4">
                    <a
                      href="https://www.creative-tim.com/product/argon-design-system?ref=adsr-landing-page"
                      id="tooltip255035741"
                      target="_blank"
                    >
                      <img
                        alt="..."
                        className="img-fluid"
                        src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/bootstrap.jpg"
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip255035741">
                      Bootstrap 4 - Most popular front-end component library
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="2" xs="4">
                    <a
                      href="https://www.creative-tim.com/product/vue-argon-design-system?ref=adsr-landing-page"
                      id="tooltip265846671"
                      target="_blank"
                    >
                      <img
                        alt="..."
                        className="img-fluid"
                        src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/vue.jpg"
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip265846671">
                      Vue.js - The progressive javascript framework
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="2" xs="4">
                    <a
                      href="https://www.creative-tim.com/product/argon-design-system-angular?ref=adsr-landing-page"
                      id="tooltip233150499"
                      target="_blank"
                    >
                      <img
                        alt="..."
                        className="img-fluid"
                        src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/angular.jpg"
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip233150499">
                      Angular - One framework. Mobile & Desktop
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="2" xs="4">
                    <a
                      href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                      id="tooltip308866163"
                      target="_blank"
                    >
                      <img
                        alt="..."
                        className="img-fluid"
                        src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/react.jpg"
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip308866163">
                      React - A JavaScript library for building user
                      interfaces
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="2" xs="4">
                    <a
                      href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                      id="tooltip76119384"
                      target="_blank"
                    >
                      <img
                        alt="..."
                        className="img-fluid"
                        src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/sketch.jpg"
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip76119384">
                      Sketch - Digital design toolkit
                    </UncontrolledTooltip>
                  </Col>
                  <Col lg="2" xs="4">
                    <a
                      href="https://www.creative-tim.com/product/argon-design-system-react?ref=adsr-landing-page"
                      id="tooltip646643508"
                      target="_blank"
                    >
                      <img
                        alt="..."
                        className="img-fluid"
                        src="https://s3.amazonaws.com/creativetim_bucket/tim_static_images/presentation-page/ps.jpg"
                      />
                    </a>
                    <UncontrolledTooltip delay={0} target="tooltip646643508">
                      Adobe Photoshop - Software for digital images
                      manipulation
                    </UncontrolledTooltip>
                  </Col>
                </Row>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Partners;
