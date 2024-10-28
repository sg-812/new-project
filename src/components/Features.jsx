import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Slider from "./Slider";

const Features = () => {
  return (
    <div>
      <Slider />
      <section className="py-4">
        <Container>
          <Row>
            <Col className="bg-info mb-2" sm={1} md={6} xl={4}>
              <p>1111111</p>
            </Col>
            <Col className="bg-success mb-2" sm={1} md={6} xl={4}>
              <p>222222222</p>
            </Col>
            <Col className="bg-warning" sm={1} md={6} xl={4}>
              <p>33333333333</p>
            </Col>
            <Col className="bg-danger" sm={1} md={6} xl={4}>
              <p>44444444444</p>
            </Col>
            <Col className="bg-secondary" sm={1} md={6} xl={4}>
              <p>55555555555555</p>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default Features;
