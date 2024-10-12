import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Footer() {
  let date = new Date();
  let year = date.getFullYear();
  return (
    <Container fluid className="footer" style={{ padding: "20px 0" }}>
      <Row>
        <Col md="4"></Col> {/* Empty column for spacing */}
        <Col md="4" className="footer-copywright text-center">
          <h3>{year} Rishesh Gangwar. All rights reserved.</h3>
        </Col>
        <Col md="4" className="footer-body text-md-right">
          <ul className="footer-icons" style={{ listStyleType: "none", padding: 0 }}>
            <li className="social-icons" style={{ display: "inline-block", marginRight: "15px" }}>
              <a
                href="https://github.com/RisheshG"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
            </li>
            <li className="social-icons" style={{ display: "inline-block", marginRight: "15px" }}>
              <a
                href="https://x.com/RisheshG7"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <AiOutlineTwitter />
              </a>
            </li>
            <li className="social-icons" style={{ display: "inline-block", marginRight: "15px" }}>
              <a
                href="https://www.linkedin.com/in/rishesh-gangwar-bb7026241/"
                style={{ color: "white" }}
                target="_blank" 
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </li>
          </ul>
        </Col>
      </Row>
    </Container>
  );
}

export default Footer;
