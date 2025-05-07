import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Walid Mekkawy </span>
            from <span className="purple"> Cairo, Egypt.</span>
            <br />
            I am currently employed as a software developer at Eduxa.
            <br />
            I got my Bachelor's degree in Mathematics and Computing from the Faculty of Science, Helwan University in 2021.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> play football
            </li>
            <li className="about-activity">
              <ImPointRight /> View car news
            </li>
            <li className="about-activity">
              <ImPointRight /> Try new programming projects
            </li>
          </ul>

          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
