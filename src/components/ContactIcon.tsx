import { Row, Col } from "react-bootstrap";
import GithubIcon from "../assets/Icons/github";
import LinkedInIcon from "../assets/Icons/linkedin";
import FacebookIcon from "../assets/Icons/facebook";
import InstagramIcon from "../assets/Icons/instagram";

const ContactIcon: React.FC = () => {
  return (
    <Row className="icons my-5">
      <Col className="social-icons d-flex justify-content-center">
        <a href="https://github.com/pau-lyn" target="_blank">
          <GithubIcon color="#222831" />
        </a>
        <a
          href="https://www.linkedin.com/in/paula-lyn-bagagunio/"
          target="_blank"
        >
          <LinkedInIcon color="#222831" />
        </a>
        <a href="https://web.facebook.com/paulalyn.bagagunio" target="_blank">
          <FacebookIcon color="#222831" />
        </a>
        <a
          href="https://instagram.com/_pnyng3?igshid=MzNlNGNkZWQ4Mg=="
          target="_blank"
        >
          <InstagramIcon color="#222831" />
        </a>
      </Col>
    </Row>
  );
};

export default ContactIcon;
