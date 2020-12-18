import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Container } from 'react-bootstrap';

import Img from 'gatsby-image';
import SEO from '../components/common/SEO/Seo';
import Header from '../components/layouts/Header/Header';
import Body from '../components/layouts/Body';
import BodyContent from '../components/layouts/BodyContent';
import BodySidebar from '../components/layouts/BodySidebar';
import SidebarNav from '../components/common/SidebarNav';

const AboutPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query AboutPageQ {
      headerBgImg: file(
        relativePath: {
          eq: "assets/images/about/junkyard-salvage-yard-angels-towing-junk-car-mass.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      companyName: site {
        siteMetadata {
          title
        }
      }
      imgTowTruck: file(
        relativePath: {
          eq: "assets/images/about/tow-truck-salvage-yard-angels-towing-junk-car-mass.jpg"
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

  const imageDataHeader = data.headerBgImg.childImageSharp.fluid;
  const imgTowTruck = data.imgTowTruck.childImageSharp.fluid;
  const siteMetadata = data.companyName.siteMetadata;

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

  const navList = [
    {
      name: 'Check Our Service Areas',
      url: '/service-areas/',
    },
    {
      name: 'Read Our Reviews',
      url: '/reviews/',
    },
  ];

  return (
    <>
      <SEO
        title="Angels Towing - Junk Car Mass"
        description="About Us"
        canonicalLink="https://junkcarsmass.com/about/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        textMain={`About ${siteMetadata.title}`}
        crumbs={crumbs}
        customCrumbLabel={customCrumbLabel}
        alt={`${siteMetadata.title}'s salvage yard crane picking up scrap metal and junk cars in Massachusetts`}
      />
      <Body
        bodyContent={
          <BodyContent>
            <Container>
              <Img fluid={imgTowTruck} className="mb-5" />
              <h2 className="mb-3">Family Owned & Operated for 20 Years</h2>
              <h3 className="font-italic">
                Proudly Serving Massachusetts residents with affordable junk
                yard & towing services
              </h3>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt magnam laborum labore, temporibus nisi sint iusto
                perspiciatis fuga, facilis quidem at ullam minus culpa deleniti
                consequatur animi! Deleniti, voluptas neque. Lorem ipsum dolor
                sit amet consectetur adipisicing elit. Deserunt magnam laborum
                labore, temporibus nisi sint iusto perspiciatis fuga, facilis
                quidem at ullam minus culpa deleniti consequatur animi!
                Deleniti, voluptas neque.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt magnam laborum labore, temporibus nisi sint iusto
                perspiciatis fuga, facilis quidem at ullam minus culpa deleniti
                consequatur animi! Deleniti, voluptas neque.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt magnam laborum labore, temporibus nisi sint iusto
                perspiciatis fuga, facilis quidem at ullam minus culpa deleniti
                consequatur animi! Deleniti, voluptas neque.
              </p>
            </Container>
          </BodyContent>
        }
        bodySidebar={
          <BodySidebar>
            <Container>
              <h2>Who We Are</h2>
              <SidebarNav navList={navList} />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt magnam laborum labore, temporibus nisi sint iusto
                perspiciatis fuga, facilis quidem at ullam minus culpa deleniti
                consequatur animi! Deleniti, voluptas neque.
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Deserunt magnam laborum labore, temporibus nisi sint iusto
                perspiciatis fuga, facilis quidem at ullam minus culpa deleniti
                consequatur animi! Deleniti, voluptas neque.
              </p>
            </Container>
          </BodySidebar>
        }
      />
    </>
  );
};

export default AboutPage;
