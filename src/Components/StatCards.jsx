// StatsCards.js
import React from 'react';
import { Card, Row, Col } from 'react-bootstrap';

const StatCards = () => (
    <Row className="my-3">
   
    <Col md={5}>
      <Card className="bg-dark text-light">
        <Card.Body>
          <Card.Title>Leader Board</Card.Title>
          <Card.Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lacinia odio vitae vestibulum vestibulum. Cras venenatis euismod malesuada.    
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={3}>
      <Card className="bg-dark text-light">
        <Card.Body>
          <Card.Title>MMPEPE Profits</Card.Title>
          <Card.Text>$10,000,000</Card.Text>
        </Card.Body>
      </Card>
    </Col>
    <Col md={3}>
      <Card className="bg-dark text-light">
        <Card.Body>
          <Card.Title>DOGE Profits</Card.Title>
          <Card.Text>$10,000,000</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  </Row>
);

export default StatCards;
