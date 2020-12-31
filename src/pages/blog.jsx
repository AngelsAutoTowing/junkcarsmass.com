import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import SEO from '../components/common/SEO/Seo';
import Header from '../components/layouts/Header/Header';
import Body from '../components/views/Blog/Body';

const BlogPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query BlogPageQ {
      masthead: file(
        relativePath: {
          eq: "assets/images/pages/blog/junk-car-removal-blog-angels-towing-junk-car-mass.jpg"
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
  let canonical = typeof window !== 'undefined' ? window.location.href : '';

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
        title="Junk Car Removal Blog - Everything About Cash For Cars | Angels Towing - Junk Car Mass"
        description="Thinking about scrapping your junk car for cash? Before you lose out on money, check out our blog posts to learn tips, tricks, and guides to selling your car"
        canonicalLink={canonical}
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        alt="Blog page"
        textMain="Junk Car Removal Blog"
        crumbs={crumbs}
        customCrumbLabel={customCrumbLabel}
      />
      <Body />
    </>
  );
};

export default BlogPage;
