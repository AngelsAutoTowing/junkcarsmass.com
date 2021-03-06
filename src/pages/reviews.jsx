import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Carousel, Container, Row, Col } from 'react-bootstrap';

import Img from 'gatsby-image';
import SEO from '../components/common/SEO/Seo';
import Header from '../components/layouts/Header/Header';
import Body from '../components/layouts/Body';
import BodyContent from '../components/layouts/BodyContent';
import BodySidebar from '../components/layouts/BodySidebar';
import SidebarNav from '../components/common/SidebarNav';
import FormSidebar from '../components/common/Forms/FormSidebar';
import ImgReviewRyan from '../components/images/Pages/Home/img-review-ryan';
import ImgReviewYves from '../components/images/Pages/Home/img-review-yves';

const ReviewsPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query ReviewsPageQ {
      headerBgImg: file(
        relativePath: {
          eq: "assets/images/reviews/5-star-customer-reviews-angels-towing-junk-car-mass.jpg"
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
      phoneNumber: site {
        siteMetadata {
          phoneDisplay
          phoneHref
        }
      }
      imgContentTop: file(
        relativePath: {
          eq: "assets/images/reviews/junkyard-cars-stacked-angels-towing-junk-car-mass.jpg"
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
  const phone = data.phoneNumber.siteMetadata;

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
        title="See Our 5-Star Reviews for Junk Car Removal in MA & RI | Angels Towing - Junk Car Mass"
        description={`We pay the most cash for junk cars, offer free towing & same day pickup, so our customers are happy! Read our reviews, then call ${phone.phoneDisplay} for a quote`}
        canonicalLink="https://junkcarsmass.com/reviews/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        alt={`${siteMetadata.title}'s salvage yard crane picking up scrap metal and junk cars in Massachusetts`}
        textMain="Read Our 5-Star Reviews For Junk Car Removal"
        crumbs={crumbs}
        customCrumbLabel={customCrumbLabel}
      />
      <Body
        bodyContent={
          <BodyContent>
            <Container>
              <h2 className="mb-3">
                Read Our Reviews From Google, Facebook, and Yelp
              </h2>
              <span className="display-6 font-italic">
                See How We Stack Up Against The Competition
              </span>
              <Img
                fluid={imgContentTop}
                title="Our junkyard accepts junk vehicles of any make, model, and condition"
                alt="Scrap yard filled with automobiles we towed from Boston, MA and Providence, RI"
                className="my-5"
              />
              <h3>Customer Satisfaction</h3>
              <p>
                Customer reviews are very important to us and we always
                appreciate the feedback. We ask all customers to leave an honest
                review so we can gauge how we are doing.
              </p>
              <p className="mb-5">
                It's great to know where we excel and what we need to improve
                on.{' '}
                <strong>
                  Our ultimate goal is to leave every customer happy and
                  satisfied!
                </strong>
              </p>
              <Carousel interval={null} className="bg-dark rounded shadow-lg">
                <Carousel.Item>
                  <Row>
                    <Col xs={12} lg={8} className="text-light mx-auto p-5">
                      <Row className="text-center">
                        <Col xs={12} lg={4}>
                          <ImgReviewRyan className="rounded-circle" />
                          <Container className="d-block">
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                          </Container>
                          <p className="font-italic text-center mt-3">
                            Google My Business Review
                          </p>
                        </Col>
                        <Col xs={12} lg={8}>
                          <p className="lead text-left font-weight-bold">
                            Positive: Professionalism, Punctuality, Quality,
                            Value
                          </p>
                          <p className="lead text-left">
                            Very knowledgeable, great price for used parts.
                            Friendly! I like it so much that I applied for a job
                            here!
                          </p>
                          <p className="lead font-italic text-right mb-0">
                            - Ryan
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Carousel.Item>
                <Carousel.Item>
                  <Row>
                    <Col xs={12} lg={8} className="text-light mx-auto p-5">
                      <Row className="text-center">
                        <Col xs={12} lg={4}>
                          <ImgReviewYves className="rounded-circle" />
                          <Container className="d-block">
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                            <i className="fas fa-star text-primary"></i>
                          </Container>
                          <p className="font-italic text-center mt-3">
                            Google My Business Review
                          </p>
                        </Col>
                        <Col xs={12} lg={8}>
                          <p className="lead text-left font-weight-bold">
                            Service: Junk Car Removal
                          </p>
                          <p className="lead text-left">
                            Professional and helpful with my auto parts.
                          </p>
                          <p className="lead font-italic text-right mb-0">
                            - Yves Lewis
                          </p>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Carousel.Item>
              </Carousel>
            </Container>
          </BodyContent>
        }
        bodySidebar={
          <BodySidebar>
            <Container>
              <h2 className="text-center">Who We Are</h2>
              <Container className="my-3 px-0 px-lg-3">
                <SidebarNav navList={navList} />
              </Container>
              <Container className="my-3 px-0 px-lg-3">
                <FormSidebar />
              </Container>
            </Container>
          </BodySidebar>
        }
      />
    </>
  );
};

export default ReviewsPage;
