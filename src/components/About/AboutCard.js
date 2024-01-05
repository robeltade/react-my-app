import React from "react";
import Card from "react-bootstrap/Card";
//import { ImPointRight } from "react-icons/im";
import { TiChevronRightOutline } from "react-icons/ti";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          
          <p style={{ textAlign: "justify" }}>
            <div>I'M <span className="purple">Robel Tadesse</span></div>
                I started programming in early 2021, when I joined Software Engineering department at AMU.
             <br/>

                I first started with <span className="purple">C++</span> then  worked on web development for a while.
                And my favorite coding language has been <span className="purple">Javascript</span> and I'm conversant with <span className="purple">Python, Java</span> and, sometimes <span className="purple">C</span>
                 <div>
                 I enjoy tackling challenges and finding creative solutions. I am a lifelong learner, constantly expanding my knowledge and staying up-to-date with the latest industry trends.
                 <br/> Collaboration is at the heart of my approach.
                 </div>
                <br/>
                <div>Apart from coding, some other activities that I love to do!</div>
          </p>
          <ul>
            <li className="about-activity">
            <TiChevronRightOutline /> Playing Games
            </li>
            <li className="about-activity">
            <TiChevronRightOutline /> Reading Books
            </li>
            <li className="about-activity">
            <TiChevronRightOutline /> philosophy and Politics
            </li>
            <li className="about-activity">
            <TiChevronRightOutline /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "The only absolute perfection is Here when Now!"{" "}
          </p>
          <footer className="blockquote-footer">robeltade</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
