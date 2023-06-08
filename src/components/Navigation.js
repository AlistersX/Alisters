import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

function Navigation() {
  return (
    <Navbar sticky='top' bg='dark' variant='dark' className="mb-4">
      <Container>
        <Navbar.Brand>
          Alisters
        </Navbar.Brand>
        <Nav className='me-auto'>
          <Nav.Link as={NavLink} to="/">Search Movies</Nav.Link>
          <Nav.Link as={NavLink} to="/favorites">Watchlist</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export { Navigation };