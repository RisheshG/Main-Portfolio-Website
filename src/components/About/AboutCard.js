import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello! I’m <span className="purple">Rishesh Gangwar</span>, hailing from the vibrant city of <span className="purple">Bareilly, India</span>. 
            <br />
            Currently, I’m thriving as a <span className="purple">software developer</span> at <span className="purple">XGrowth</span>, where I get to turn ideas into reality every day.
            <br />
            Proudly holding a B.Tech degree in <span className="purple">Computer Science</span> from the esteemed <span className="purple">NIT Allahabad</span>, I’ve honed my skills to craft innovative solutions.
            <br />
            <br />
            When I’m not coding, you can find me indulging in some of my favorite activities:
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Gaming Adventures
            </li>
            <li className="about-activity">
              <ImPointRight /> Engaging in Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Exploring New Places
            </li>
          </ul>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
