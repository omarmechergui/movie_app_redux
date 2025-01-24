import React, { useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Addmovies from './Addmovies';

function Header() {
  const[show,setshow]=useState(false)

  return (
    <div>
        


    <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="/movielist">movies app</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/Movielist">Home</Nav.Link>
            <Nav.Link href="#link">Movies list</Nav.Link>
            <Nav.Link href="#link">History</Nav.Link>
            <Nav.Link onClick={() => setshow(!show)}>Admin</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    {show? <Addmovies /> : null}

    </div>
  )
}

export default Header