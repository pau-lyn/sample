import { Row, Col } from "react-bootstrap";
import HtmlIcon from "../assets/Icons/techstack/html";
import CssIcon from "../assets/Icons/techstack/css";
import SassIcon from "../assets/Icons/techstack/sass";
import BootstrapIcon from "../assets/Icons/techstack/bootstrap";
import JavascriptIcon from "../assets/Icons/techstack/javascript";
import ReactIcon from "../assets/Icons/techstack/react";
import PhpIcon from "../assets/Icons/techstack/php";
import FigmaIcon from "../assets/Icons/techstack/figma";
import MysqlIcon from "../assets/Icons/mysql-icon";
import "./styles.scss";

const About = () => {
  return (
    <div className="about text-center">
      <h1>About Me</h1>
      <p>
        An IT professional from the Polytechnic University of the Philippines
        with hands-on experience in system design, web development, and database
        management. Skilled in HTML, CSS, JavaScript, PHP, and MySQL, with a
        focus on enhancing user experiences and solving real-world problems.
      </p>
      <div>
        <h3>Tech Stack</h3>
        <div>
          <Row>
            <Col className="tech-icon">
              <HtmlIcon color="#222831" />
              <span className="tooltip-text">HTML5</span>
            </Col>
            <Col className="tech-icon">
              <CssIcon color="#222831" />
              <span className="tooltip-text">CSS3</span>
            </Col>
            <Col className="tech-icon">
              <SassIcon color="#222831" />
              <span className="tooltip-text">Sass</span>
            </Col>
            <Col className="tech-icon">
              <BootstrapIcon color="#222831" />
              <span className="tooltip-text">Bootstrap</span>
            </Col>
          </Row>
          <Row>
            <Col className="tech-icon">
              <JavascriptIcon color="#222831" />
              <span className="tooltip-text">JavaScript</span>
            </Col>
            <Col className="tech-icon">
              <ReactIcon color="#222831" />
              <span className="tooltip-text">React</span>
            </Col>
            <Col className="tech-icon">
              <PhpIcon color="#222831" />
              <span className="tooltip-text">PHP</span>
            </Col>
            <Col className="tech-icon">
              <MysqlIcon color="#222831" />
              <span className="tooltip-text">MySQL</span>
            </Col>
          </Row>
          <Row>
            <Col xs={3} className="tech-icon">
              <FigmaIcon color="#222831" />
              <span className="tooltip-text">Figma</span>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default About;
