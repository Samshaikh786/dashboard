// LeaderboardTable.js
import React from 'react';
import { Table } from 'react-bootstrap';

const LeaderboardTable = () => (
    <div className="mt-4">
    <h3 className="text-light mb-3">Leaderboard</h3>
    <Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Rank</th>
          <th>Trader</th>
          <th>PNL</th>
          <th>ROI</th>
        </tr>
      </thead>
      <tbody>
        {[...Array(10)].map((_, index) => (
          <tr key={index}>
            <td>{index + 1}</td>
            <td>0x303d...9987</td>
            <td>$50,000</td>
            <td>200%</td>
          </tr>
        ))}
      </tbody>
    </Table>
  </div>
);

export default LeaderboardTable;
