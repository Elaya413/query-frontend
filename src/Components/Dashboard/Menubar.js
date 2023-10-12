import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

import { Link } from 'react-router-dom';
function Menubar({title}) {
   
  return <>
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">{title}</Navbar.Brand>
          <Nav className="me-auto">
            <Link to={'/dashboard'} className='nav-link'></Link>
           
          </Nav>
        </Container>
      </Navbar>
      </>
}

export default Menubar