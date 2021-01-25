import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Container } from 'react-bootstrap';
import Img from 'gatsby-image';

import SEO from '../../../components/common/SEO/Seo';
import Header from '../../../components/layouts/Header/Header';
import Body from '../../../components/layouts/Body';
import BodyContent from '../../../components/layouts/BodyContent';
import BodySidebar from '../../../components/layouts/BodySidebar';
import SidebarNav from '../../../components/common/SidebarNav';
import FormSidebar from '../../../components/common/Forms/FormSidebar';

const CashForJunkCarsBostonPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query CashForJunkCarsBostonPageQ {
      headerBgImg: file(
        relativePath: {
          eq: "assets/images/massachusetts/boston/cash-for-junk-cars/we-buy-junk-cars-boston-ma-angels-towing-junk-car-mass.jpg"
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
          eq: "assets/images/massachusetts/boston/cash-for-junk-cars/cash-for-junk-cars-boston-ma-angels-towing-junk-car-mass.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imgCashCouple: file(
        relativePath: {
          eq: "assets/images/massachusetts/boston/cash-for-junk-cars/same-day-cash-in-hand-junk-car-removal-boston-ma-angels-towing.jpg"
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
  const imgCashCouple = data.imgCashCouple.childImageSharp.fluid;
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
        title={`We Pay Cash For Junk Cars In Boston, MA - Call Us For Quote | ${siteMetadata.title}`}
        description="Need cash now for a junk car in Boston, MA? We buy junk vehicles and offer same-day pickup for junk car removal. Call 781-243-1927 to schedule free towing"
        canonicalLink="https://junkcarsmass.com/massachusetts/boston/cash-for-junk-cars/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        alt={`${siteMetadata.title}'s salvage yard crane picking up scrap metal and junk cars in Massachusetts`}
        textMain="We pay cash for junk cars in Boston, MA"
        crumbs={crumbs}
        customCrumbLabel="Cash For Junk Cars"
      />
      <Body
        bodyContent={
          <BodyContent>
            <Container>
              <h2 className="mb-3">
                Sell your junk car for cash today in Boston, MA
              </h2>
              <span className="display-6 font-italic">
                Same Day Pickup, Free Towing, No Hidden Fees
              </span>
              <Img fluid={imgContentTop} className="my-5 drop-shadow" />
              <p className="mt-5">
                If you're looking to sell your junk car for cash in{' '}
                <strong>Boston, MA</strong>, you might not know where to start.
                It's hard to figure out which junk car removal service you can
                trust, especially since the market is so saturated.
              </p>
              <p>
                <strong>{siteMetadata.title}</strong> understands this, so we
                make sure our payout is competitive, our service is superior,
                and our customer satisfaction is guaranteed.
              </p>
              <p>
                We’re a family-owned and operated junk car removal service
                that's been towing vehicles in Boston, MA for{' '}
                <strong>over 20 years</strong>. We have a professional staff, a
                fleet of tow trucks to ensure same-day pickup, and the
                experience to help you get the best deal on the market.
              </p>
              <p>
                Our junkyard will salvage all vehicles —{' '}
                <strong>any make, model, and condition</strong>:
              </p>
              <ul>
                <li>Junk cars that have been in accidents</li>
                <li>Scrap cars that have been totaled</li>
                <li>Junk vehicles that have been in floods</li>
                <li>Junk automobiles that have been vandalized</li>
                <li>Junk cars that no longer run</li>
                <li>Junk cars with no title</li>
              </ul>
              <h2 className="mt-5 mb-3">Same Day Pickup, Anywhere in Boston</h2>
              <p>
                Is your car stuck in the driveway or garage? Is it taking up
                limited parking space on a Boston street? We understand the
                urgency and that's why we offer <strong>same day pickup</strong>
                .
              </p>
              <p>
                Not only will we drive to your residential home or place of
                business, but we'll <strong>tow your vehicle for free</strong>{' '}
                AND give you cash in hand on the same day you called. How can
                you beat that deal?
              </p>
              <p>
                All you need to do is get in contact with {siteMetadata.title}{' '}
                and we'll walk you through our process. After reviewing
                information like your junk car's make, model, year, and
                condition we can reach an agreement and schedule a pick up at
                your convenience. We'll send out one of our tow trucks to your
                designated address and before you know it, you'll be walking
                away with <strong>extra cash in your pocket</strong>.
              </p>
              <div className="my-5 py-3">
                <Img fluid={imgCashCouple} className="my-5 drop-shadow" />
              </div>
              <h2 className="mt-5 mb-3">
                Free Towing Service & No Hidden Fees
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
                officia sequi iste provident blanditiis itaque, quidem eligendi
                et dolorum ipsa magni esse dolor culpa sed optio, deserunt ullam
                aliquid unde.
              </p>
              <h2 className="mt-5 mb-3">
                We'll Buy Any Vehicle Make, Model, Condition
              </h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
                officia sequi iste provident blanditiis itaque, quidem eligendi
                et dolorum ipsa magni esse dolor culpa sed optio, deserunt ullam
                aliquid unde.
              </p>
              <h2 className="mt-5 mb-3">About Angels Towing - Junk Car Mass</h2>
              <p>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Error
                officia sequi iste provident blanditiis itaque, quidem eligendi
                et dolorum ipsa magni esse dolor culpa sed optio, deserunt ullam
                aliquid unde.
              </p>
              <h2 className="mt-5 mb-3">Contact Us For A Free Quote</h2>
              <p>
                When you're faced with costly repairs like pulling out an
                engine, replacing the transmission, or putting in new axles, we
                can help you decide if junking your car is the best option for
                your wallet. Give us a call at{' '}
                <a
                  className="font-weight-bold text-secondary"
                  href={phone.phoneHref}
                >
                  {phone.phoneDisplay}
                </a>{' '}
                or fill out our form to receive your free quote today.
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

export default CashForJunkCarsBostonPage;
