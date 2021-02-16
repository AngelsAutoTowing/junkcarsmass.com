import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';

import Img from 'gatsby-image';
import SEO from '../components/common/SEO/Seo';
import Header from '../components/layouts/Header/Header';
import Body from '../components/layouts/Body';
import BodyContent from '../components/layouts/BodyContent';
import BodySidebar from '../components/layouts/BodySidebar';
import SidebarNav from '../components/common/SidebarNav';
import FormSidebar from '../components/common/Forms/FormSidebar';
import ButtonExternalLink from '../components/common/Buttons/ButtonExternalLink/ButtonExternalLink';

const UsedAutoPartsPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query UsedAutoPartsPageQ {
      headerBgImg: file(
        relativePath: {
          eq: "assets/images/used-auto-parts/used-auto-parts-angels-towing-junk-car-mass.jpg"
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
          eq: "assets/images/used-auto-parts/buy-used-car-parts-salvage-angels-towing-junk-car-mass.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imgUsedAutoParts: file(
        relativePath: {
          eq: "assets/images/used-auto-parts/used-auto-parts-angels-towing-junk-car-mass.jpg"
        }
      ) {
        childImageSharp {
          fluid(quality: 90, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      imgUsedCarParts: file(
        relativePath: {
          eq: "assets/images/used-auto-parts/used-car-parts-online-angels-towing-junk-car-mass.jpg"
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
  const imgUsedAutoParts = data.imgUsedAutoParts.childImageSharp.fluid;
  const imgUsedCarParts = data.imgUsedCarParts.childImageSharp.fluid;
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
      name: 'Cash For Junk Cars',
      url: '/cash-for-junk-cars/',
    },
    {
      name: 'Used Auto Parts',
      url: '/used-auto-parts/',
    },
  ];

  return (
    <>
      <SEO
        title={`Buy Used Auto Parts - Find Auto Parts Online | ${siteMetadata.title}`}
        description={`Search our used auto parts inventory to find high-quality used car parts at an affordable price. Call us at ${phone.phoneDisplay} for used auto parts.`}
        canonicalLink="https://junkcarsmass.com/used-auto-parts/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        alt="Used auto parts for sale from our salvage yard"
        textMain="Find Used Auto Parts From Our Salvage Yard"
        crumbs={crumbs}
        customCrumbLabel={customCrumbLabel}
      />
      <Body
        bodyContent={
          <BodyContent>
            <Container>
              <h2 className="mb-3">Best Website To Buy Used Auto Parts</h2>
              <span className="display-6 font-italic">
                Easily Find Used Auto Parts Online From Our Inventory
              </span>
              <p className="mt-5">
                If you're looking for used auto parts, transparent prices, and
                great customer service, Angels Towing - Junk Car Mass has
                exactly what you're looking for.
              </p>
              <p>
                Whether you need a transmission for your Toyota, a radiator for
                your Ford, or a crank to rebuild your Chevy, our auto recycling
                business can help you find affordable used auto parts today.
              </p>
              <p>
                Our family-owned business specializes in selling high-quality
                salvage auto parts to customers at competitive prices. We have
                an incredible selection of parts for all vehicle makes, models,
                and years.
              </p>
              <p>
                Our team of professionals thoroughly inspects all used auto
                parts to ensure their quality. That way we can tell you what
                condition the parts are in, and how much life they have left.
              </p>
              <h2 className="pt-4 my-5">
                Search Our Inventory For Junkyard Auto Parts
              </h2>
              <p>Need a part for your car? Don’t go to the dealership!</p>
              <p>
                The parts you need are probably sitting in our junkyard. Angels
                Towing - Junk Car Mass is here to help you find them.
              </p>
              <p>
                Our certified auto parts technicians run all of our parts
                through a series of tests to ensure they are safe to use and in
                good working condition. Once added to our inventory, you can
                search our databse to find what you need.
              </p>
              <p>
                If you’re not sure exactly what you’re looking for, use our
                "Search by Image" to help identify the part.
              </p>
              <p className="mt-5 text-center lead font-weight-bold">
                Check our inventory here:
                <div className="text-center py-5">
                  <ButtonExternalLink
                    btnLabel="Search Our Used Auto Parts Inventory"
                    btnLink="http://www.angelsautosalvage.com/"
                  />
                </div>
              </p>
              <a href="http://www.angelsautosalvage.com/" target="_blank">
                <Img
                  fluid={imgContentTop}
                  title="Search Our Used Auto Parts Inventory Online"
                  alt="Angels Auto Salvage car part inventory"
                  className="my-5"
                />
              </a>
              <h2 className="pt-4 my-5">
                Find Used Salvage Auto Parts Online For Any Vehicle
              </h2>
              <p>
                Our salvage yard has millions of parts and can help you repair
                cars, trucks, sport utility vehicles, vans, motorcycles, RVs,
                and more.
              </p>
              <p>
                Save time calling around and simply search our salvage yard
                inventory for quality automobile parts ranging from:
              </p>
              <Row>
                <Col xs={12} lg={6}>
                  <ul className="mb-5">
                    <li>Engines</li>
                    <li>Cylinders</li>
                    <li>Transmissions</li>
                    <li>Suspensions​</li>
                    <li>Frames</li>
                    <li>Body parts​​​</li>
                  </ul>
                </Col>
                <Col xs={12} lg={6}>
                  <ul className="mb-5">
                    <li>Brakes​​​</li>
                    <li>Bumpers​​​</li>
                    <li>Interior trim​​​</li>
                    <li>Tires​​​</li>
                    <li>Glass</li>
                    <li>and the list goes on...</li>
                  </ul>
                </Col>
              </Row>
              <p>We also offer several easy methods to search our inventory:</p>
              <ul className="mb-5">
                <li>Search by make, model, year, and part​</li>
                <li>Search by image​</li>
                <li>Search by multi-parts</li>
              </ul>
              <p className="display-6 text-center mt-5 pt-5">
                Have any questions? Give us a call at{' '}
                <a
                  className="font-weight-bold text-secondary"
                  href={phone.phoneHref}
                >
                  {phone.phoneDisplay}
                </a>
                .
              </p>
              <Img
                fluid={imgUsedCarParts}
                title="Find Used Auto Parts Online"
                alt="Used car parts available to purchase from our junkyard"
                className="my-5"
              />
              <h2 className="pt-4 my-5">Save Money With Used Car Parts</h2>
              <p>
                If you can't find the used car parts you need for your vehicle
                at an affordable rate, consider searching our inventory to find
                the lowest prices.
              </p>
              <p>
                Shopping for used auto parts from our salvage yard is the only
                way to go if you’re looking to save time, save money, and keep
                your used vehicle on the road.
              </p>
              <p>
                It's not uncommon for auto salvage yards to offer used parts for
                significantly less than you'd pay at the dealership.
              </p>
              <p>
                A lot of times, it's because the parts are used, but in good
                working order. These parts are also offered at a reduced price
                since they are no longer under warranty.
              </p>
              <Img
                fluid={imgUsedAutoParts}
                title="Search Our Used Auto Parts Inventory"
                alt="Used truck parts available to purchase from our salvage yard"
                className="my-5"
              />
              <h2 className="pt-4 my-5">Give Us A Call To Find Your Parts</h2>
              <p>
                Not quite sure what parts you're looking for? Having any
                questions about our inventory or prices?
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
              <h2 className="text-center">What We Do</h2>
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

export default UsedAutoPartsPage;
