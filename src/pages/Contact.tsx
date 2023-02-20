import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";

function Contact() {
  return (
    <Container className="my-5">
      <Row>
        <Col md={6}>
          <h2>Contact Us</h2>
          <p className="text-muted mb-5">
            Have a question or comment? Send us a message and we'll get back to
            you as soon as possible.
          </p>
          <Form>
            <Form.Group className="pt-2" controlId='formBasicName'>
              
              <Form.Control type='text' placeholder='Name' />
            </Form.Group>

            <Form.Group className="pt-2" controlId='formBasicEmail'>
              
              <Form.Control type='email' placeholder='Email' />
            </Form.Group>

            <Form.Group className="pt-2" controlId='formBasicMessage'>
              
              <Form.Control
                as='textarea'
                rows={5}
                placeholder='Message'
              />
            </Form.Group>

            <Button className="mt-2" variant='primary' type='submit'>
              Submit
            </Button>
          </Form>
        </Col>
        <Col md={6} className="border-left pl-5">
          <h2>Our Location</h2>
          <p className="text-muted mb-5">
            Visit us in person at our store:
          </p>
          <p className="text-muted mb-1">1234 Sneaker Street</p>
          <p className="text-muted mb-5">Stockholm, Sweden</p>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d20311.52903903123!2d18.062252277985785!3d59.32645831310183!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x465f7db94f049a5d%3A0x2919bfb77e064038!2sStockholm%2C%20Sweden!5e0!3m2!1sen!2sus!4v1645441123654!5m2!1sen!2sus'
            width='100%'
            height='300'
            style={{ border: 0, borderRadius: "10px" }}
            allowFullScreen={true}
            loading='lazy'
          ></iframe>
        </Col>
      </Row>
    </Container>
  );
}

export default Contact;
