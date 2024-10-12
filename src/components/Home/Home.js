import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Home2 from "./Home2";
import Type from "./Type";

function Home() {
  return (
    <section>
      <Container
        fluid
        className="home-section"
        id="home"
        style={{
          height: "100vh", // Full viewport height
          display: "flex", // Use flexbox
          alignItems: "center", // Center content vertically
          justifyContent: "center", // Center content horizontally
          backgroundColor: "black", // Adjust according to your theme
          color: "white", // Text color
          position: "relative", // Positioning
        }}
      >
        <Particle />
        <Container className="home-content" style={{ textAlign: "left" }}>
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
                Hi There!{" "}
                <span className="wave" role="img" aria-labelledby="wave">
                  👋🏻
                </span>
              </h1>

              <h1 className="heading-name">
                I'M
                <strong className="main-name"> RISHESH GANGWAR</strong>
              </h1>

              <div style={{ padding: 50 }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>

      <div
        className="scroll-down-section"
        style={{
          minHeight: "100vh", 
          paddingTop: 50,
          color: "white",
        }}
      >
        <Home2 />
      </div>
    </section>
  );
}

export default Home;
