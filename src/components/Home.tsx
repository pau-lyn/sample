import { Row, Col } from "react-bootstrap";
import logo from "../assets/images/MyLogo.png";
import useTypedEffect from "./useTypedEffect";
import Contacts from "./ContactIcon";

const Home: React.FC = () => {
  const typedText = useTypedEffect(
    ["Web Developer", "Software Tester", "Digital Artist"],
    40,
    50
  );
  const glitterArray = new Array(50).fill(0);

  return (
    <Row className="home h-100">
      {glitterArray.map((_, index) => (
        <div
          key={index}
          className="glitter"
          style={{ "--glitter-index": index } as React.CSSProperties}
        ></div>
      ))}
      <Col
        lg={4}
        sm={12}
        className="d-flex align-items-center justify-content-center"
      >
        <img src={logo} alt="" width={"75%"} />
      </Col>
      <Col
        lg={8}
        sm={12}
        className="d-flex align-items-center justify-content-center"
      >
        <div>
          <Row className="mb-5 text-center">
            <Col>
              <h3>Hi! I am,</h3>
              <h1>Paula Lyn Bagagunio</h1>
              <h4>{typedText}</h4>
            </Col>
          </Row>
          <Contacts />
        </div>
      </Col>
    </Row>
  );
};

export default Home;
