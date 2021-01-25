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
      imgContentTop: file(
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
  const imgContentTop = data.imgContentTop.childImageSharp.fluid;
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
      name: 'Learn More About Us',
      url: '/about/',
    },
    {
      name: 'See Our Service Areas',
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
        alt={`${siteMetadata.title}'s salvage yard crane picking up scrap metal and junk cars in Massachusetts`}
        textMain="We are a professional junk car removal company"
        crumbs={crumbs}
        customCrumbLabel={customCrumbLabel}
      />
      <Body
        bodyContent={
          <BodyContent>
            <Container>
              <h2 className="mb-3">Family Owned & Operated for 20+ Years</h2>
              <span className="display-6 font-italic">
                Proudly Serving Massachusetts & Rhose Island residents with
                affordable junkyard & towing services
              </span>
              <Img
                fluid={imgContentTop}
                title="Our junk car removal tow trucks"
                alt="Our junk car removal tow trucks travel around Massachusetts and Rhode Island offering free towing for scrap vehicle pickup"
                className="my-5"
              />
              <h3>Background</h3>
              <p>
                {siteMetadata.title} began as a small junkyard in Plympton,
                Massachusetts. We quickly grew to become a major retailer for
                used auto parts, a full-scale towing service, and a well known
                junk car removal company.
              </p>
              <p className="mb-5">
                We now provide our services to a 40-mile radius around our
                junkyard and continue to add tow trucks to our fleet.
              </p>
              <h3>Our Junkyard</h3>
              <p className="mb-5">
                From used cars to scrap metal, our salvage yard is always
                working hard to recycle and do our part for the environment.
                It's amazing to think about how many tons of metal pass through
                our junkyard each year and contribute to cleaning up
                neighborhoods, freeing up space in your garage, and helping
                families in need of fast cash for their junk cars.
              </p>
              <h3>Our Tow Trucks</h3>
              <p className="mb-5">
                You may have seen our tow trucks traveling throughout MA & RI
                for pick ups. We are actually in the middle of transforming our
                fleet of trucks to a new design and paint job. We are very
                excited to launch our new branding.
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

export default AboutPage;
