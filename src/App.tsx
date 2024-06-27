// App.js
import Home from "./components/Home";
import About from "./components/About";
import Portfolio from "./components/Portfolio";
import Contact from "./components/Contact";
import Sidebar from "./Sidebar";
import { Container } from "react-bootstrap";
import "./App.css";
import "./scrollbar.css";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <div className="main-content">
        <Container>
          <section id="home">
            <Home />
          </section>
          <section id="about">
            <About />
          </section>
          <section id="portfolio">
            <Portfolio />
          </section>
          <section id="contact">
            <Contact />
          </section>
        </Container>
      </div>
    </div>
  );
};

export default App;
