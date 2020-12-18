import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { Container } from 'react-bootstrap';

const HeaderPageMissing = ({ className, fluid, alt, textMain }) => {
  return (
    <BackgroundImage
      Tag="header"
      className={className}
      fluid={fluid}
      backgroundColor="#040e18"
      alt={alt}
    >
      <Container className="header-container">
        <h1>{textMain}</h1>
      </Container>
    </BackgroundImage>
  );
};

export default HeaderPageMissing;
