
import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import TopBar from './TopBar';
import Sidebar from './SideBar';
import StatCards from './StatCards';
import LeaderboardTable from './LeaderboardTable';
import PortFolio from './PortFolio';

const Dashboard = () => (
  <>
    <TopBar/>

    <Container fluid className="pt-5">
      <Row>
        <Col md={2} className="p-0">
        <Sidebar/>

        </Col>
        <Col md={10} className="bg-black text-light p-4">
         <StatCards/>          
          <Row>
            <Col md={8}>
              <LeaderboardTable/>
            </Col>
            <Col md={4}>
              <PortFolio/>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  </>
);

export default Dashboard;
