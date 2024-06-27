// Sidebar.js
import { Nav } from "react-bootstrap";
import HomeIcon from "./assets/Icons/home";
import AboutIcon from "./assets/Icons/info";
import ContactIcon from "./assets/Icons/contact";
import PortfolioIcon from "./assets/Icons/portfolio";
import MyLogo from "./assets/images/MyLogo.png";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="top">
        <img src={MyLogo} alt="MyLogo" className="logo" /> <span>PON</span>
      </div>
      <Nav className="flex-column">
        <Nav.Link href="#home">
          <HomeIcon color="#EEEEEE" /> <span>Home</span>
        </Nav.Link>
        <Nav.Link href="#about">
          <AboutIcon color="#EEEEEE" /> <span>About</span>
        </Nav.Link>
        <Nav.Link href="#portfolio">
          <PortfolioIcon color="#EEEEEE" /> <span>Portfolio</span>
        </Nav.Link>
        <Nav.Link href="#contact">
          <ContactIcon color="#EEEEEE" /> <span>Contact</span>
        </Nav.Link>
      </Nav>
      <div className="sidebar-copyright">
        <span className="copy">
          &copy; {new Date().getFullYear()} <b>PON</b>
        </span>
        <span>. All rights reserved.</span>
      </div>
    </div>
  );
};

export default Sidebar;
