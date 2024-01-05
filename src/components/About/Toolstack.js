import React from "react";
import { Col, Row } from "react-bootstrap";
import {
DiGit

} from "react-icons/di";
import {
  SiVisualstudiocode,
SiGnubash,
SiLinux,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGnubash />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiLinux />
      </Col>
      
    </Row>
  );
}

export default Toolstack;
