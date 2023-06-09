import { Component } from "react";
import { Card, Container, Row, Col, Image } from 'react-bootstrap';


class Profile extends Component {
  render() {
    return (
      <Container>
        <Row>
          <Col sm={12} md={6}>
            <Card style={{ width: '18rem' }}>
              <Card.Img variant="top" src="https://media.licdn.com/dms/image/C5603AQEGAyIexLQbRg/profile-displayphoto-shrink_800_800/0/1593557630244?e=1687996800&v=beta&t=7s6jx6pn_R9rPFTs31xXs35iPOfIUts-cdVwZBKbiZo" />
              <Card.Body>
                <Card.Title>Kyle White</Card.Title>
                <Card.Text>
                  Kyle is a developer currently using React and MongoDB to create
                  customized full-stack applications.
                </Card.Text>
                <a href="https://www.linkedin.com/in/kylewhiteseattle/">
                  <Image src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Linkedin_glyph_svg-256.png" fluid style={{ height: '30px'}} />
              </a>
              <a href="https://github.com/K1ng-T0ast">
                <Image src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-256.png" fluid style={{ height: '30px', marginLeft: '10px'}}></Image>
              </a>
            </Card.Body>
          </Card>
        </Col>
        <Col sm={12} md={6}>
          <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src="https://media.licdn.com/dms/image/D4E03AQG6Zf9eiYM9kQ/profile-displayphoto-shrink_800_800/0/1677264412510?e=1687996800&v=beta&t=X9QwpnXUtzfBndkWlhISDqL3bVst7lPVKTxuk-29SfM" />
            <Card.Body>
              <Card.Title>Josh Coffey</Card.Title>
              <Card.Text>
                Josh is a developer skilled in React, MongoDB, and Node.JS
              </Card.Text>
              <a href="https://www.linkedin.com/in/joshuacoffey23/">
                <Image src="https://cdn3.iconfinder.com/data/icons/social-media-black-white-2/512/BW_Linkedin_glyph_svg-256.png" fluid style={{ height: '30px'}}></Image>
              </a>
              <a href="https://github.com/Coff23">
                <Image src="https://cdn1.iconfinder.com/data/icons/logotypes/32/github-256.png" fluid style={{ height: '30px', marginLeft: '10px'}}></Image>
              </a>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </Container >
    );
  }
}

export default Profile;

