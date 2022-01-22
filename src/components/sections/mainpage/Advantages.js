import React from 'react'

// reactstrap components
import { Button, Container, Row, Col, UncontrolledTooltip } from "reactstrap"

const Advantages = () => {
  return (
    <div>
      <div className="section">
        <Container className="text-center">
          <Row>
            <Col className="ml-auto mr-auto text-center" md="8">
              <h2 className="title">The CloudSpectus Advantage</h2>
              <p className="description">
                Cause if you do, it can be yours for Free. Hit the button below
                and download it. Start a new project or give an old Bootstrap 4
                project a new look.
              </p>
            </Col>
            <Col className="ml-auto mr-auto download-area" md="5">
              <Button
                className="btn-round"
                color="danger"
                href="http://www.creative-tim.com/product/paper-kit-react?ref=pkr-index-page"
                target="_blank"
              >
                Get in touch
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Advantages;
