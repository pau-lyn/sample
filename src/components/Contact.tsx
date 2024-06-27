import React, { useState } from "react";
import SendIcon from "../assets/Icons/send";
import ArrowDownIcon from "../assets/Icons/ArrowDown";
import { Row, Col } from "react-bootstrap";
import Contacts from "./ContactIcon";
import "./styles.scss";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to your server)
  };

  return (
    <div className="contact">
      <h1>Contact Me</h1>
      <Row>
        <Col
          lg={4}
          className="d-flex flex-column justify-content-center align-items-center"
        >
          <div className="d-flex flex-column text-center align-items-center">
            <p>You can email me here</p> <ArrowDownIcon color="#222831" />
          </div>
          <button className="email-btn w-100">
            <a href="mailto:pbagagunio@gmail.com?">
              <SendIcon color="#222831" /> Send Email
            </a>
          </button>
          <div className="d-flex flex-column text-center align-items-center mt-5">
            <p>
              Additional Contacts <Contacts />
            </p>
          </div>
        </Col>
        <Col
          lg={2}
          className="d-flex justify-content-center align-items-center"
        >
          <p className="line-text">Or</p>
        </Col>
        <Col lg={6} className="">
          <form className="d-flex flex-column" onSubmit={handleSubmit}>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Message:
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
              />
            </label>
            <button type="submit">Submit</button>
          </form>
        </Col>
      </Row>
    </div>
  );
};

export default Contact;
