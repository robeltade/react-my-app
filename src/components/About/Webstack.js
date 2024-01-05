import React from "react";
import { Col, Row } from "react-bootstrap";
import { BiLogoTypescript } from "react-icons/bi";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiHtml5,
    DiMysql,
    DiCss3,
    DiJava,
  } from "react-icons/di";
  import {
    SiRedis,
    SiFirebase,
    SiNextdotjs,
    SiTypescript,
    SiPostgresql,
    SiCplusplus,
    SiGnubash,
    SiLinux,
    SiMysql,
  } from "react-icons/si";

function Webstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
     <Col xs={4} md={2} className="tech-icons">
        <DiHtml5 />
      </Col>
     <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
      </Col>
     <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
      </Col>
    <Col xs={4} md={2} className="tech-icons">
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiTypescript />
      </Col>
      
      
      <Col xs={4} md={2} className="tech-icons">
        <SiMysql />
      </Col>
      
    
  </Row>
  )
}

export default Webstack