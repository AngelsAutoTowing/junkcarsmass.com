import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image';

const ProcessHome = () => {
  const data = useStaticQuery(graphql`
    query ProcessHomeQ {
      masthead: file(
        relativePath: {
          eq: "assets/images/pages/home/cash-for-junk-cars-boston-angels-towing-junk-car-mass.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      phoneNumber: site {
        siteMetadata {
          phoneDisplay
          phoneHref
        }
      }
    }
  `);

  const imageData = data.masthead.childImageSharp.fluid;
  const phone = data.phoneNumber.siteMetadata;

  return (
    <BackgroundImage
      Tag="section"
      className="footer-contact-info-section py-0 pt-5 py-lg-5 section-no-margin"
      fluid={imageData}
      backgroundColor={`#040e18`}
      alt="Wooden shingles used for home improvement projects throughout Plymouth, MA"
    >
      <Container className="p-5">
        <h2 className="display-4 font-weight-bold text-white mb-5 drop-shadow-darker mb-5 pb-5">
          We Pay Higher For Junk Cars!
        </h2>
        <Row className="justify-content-center">
          <Col className="mb-5 mb-lg-0 drop-shadow-darker" xs={12} md={4}>
            <Container className="bg-primary p-4 text-center text-secondary">
              <span className="font-weight-bold lead text-uppercase">
                <span className="bg-secondary rounded-circle py-2 px-3 mr-2 text-white">
                  1
                </span>{' '}
                Get Quoted
              </span>
            </Container>
            <Container className="bg-white p-3">
              <p>
                <strong className="text-dark">Available 24/7</strong>
              </p>
              <p className="text-dark">
                Call us today at{' '}
                <a
                  href={phone.phoneHref}
                  className="text-secondary font-weight-bold"
                >
                  {phone.phoneDisplay}
                </a>{' '}
                to discuss your vehicle and reach an agreement. If you’d prefer,
                complete our contact form below.
              </p>
            </Container>
          </Col>
          <Col className="mb-5 mb-lg-0 drop-shadow-darker" xs={12} md={4}>
            <Container className="bg-primary p-4 text-center text-secondary">
              <span className="font-weight-bold lead text-uppercase">
                <span className="bg-secondary rounded-circle py-2 px-3 mr-2 text-white">
                  2
                </span>{' '}
                Get Towed
              </span>
            </Container>
            <Container className="bg-white p-3">
              <p>
                <strong className="text-dark">Schedule Your Pick Up</strong>
              </p>
              <p className="text-dark">
                Let's figure out what day works best for you. We offer same day
                pick ups for junk car removal and guarantee no additional towing
                fees.
              </p>
            </Container>
          </Col>
          <Col className="mb-5 mb-lg-0 drop-shadow-darker" xs={12} md={4}>
            <Container className="bg-primary p-4 text-center text-secondary">
              <span className="font-weight-bold lead text-uppercase">
                <span className="bg-secondary rounded-circle py-2 px-3 mr-2 text-white">
                  3
                </span>{' '}
                Get Paid
              </span>
            </Container>
            <Container className="bg-white p-3">
              <p>
                <strong className="text-dark">Fast Cash for Junk Cars</strong>
              </p>
              <p className="text-dark">
                No matter what the make, model, or condition of your vehicle is,
                we offer the highest cash payouts and guarantee customer
                satisfaction!
              </p>
            </Container>
          </Col>
        </Row>
      </Container>
    </BackgroundImage>
  );
};

export default ProcessHome;
