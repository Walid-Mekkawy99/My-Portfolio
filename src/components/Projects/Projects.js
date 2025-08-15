import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Mekkawy from "../../Assets/Projects/Mekkawy Furniture.png";
import Calendar from "../../Assets/Projects/Calendar App.png";
import editor from "../../Assets/Projects/tailwind-freshcart-template.jpg";
import chatify from "../../Assets/Projects/Eduxa.png";
import Weather from "../../Assets/Projects/Weather App img.png";
import Calculator from "../../Assets/Projects/Calculator.png";
import ToDo from "../../Assets/Projects/To-Do List.png";
import bitsOfCode from "../../Assets/Projects/eduxa dash board.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Eduxa Portal"
              description="Working on developing and monitoring a website for Sinbad Company called “Eduxa” to display and reserve programs and courses at institutes and universities that have a partnership with Sinbad Company."
              demoLink="https://eduxa.com/en"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Eduxa Dashboard"
              description="Through the dashboard, the admin can enter and manage data and control the display on the main site."
              demoLink="https://dashboard.eduxa.com/home"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="freshcart"
              description="FreshCart is a beautifully designed, expertly crafted components UI kit for building a high-quality website and web apps using web technologies — HTML, TailwindCSS, and JavaScript — with integrations of the world’s most popular Bootstrap Javascript Plugins."
              // ghLink="https://github.com/Walid-Mekkawy/freshcart-E-commerce-"
              demoLink="https://fresh-cart-two-beige.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Mekkawy}
              isBlog={false}
              title="Mekkawy Furniture"
              description="E-Commerce
Website
(In
Progress),
Next.js,
React.js,
Tailwind
CSS,
TypeScript
Personal project for selling custom-made furniture and upholstery products online. Developing responsive product listings, shopping cart, and multi-language support."
              // ghLink="https://github.com/Walid-Mekkawy/freshcart-E-commerce-"
              demoLink="https://mekkawy-furniture.vercel.app/en"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Weather}
              isBlog={false}
              title="Weather App"
              description="Next.js,
React.js,
Tailwind
CSS,
RESTful
APIs
Created a weather application with city search, favorites management, and real-time weather updates via OpenWeather API. Implemented persistent storage for user-selected favorite locations."
              // ghLink="https://github.com/Walid-Mekkawy/freshcart-E-commerce-"
              demoLink="https://weather-app-tau-nine-33.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Calendar}
              isBlog={false}
              title="Calendar App"
              description="Next.js,
React.js,
Tailwind
CSS
Developing a calendar tool for organizing daily and weekly tasks. Working on task creation, categorization, and responsive UI for mobile and
desktop."
              // ghLink="https://github.com/Walid-Mekkawy/freshcart-E-commerce-"
              demoLink="https://calendar-psi-lake.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Calculator}
              isBlog={false}
              title="Calculator"
              description="A simple Calculator App built with HTML, CSS, and JavaScript. It also has a Dark Mode.

"
              // ghLink="https://github.com/Walid-Mekkawy/freshcart-E-commerce-"
              demoLink="https://calculator-cyan-omega.vercel.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ToDo}
              isBlog={false}
              title="To-Do-List"
              description="This is a simple To-Do List application that helps users manage their daily tasks efficiently. Users can add, delete, and mark tasks as completed.

"
              // ghLink="https://github.com/Walid-Mekkawy/freshcart-E-commerce-"
              demoLink="https://to-do-list-tau-six-85.vercel.app/"
            />
          </Col>

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Plant AI"
              description="Used the plant disease dataset from Kaggle and trained a image classifer model using 'PyTorch' framework using CNN and Transfer Learning with 38 classes of various plant leaves. The model was successfully able to detect diseased and healthy leaves of 14 unique plants. I was able to achieve an accuracy of 98% by using Resnet34 pretrained model."
              ghLink="https://github.com/soumyajit4419/Plant_AI"
              demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Ai For Social Good"
              description="Using 'Natural Launguage Processing' for the detection of suicide-related posts and user's suicide ideation in cyberspace  and thus helping in sucide prevention."
              ghLink="https://github.com/soumyajit4419/AI_For_Social_Good"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col> */}

          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Trained a CNN classifier using 'FER-2013 dataset' with Keras and tensorflow backened. The classifier sucessfully predicted the various types of emotions of human. And the highest accuracy obtained with the model was 60.1%.
              Then used Open-CV to detect the face in an image and then pass the face to the classifer to predict the emotion of a person."
              ghLink="https://github.com/soumyajit4419/Face_And_Emotion_Detection"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col> */}
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
