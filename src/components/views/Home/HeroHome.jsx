import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import BackgroundImage from 'gatsby-background-image';

import FormHomePage from '../../common/Forms/FormHomePage/FormHomePage';

const HeroHome = ({ className }) => {
  const data = useStaticQuery(graphql`
    query HeroHomeQ {
      masthead: file(
        relativePath: {
          eq: "assets/images/pages/home/we-buy-junk-cars-angels-towing-junk-car-mass-massachusetts.jpg"
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
      Tag="header"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
      alt="Angels Towing - Junk Car Mass pays top dollar for junk car removal in Plymouth County, Massachusetts"
    >
      <Container id="home-banner-section" className="h-100">
        <Row className="h-100 align-items-center justify-content-center text-center">
          <Col xs={12} lg={6} className="align-self-center">
            <h1 className="px-sm-5 px-3 p-lg-3 mb-2 mb-lg-0 drop-shadow-darker font-weight-bold">
              We pay cash for junk cars
            </h1>
            <p className="px-sm-5 p-3 mb-3 mb-lg-0 drop-shadow-darker font-weight-bold">
              Call{' '}
              <a href={phone.phoneHref} className="text-primary">
                {phone.phoneDisplay}
              </a>{' '}
              to schedule a same day pickup. We are available 24/7!
            </p>
          </Col>
          <Col xs={12} md={8} lg={6}>
            <FormHomePage />
          </Col>
        </Row>
      </Container>
    </BackgroundImage>
  );
};

export default HeroHome;
