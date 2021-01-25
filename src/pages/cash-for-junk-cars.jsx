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

const CashForJunkCarsPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query CashForJunkCarsPageQ {
      headerBgImg: file(
        relativePath: {
          eq: "assets/images/cash-for-junk-cars/we-pay-cash-for-junk-cars-angels-towing-junk-car-mass.jpg"
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
          eq: "assets/images/cash-for-junk-cars/scrap-car-taking-up-space-angels-towing-junk-car-mass.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imgRepairBills: file(
        relativePath: {
          eq: "assets/images/cash-for-junk-cars/cash-for-junk-cars-repair-bills-angels-towing-junk-car-mass.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imgWreckedCar: file(
        relativePath: {
          eq: "assets/images/cash-for-junk-cars/wrecked-car-junk-vehicle-angels-towing-junk-car-mass.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imgCashQuote: file(
        relativePath: {
          eq: "assets/images/cash-for-junk-cars/call-for-cash-quote-angels-towing-junk-car-mass.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imgTowTruck: file(
        relativePath: {
          eq: "assets/images/cash-for-junk-cars/tow-truck-towing-junk-car-for-cash-angels-towing-junk-car-mass.jpg"
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
  const imgRepairBills = data.imgRepairBills.childImageSharp.fluid;
  const imgWreckedCar = data.imgWreckedCar.childImageSharp.fluid;
  const imgCashQuote = data.imgCashQuote.childImageSharp.fluid;
  const imgTowTruck = data.imgTowTruck.childImageSharp.fluid;
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
        title="Angels Towing - Junk Car Mass"
        description="About Us"
        canonicalLink="https://junkcarsmass.com/cash-for-junk-cars/"
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
                Our Junk Car Removal Service Can Help You Today
              </h2>
              <span className="display-6 font-italic">
                Free Towing - Any Make, Model, Condition - No Title Necessary
              </span>
              <p className="mt-5">
                ​Are you tired of looking at that run-down junk vehicle sitting
                in your driveway or taking up space in your garage? Wouldn't it
                be nice if a team of licensed junk car experts drove directly to
                you, towed your car away, AND gave you{' '}
                <strong>cash in hand all on the same day</strong>​?
              </p>
              <p>​Luckily, this process is easier than you think!</p>
              <p>
                Angels Towing - Junk Car Mass is an{' '}
                <strong>experienced team of junk car buyers</strong> that can
                help you get one step closer to finally freeing up some space at
                home, providing financial relief towards a new vehicle, or
                simply just having some extra cash in your pocket.​
              </p>
              <p>What's better than getting paid money for junk?</p>
              <Img fluid={imgContentTop} className="my-5" />
              <h2 className="pt-4 my-5">
                Sell Your Junk Car Today Before Repairs Cost You More
              </h2>
              <p>
                Your vehicle has been through a lot — memorable family
                vacations, countless road trips, exhausting work commutes... we
                get it, your car is a significant part of your life. But keep in
                mind, older vehicles depreciate quickly ​and eventually become a{' '}
                <strong>ticking time-bomb for your wallet</strong>.
              </p>
              <p>
                Somehow, automobiles always find a way to break down at the
                worse time possible. Next thing you know, you need a few{' '}
                <strong>car repairs with a MASSIVE bill</strong> attached:​
              </p>
              <ul className="mb-5">
                <li>Engine and Cylinders – $7,000 to $10,000</li>
                <li>Transmission – $4,000 to $5,000</li>
                <li>Suspension – $2,500 to $3,500​</li>
                <li>Head Gasket – $2,000</li>
                <li>Brake Line – $1,000​​​</li>
                <li>and the list goes on...</li>
              </ul>
              <Img fluid={imgRepairBills} className="my-5" />
              <p>
                So what happens if you drive your car until the wheels fall off?
                Well, it will certainly{' '}
                <strong>lose value and limit the cash offer</strong> when
                selling your junk car.
              </p>
              <h2 className="pt-4 my-5">We Buy Junk Cars For The Most Cash</h2>
              <p>
                ​We get calls all the time from people that are VERY unhappy
                with the quote they received from other junk car companies. The
                market is saturated and some of them just aren't looking out for
                your best interest.​ Here at Angels Towing - Junk Car Mass, we
                take pride in our business and look forward to helping you out
                with a <strong>high cash offer you can't refuse</strong>!​​
              </p>
              <p>
                We accept all vehicle makes, models, and years. Keep in mind
                that we actually have higher pay-outs for Toyota's and Honda's.{' '}
                <strong>We also accept vehicles in all conditions</strong>:​
              </p>
              <ul className="mb-5">
                <li>Damaged - small and large​</li>
                <li>Broken - missing parts​</li>
                <li>Totaled - no longer running​</li>
                <li>Unwanted - just sitting around</li>
              </ul>
              <Img fluid={imgWreckedCar} className="my-5" />
              <p>
                Not only do we have great cash pay-outs for junk cars, but we
                also offer:​
              </p>
              <ul className="mb-5">
                <li>Same-day pickup​</li>
                <li>24/7 availability​</li>
                <li>Free towing​</li>
                <li>No hidden fees​</li>
                <li>No title necessary​</li>
                <li>Cash-in-hand​​</li>
              </ul>
              <p className="display-6 text-center mt-5 pt-5">
                All you have to do is give us a call at{' '}
                <a
                  className="font-weight-bold text-secondary"
                  href={phone.phoneHref}
                >
                  {phone.phoneDisplay}
                </a>
                .
              </p>
              <Img fluid={imgCashQuote} className="my-5" />
              <h2 className="pt-4 my-5">
                See What Our Customers Have To Say About Angels Towing - Junk
                Car Mass
              </h2>
              <p>
                Here's what our junk car removal services have done for
                David...​
              </p>
              <div className="my-5 mx-5 p-5 bg-dark rounded drop-shadow text-white">
                <p className="mb-0">
                  "These guys made me a great offer for my car. I figured it
                  wasn't going to be worth much, but they worked with me to
                  reach an agreement. Scheduling was easy and towing was fast.
                  Glad I called them when I did."​​
                </p>
                <p className="text-right text-primary">- David, Brockton, MA</p>
              </div>
              <p>But it's not just David. Look what Susan has to say.​</p>
              <div className="my-5 mx-5 p-5 bg-dark rounded drop-shadow text-white">
                <p className="mb-0">
                  "I called quite a few places before I settled with Angel. He
                  helped me finally get rid of my car! I liked that it was
                  someone local and not a national company with low ball
                  offers."
                </p>
                <p className="text-right text-primary">- Susan, Dennis, MA</p>
              </div>
              <h2 className="pt-4 my-5">Finally, It’s Your Turn To Get Paid</h2>
              <p>
                When you call us at{' '}
                <a
                  className="font-weight-bold text-secondary"
                  href={phone.phoneHref}
                >
                  {phone.phoneDisplay}
                </a>
                , you'll be connected with one of our experts to go over some
                details. Just provide us with the following information about
                your vehicle:​
              </p>
              <ul className="mb-5">
                <li>Make, model, year​</li>
                <li>Condition​</li>
                <li>Pickup location​</li>
              </ul>
              <p>
                ​We'll make a cash offer, schedule a pickup time that's
                convenient for you, and before you know it — one of our tow
                trucks will be out front ready to{' '}
                <strong>trade your junk car for cash</strong>.
              </p>
              <Img fluid={imgTowTruck} className="my-5" />
              <h2 className="pt-4 my-5">
                Give Us A Call Today For Your Free Quote
              </h2>
              <p>
                Not quite sure if your vehicle is worth anything or if we
                service your location? ​Do you need more information about our
                services?
              </p>
              <p>
                Just give us a call at{' '}
                <a
                  className="font-weight-bold text-secondary"
                  href={phone.phoneHref}
                >
                  {phone.phoneDisplay}
                </a>{' '}
                and we can help answer any of your questions.​​
              </p>
              <p>
                ​Not ready to talk on the phone? Try filling out our contact
                form instead! We will receive your message and get back to you
                as soon as we can.
              </p>
              ​ ​ ​
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

export default CashForJunkCarsPage;
