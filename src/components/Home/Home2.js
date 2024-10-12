import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myNewImage from "../../Assets/myImage.jpg"; 
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> TELL YOU A STORY </span>
            </h1>
            <p className="home-about-body">
              From the moment I wrote my first line of code, I knew I had discovered something exciting. 
              <br />
              <br />I've explored the vast worlds of
              <i>
                <b className="purple"> C, C++, Javascript, and Python </b>
              </i>
              and continue to push my limits every day.
              <br />
              <br />
              My passion lies in <i><b className="purple">Web Development</b></i>, where creativity meets logic.
              <br />
              <br />
              Whether it’s building sleek, dynamic websites or crafting the logic behind the scenes with <b className="purple">Node.js</b>, 
              I love leveraging <i><b className="purple">modern JavaScript libraries</b></i> and frameworks like <b className="purple">React.js</b> to bring ideas to life.
              <br />
              <br />
              Every new project is a chance to learn, grow, and create something amazing.
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img
                src={myNewImage}
                alt="avatar"
                className="img-fluid"
                style={{
                  width: "300px",           
                  height: "300px",          
                  borderRadius: "50%",      
                  objectFit: "cover",       
                }}
              />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ONLINE</h1>
            <p>
              Let's <span className="purple">connect</span> and build something awesome together!
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/RisheshG"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://x.com/RisheshG7"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/rishesh-gangwar-bb7026241/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Home2;
