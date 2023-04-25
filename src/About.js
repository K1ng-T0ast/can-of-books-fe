import { Component } from "react";
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

class Profile extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Kyle White</Card.Title>
                <Card.Text>
                  Kyle is a developer currently using React and MongoDB to create
                  customized full-stack applications.
                </Card.Text>
                <Button variant="primary" style={{ backgroundColor: 'black', color: 'white' }}>
                  LinkedIn
                </Button>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Josh Coffey</Card.Title>
                <Card.Text>
                  Josh is a developer skilled in React, MongoDB, and Node.JS
                </Card.Text>
                <Button variant="primary" style={{ backgroundColor: 'black', color: 'white' }}>
                  LinkedIn
                </Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Profile;

