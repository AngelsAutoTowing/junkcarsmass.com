import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Row, Col } from 'react-bootstrap';

const SubNavbar = () => {
  const data = useStaticQuery(graphql`
    query SubNavbarQ {
      phoneNumber: site {
        siteMetadata {
          phoneDisplay
          phoneHref
        }
      }
    }
  `);

  const phone = data.phoneNumber.siteMetadata;

  return (
    <Row noGutters className="nav-sub d-none d-lg-flex">
      <Col className="d-flex">
        <ul className="nav-sub-items-left">
          <li>
            <span>⭐ SAME DAY PICK UP 24/7 ⭐</span>
          </li>
          <li>
            <span>
              <i className="fas fa-dollar-sign text-success mr-2"></i>WE PAY
              EXTRA FOR TOYOTA & HONDA
              <i className="fas fa-dollar-sign text-success ml-2"></i>
            </span>
          </li>
        </ul>
      </Col>
      <Col className="d-flex">
        <ul className="nav-sub-items-right">
          <li>
            <a href="https://goo.gl/maps/MZFJ1hR87hQpDgK16" target="_blank">
              <i className="fas fa-map-marker-alt mr-2 text-primary"></i>
              87 County Rd, Plympton, MA 02367
            </a>
          </li>
          <li>
            <a href={phone.phoneHref}>
              <i className="fas fa-phone mr-2 text-primary"></i>
              {phone.phoneDisplay}
            </a>
          </li>
        </ul>
      </Col>
    </Row>
  );
};

export default SubNavbar;
