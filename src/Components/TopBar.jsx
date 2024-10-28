// src/Components/TopBar.js
import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const TopBar = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" fixed="top" className="shadow">
      <Container fluid>
        {/* Left side - Main Account */}
        <Navbar.Brand href="#mainAccount" className="text-light me-4">
          Main Account
        </Navbar.Brand>

        {/* Navigation Links in the Center */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="custom-nav-links me-auto"> {/* Centered navigation links */}
            <Nav.Link href="#trade" className="text-light">Trade</Nav.Link>
            <Nav.Link href="#strategies" className="text-light">Strategies</Nav.Link>
            <Nav.Link href="#life" className="text-light">Life</Nav.Link>
            <Nav.Link href="#funds" className="text-light">Funds</Nav.Link>
            <Nav.Link href="#staking" className="text-light">Staking</Nav.Link>
            <Nav.Link href="#history" className="text-light">History</Nav.Link>
            <Nav.Link href="#rfq" className="text-light">RFQ</Nav.Link>
          </Nav>

          {/* Right side - Metrics Section */}
          <Nav className="metrics-section">
            <Nav.Item className="text-light me-4">Account Health: 100%</Nav.Item>
            <Nav.Item className="text-light me-4">Balance: $20,000</Nav.Item>
            <Nav.Item className="text-light me-4">Risk Level: Low</Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default TopBar;
