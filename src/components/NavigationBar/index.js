import React from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, Form, FormControl } from 'react-bootstrap';
import { StyledButton } from './styles';

function NavigationBar() {
  return (
    <Navbar bg="light" expand="lg">
      <Link to="/">
        <Navbar.Brand>Star Wars</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/">Home</Link>
        </Nav>
        <Form inline>
          <FormControl type="text" placeholder="Search" className="mr-sm-2" />
          <StyledButton variant="outline-success">Search</StyledButton>
          <StyledButton variant="outline-danger">Logout</StyledButton>
        </Form>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavigationBar;
