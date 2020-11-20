import React from 'react';
import { Link } from "react-router-dom";
import { Layout, Row, Col } from 'antd';
import './header.css';

const Header = () => {
  const { Header } = Layout;
  return (
    <Header className="header">
      <Row>
        <Col span={5} offset={1}>
          <Link to="/">
            <h1>Sale Manager</h1>
          </Link>
        </Col>
        <Col span={12} offset={6}>
          <Row>
            <Col span={6}>
              <Link to="/products">Products</Link>
            </Col>
            <Col span={6}>Item 2</Col>
            <Col span={6}>Item 3</Col>
            <Col span={6}>Item 4</Col>
          </Row>
        </Col>
      </Row>
    </Header>
  );
}

export default Header;