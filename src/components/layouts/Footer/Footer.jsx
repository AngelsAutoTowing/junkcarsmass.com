import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col, Table } from 'react-bootstrap';
import FooterMap from '../FooterMap/FooterMap';
import Footer__ContactFormSection from './Footer__ContactFormSection';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query AuthorQ {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `);

  return (
    <footer>
      <FooterMap className="section-no-margin" />
      <Footer__ContactFormSection className="bg-img-footer-contact section-no-margin" />
      <section className="footer-bg section-no-margin">
        <Container className="p-5">
          <Row className="justify-content-around align-items-baseline">
            <Col
              xs={12}
              md={4}
              lg={4}
              className="text-left text-md-left mb-5 mb-lg-0 drop-shadow-dark"
            >
              <p className="text-uppercase mb-4 text-primary lead font-weight-bold">
                Contact
              </p>
              <Container className="px-0 text-sans-serif pt-2 d-flex mb-2">
                <a
                  href="https://www.google.com/maps?cid=13760398526388246013"
                  target="_blank"
                >
                  <i className="fas fa-address-card mt-1" />
                </a>

                <a
                  href="https://www.google.com/maps?cid=13760398526388246013"
                  target="_blank"
                  className="ml-3"
                >
                  Angels Towing - Junk Car Mass
                </a>
              </Container>
              <Container className="px-0 text-sans-serif pt-2 d-flex mb-2">
                <a href="tel:+16179976510">
                  <i className="fas fa-phone mt-1" />
                </a>

                <a className="ml-3" href="tel:+16179976510">
                  Cell: (617) 997-6510
                </a>
              </Container>
              <Container className="px-0 text-sans-serif pt-2 d-flex mb-2">
                <a
                  href="mailto:angelstowing@hotmail.com?Subject=Important%20Email%20From%20Website"
                  target="_blank"
                  rel="nofollow"
                >
                  <i className="fas fa-envelope mt-1" />
                </a>

                <a
                  className="ml-3"
                  href="mailto:angelstowing@hotmail.com?Subject=Important%20Email%20From%20Website"
                  target="_blank"
                  rel="nofollow"
                >
                  angelstowing
                  <wbr />
                  @hotmail.com
                </a>
              </Container>
              <Container className="px-0 text-sans-serif pt-2 d-flex mb-2">
                <a href="https://goo.gl/maps/MZFJ1hR87hQpDgK16" target="_blank">
                  <i className="fas fa-map-marker-alt mt-1" />
                </a>
                <a
                  className="ml-1-25"
                  href="https://goo.gl/maps/MZFJ1hR87hQpDgK16"
                  target="_blank"
                >
                  87 County Rd
                  <br />
                  Plympton, MA 02367
                </a>
              </Container>
            </Col>

            <Col
              xs={12}
              md={4}
              lg={4}
              className="text-left text-md-left mb-5 mb-lg-0 drop-shadow-dark"
            >
              <p className="text-uppercase mb-4 text-primary lead font-weight-bold">
                Company Info
              </p>
              <Container className="px-0 text-sans-serif pt-2 d-flex mb-2">
                <i className="fas fa-clock mt-2" />
                <Table className="ml-2" borderless size="sm">
                  <tbody>
                    <tr>
                      <td>Monday</td>
                      <td>7AM–5PM</td>
                    </tr>
                    <tr>
                      <td>Tuesday</td>
                      <td>7AM–5PM</td>
                    </tr>
                    <tr>
                      <td>Wednesday</td>
                      <td>7AM–5PM</td>
                    </tr>
                    <tr>
                      <td>Thursday</td>
                      <td>7AM–5PM</td>
                    </tr>
                    <tr>
                      <td>Friday</td>
                      <td>7AM–5PM</td>
                    </tr>
                    <tr>
                      <td>Saturday</td>
                      <td>7AM–2PM</td>
                    </tr>
                    <tr>
                      <td>Sunday</td>
                      <td>Closed</td>
                    </tr>
                  </tbody>
                </Table>
              </Container>
            </Col>

            <Col
              xs={12}
              md={4}
              lg={4}
              className="text-left text-md-left mb-5 mb-lg-0 drop-shadow-dark"
            >
              <p className="text-uppercase mt-5 mb-4 text-primary lead font-weight-bold">
                Social Media
              </p>
              <Container className="px-0 text-sans-serif d-flex py-2">
                <a
                  href="https://www.facebook.com/ANGELSAUTOANDTOWING"
                  target="_blank"
                >
                  <i className="fab fa-2x fa-facebook mr-3" />
                </a>
                <a
                  className="my-auto"
                  href="https://www.facebook.com/ANGELSAUTOANDTOWING"
                  target="_blank"
                >
                  <span className="ml-1 my-auto">Facebook</span>
                </a>
              </Container>
              <Container className="px-0 text-sans-serif d-flex py-2">
                <a href="#" target="_blank">
                  <i className="fab fa-2x fa-instagram mr-3" />
                </a>
                <a className="my-auto" href="#" target="_blank">
                  <span className="ml-2 my-auto">Instagram</span>
                </a>
              </Container>
              <Container className="px-0 text-sans-serif d-flex py-2">
                <a href="#" target="_blank">
                  <i className="fab fa-2x fa-youtube mr-3" />
                </a>
                <a className="my-auto" href="#" target="_blank">
                  <span className="my-auto">YouTube</span>
                </a>
              </Container>
            </Col>
          </Row>
        </Container>
        <Container fluid className="bg-dark">
          <Container className="py-3 text-sans-serif">
            <Row className="justify-content-between align-items-baseline pt-3">
              <Col xs={12} md={12} className="small text-center">
                <p>
                  Copyright &copy; {new Date().getFullYear()}{' '}
                  <Link className="text-primary font-weight-bold" to="/">
                    Angels Towing - Junk Car Mass
                  </Link>
                </p>
                <p>
                  All Rights Reserved{' '}
                  <Link
                    className="text-primary font-weight-bold"
                    to="/privacy/"
                  >
                    Privacy Policy
                  </Link>
                </p>
              </Col>
              <Col xs={12} md={12} className="small text-center">
                {' '}
                <p>
                  Design by{' '}
                  <a
                    href="https://johngrattan.com/"
                    target="_blank"
                    rel="nofollow"
                    className="text-primary font-weight-bold"
                  >
                    John Grattan SEO & Web Design
                  </a>
                </p>
              </Col>
            </Row>
          </Container>
        </Container>
      </section>
    </footer>
  );
};

export default Footer;
