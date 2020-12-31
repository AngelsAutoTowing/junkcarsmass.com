import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Body = ({ bodyContent, bodySidebar }) => {
  return (
    <section>
      <Container fluid className="layout-body">
        <Row noGutters className="mx-0 px-0">
          <Col xs={12} lg={8} className="layout-body-content">
            {bodyContent}
          </Col>
          <Col xs={12} lg={4} className="layout-body-sidebar">
            {bodySidebar}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Body;
