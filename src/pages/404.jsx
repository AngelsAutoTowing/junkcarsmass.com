import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import SEO from '../components/common/SEO/Seo';
import Header from '../components/layouts/Header/Header';

const NotFoundPage = () => {
  const data = useStaticQuery(graphql`
    query NotFoundPageQ {
      masthead: file(
        relativePath: {
          eq: "assets/images/pages/page-missing/page-missing-404-error-scrap-metal-angels-towing-junk-car-mass.jpg"
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

  const imageDataHeader = data.masthead.childImageSharp.fluid;

  const {
    breadcrumb: { crumbs },
  } = pageContext;

  const urlSlashRemoved = location.pathname.replace('/', '').replace('/', '');

  const urlArrayDashRemoved = urlSlashRemoved.split('-');

  const customCrumbLabel = urlArrayDashRemoved
    .map((word) => {
      return word[0].toUpperCase() + word.substring(1);
    })
    .join(' ');

  return (
    <>
      <SEO
        title="Something Went Wrong! Page Cannot Be Found | Angels Towing - Junk Car Mass"
        description="Something Went Wrong! This page cannot be found"
        canonicalLink="https://junkcarsmass.com/404/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        alt="404 Error - Oops! This Page Cannot Be Found"
        textMain="Something Went Wrong!"
        crumbs={crumbs}
        customCrumbLabel={customCrumbLabel}
      />
    </>
  );
};

export default NotFoundPage;
