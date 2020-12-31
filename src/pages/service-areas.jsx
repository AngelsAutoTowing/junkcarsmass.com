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
import FormSidebar from '../components/common/Forms/FormSidebar';

const ServiceAreasPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query ServiceAreasPageQ {
      headerBgImg: file(
        relativePath: {
          eq: "assets/images/service-areas/massachusetts-map-service-areas-angels-towing-junk-car-mass.jpg"
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
      imgContentTop: file(
        relativePath: {
          eq: "assets/images/service-areas/massachusetts-boston-city-angels-towing-junk-car-mass.jpg"
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
  const imgContentTop = data.imgContentTop.childImageSharp.fluid;
  const siteMetadata = data.companyName.siteMetadata;
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

  const navList = [
    {
      name: 'Learn More About Us',
      url: '/about/',
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
        canonicalLink={canonical}
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        alt={`${siteMetadata.title}'s salvage yard crane picking up scrap metal and junk cars in Massachusetts`}
        textMain="Massachusetts & Rhode Island Service Areas"
        crumbs={crumbs}
        customCrumbLabel={customCrumbLabel}
      />
      <Body
        bodyContent={
          <BodyContent>
            <Container>
              <h2 className="mb-3">
                We Service Eastern & Central Massachusetts and Rhode Island
              </h2>
              <span className="display-6 font-italic">
                From Cape Cod to Boston, South Shore to Worcester, South Coast
                to Providence
              </span>
              <Img fluid={imgContentTop} className="my-5" />
              <h3>Our Location</h3>
              <p className="no-drop-shadow mb-5">
                Our junkyard is centrally located at{' '}
                <a
                  href="https://www.google.com/maps?cid=13760398526388246013"
                  target="_blank"
                  className="text-link-on-white"
                >
                  87 County Rd, Plympton, MA 02367
                </a>
                . We service a 40-mile radius around our location, so this
                includes Massachusetts and Rhode Island.
              </p>
              <h3>Massachusetts</h3>
              <p className="mb-5">
                Our tow trucks will travel to Boston, North Shore, Central MA
                (Worcester), South Shore, South Coast (Fall River), and Cape
                Cod.
              </p>
              <h3>Rhode Island</h3>
              <p className="mb-5">
                Our tow trucks only travel to the metro Providence area. We
                prefer not to go any further than the city limits. If you have
                any questions about your location, please just give us a call at{' '}
                <a
                  className="font-weight-bold text-link-on-white"
                  href="tel:+16179976510"
                >
                  (617) 977-6510
                </a>
                .
              </p>
            </Container>
          </BodyContent>
        }
        bodySidebar={
          <BodySidebar>
            <Container>
              <h2 className="text-center">Who We Are</h2>
              <Container className="my-3">
                <SidebarNav navList={navList} />
              </Container>
              <Container className="my-3">
                <FormSidebar />
              </Container>
            </Container>
          </BodySidebar>
        }
      />
    </>
  );
};

export default ServiceAreasPage;
