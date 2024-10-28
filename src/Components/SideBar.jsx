// Sidebar.js
import React from 'react';
import { ListGroup } from 'react-bootstrap';

const Sidebar = () => (
    <div className="sidebar bg-black vh-100 text-white p-3">
    <h5 className="text-center mb-4">Main Account</h5>
    <ListGroup variant="flush">
      <ListGroup.Item action href="#overview" className="bg-dark text-light">Overview</ListGroup.Item>
      <ListGroup.Item action href="#positions" className="bg-dark text-light">Positions</ListGroup.Item>
      <ListGroup.Item action href="#orders" className="bg-dark text-light">Orders</ListGroup.Item>
      <ListGroup.Item action href="#history" className="bg-dark text-light">History</ListGroup.Item>
      <ListGroup.Item action href="#leaderboard" className="bg-dark text-light">Leaderboard</ListGroup.Item>
      <ListGroup.Item action href="#options" className="bg-dark text-light">Options</ListGroup.Item>
      <ListGroup.Item action href="#perpetuals" className="bg-dark text-light">Perpetuals</ListGroup.Item>
      <ListGroup.Item action href="#spot" className="bg-dark text-light">Spot</ListGroup.Item>
    </ListGroup>
  </div>
);

export default Sidebar;
