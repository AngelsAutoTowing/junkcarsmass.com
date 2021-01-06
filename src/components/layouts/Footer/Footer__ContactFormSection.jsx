import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import BackgroundImage from 'gatsby-background-image';
import { Container, Row, Col } from 'react-bootstrap';
import FormFooter from '../../common/Forms/FormFooter/FormFooter';

const Footer__ContactFormSection = ({ className }) => {
  const data = useStaticQuery(graphql`
    query Footer__ContactFormSectionQ {
      footerContact: file(
        relativePath: {
          eq: "assets/images/pages/footer/cash-for-junk-cars-angels-towing-junk-car-mass-junk-yard-plympton-ma.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const imageData = data.footerContact.childImageSharp.fluid;

  return (
    <BackgroundImage
      Tag="section"
      className={className}
      fluid={imageData}
      backgroundColor={`#040e18`}
      alt="Junk car removal"
    >
      <Container>
        <Row className="justify-content-center">
          <Col xs={12} md={8} lg={6} className="px-3 px-lg-0 my-5">
            <FormFooter />
          </Col>
        </Row>
      </Container>
    </BackgroundImage>
  );
};

export default Footer__ContactFormSection;
