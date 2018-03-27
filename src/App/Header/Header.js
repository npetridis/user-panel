import React from 'react';

import Navbar from 'react-bootstrap/lib/Navbar';
import Nav from 'react-bootstrap/lib/Nav';
import NavItem from 'react-bootstrap/lib/NavItem';

const Header = () => (
  <Navbar fixedTop collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <a href="#brand">Users Panel</a>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>
        <NavItem active eventKey={1} href="#">
          All Users
        </NavItem>
        <NavItem hidden eventKey={2} href="#">
          Link
        </NavItem>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;