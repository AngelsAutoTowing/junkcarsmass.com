import React from 'react';
import BackgroundImage from 'gatsby-background-image';
import { Container } from 'react-bootstrap';
import { Breadcrumb } from 'gatsby-plugin-breadcrumb';

const Header = ({
  className,
  fluid,
  alt,
  textMain,
  crumbs,
  customCrumbLabel,
}) => {
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
        <Breadcrumb
          crumbs={crumbs}
          crumbSeparator="/"
          crumbLabel={customCrumbLabel}
        />
      </Container>
    </BackgroundImage>
  );
};

export default Header;
