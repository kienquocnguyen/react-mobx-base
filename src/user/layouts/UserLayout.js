import React from "react";
import PropTypes from "prop-types";
import { Container, Row, Col } from "shards-react";
import Navigation from "../components/Navigation";

import '../assets/style.css';
const UserLayout = ({ children, noNavbar, noFooter }) => (
  <Container fluid>
    <Row className = "user-layout">
      <Col
        className="main-content p-0"
        lg={{ size: 12, offset: 0 }}
        md={{ size: 12, offset: 0 }}
        sm="12"
        tag="main"
      >
        {!noNavbar && <Navigation />}
        {children}
      </Col>
    </Row>
  </Container>
);

UserLayout.propTypes = {
  /**
   * Whether to display the navbar, or not.
   */
  noNavbar: PropTypes.bool,
  /**
   * Whether to display the footer, or not.
   */
  noFooter: PropTypes.bool
};

UserLayout.defaultProps = {
  noNavbar: false,
  noFooter: false
};

export default UserLayout;
