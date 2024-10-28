// Portfolio.js
import React from 'react';
import { Card, Table } from 'react-bootstrap';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from 'chart.js';

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const PortFolio = () => {
  const data = {
    labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul"],
    datasets: [
      {
        label: "PNL",
        data: [10, 20, 15, 30, 25, 35, 30],
        borderColor: "#00ff00",
        backgroundColor: "rgba(0, 255, 0, 0.3)",
        fill: true,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      x: {
        grid: { display: false },
      },
      y: {
        grid: { display: false },
      },
    },
  };

  return (
    <Card bg="dark" text="white" className="mt-4">
      <Card.Body>
        <Card.Title>Historical PNL</Card.Title>
        <Line data={data} options={options} />
        
        {/* Contracts and Amounts Table */}
        <div className="mt-3">
          <Table variant="dark" borderless size="sm">
            <thead>
              <tr>
                <th>Contracts</th>
                <th>Amounts</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>MMPEPE</td>
                <td>$10,000</td>
              </tr>
              <tr>
                <td>MMPEPE</td>
                <td>$10,000</td>
              </tr>
              <tr>
                <td>MMPEPE</td>
                <td>$10,000</td>
              </tr>
              <tr>
                <td>MMPEPE</td>
                <td>$10,000</td>
              </tr>
            </tbody>
          </Table>
        </div>
      </Card.Body>
    </Card>
  );
};

export default PortFolio;
