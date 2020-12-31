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

const JunkCarRemoval = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query JunkCarRemovalQ {
      headerBgImg: file(
        relativePath: {
          eq: "assets/images/junk-car-removal/we-pay-cash-for-junk-cars-angels-towing-junk-car-mass.jpg"
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
          eq: "assets/images/junk-car-removal/scrap-car-taking-up-space-angels-towing-junk-car-mass.jpg"
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
        canonicalLink={canonical}
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        alt={`${siteMetadata.title}'s salvage yard crane picking up scrap metal and junk cars in Massachusetts`}
        textMain="We'll pay the most cash for your junk car"
        crumbs={crumbs}
        customCrumbLabel={customCrumbLabel}
      />
      <Body
        bodyContent={
          <BodyContent>
            <Container>
              <h2 className="mb-3">
                Old vehicle taking up space? We'll pay cash for it
              </h2>
              <span className="display-6 font-italic">
                Free towing - any make, model, condition (No title, no problem)
              </span>
              <Img fluid={imgContentTop} className="my-5" />
              <h3>Cash For Junk Cars</h3>
              <p>
                Tired of looking at that broken-down junk car sitting in your
                driveway?
              </p>
              <p>
                Got a damaged vehicle that no longer runs just taking up space
                in the garage?
              </p>
              <p>We are here to help!</p>
              <p>
                <strong>
                  We offer the highest amount of cash for the removal of your
                  junk car!
                </strong>
              </p>
              <p>
                Selling a junk car can be a daunting process, but it doesn’t
                have to be. Our team of experts is here to help you schedule a
                pick-up and receive top dollar for your clunker.
              </p>
              <p>
                Not only will your automobile be removed from your property
                quickly and easily, but we’ll do it for free! We offer{' '}
                <strong>
                  free towing, same-day pickup, 24/7 availability, and guarantee
                  no hidden fees.
                </strong>
              </p>
              <p className="mb-5">
                With over 20 years of experience in the junk car industry, we
                know how to evaluate your car, truck, SUV, or van and make an
                offer you can’t refuse. We buy{' '}
                <strong>any make, model, year, or condition</strong>, so you can
                feel confident in knowing that your vehicle holds value.
              </p>
              <h3>Contact Us</h3>
              <p>
                Let's schedule a time so one of our tow trucks can come out to
                your house and haul away that junk car. Give us a call at{' '}
                <a
                  className="font-weight-bold text-secondary"
                  href="tel:+16179976510"
                >
                  (617) 977-6510
                </a>{' '}
                or fill out our form.
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

export default JunkCarRemoval;
