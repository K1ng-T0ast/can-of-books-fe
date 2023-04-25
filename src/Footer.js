import React from 'react';
import { Navbar } from 'react-bootstrap'

class Footer extends React.Component {
  render() {
    return (
      <Navbar  style={{ display: 'flex', justifyContent: 'center' }} collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>Kyle White & Josh Coffey | &copy; 2023</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
