import React from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';
import { Col, Container, Table } from 'react-bootstrap';
import SEO from '../components/common/SEO/Seo';
import Header from '../components/layouts/Header/Header';

const PrivacyPage = ({ pageContext, location }) => {
  const data = useStaticQuery(graphql`
    query PrivacyPageQ {
      masthead: file(
        relativePath: {
          eq: "assets/images/pages/privacy/privacy-policy-padlock-angels-towing-junk-car-mass.jpg"
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
        title="Privacy Policy - Your Privacy Is Critically Important To Us | Angels Towing - Junk Car Mass"
        description=""
        canonicalLink="https://junkcarsmass.com/privacy/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        alt="Metal padlock signifying privacy among our users"
        textMain="Privacy Policy"
        crumbs={crumbs}
        customCrumbLabel={customCrumbLabel}
      />
      <section id="privacy-page">
        <Container className="p-lg-5">
          <Container className="mx-auto py-3 px-5">
            <h2 className="mt-2 display-4 text-primary">
              Welcome to Our Privacy Policy
            </h2>
            <hr className="divider my-4" />
          </Container>
          <h3 className="text-left mt-5 mb-4">
            Your privacy is critically important to us.
          </h3>
          <p>
            It is Angels Towing - Junk Car Mass's policy to respect your privacy
            regarding any information We may collect while operating Our
            website. This Privacy Policy applies to{' '}
            <Link to="/" className="text-link-on-white">
              https://junkcarsmass.com
            </Link>{' '}
            (hereinafter, "We", "Us", "Our" or "
            <Link to="/" className="text-link-on-white">
              https://junkcarsmass.com
            </Link>
            "). We respect your privacy and We're committed to protecting
            personally identifiable information you may provide Us through the
            Website. We have adopted this privacy policy ("Privacy Policy") to
            explain what information may be collected on Our Website, how We use
            this information, and under what circumstances We may disclose the
            information to third parties. This Privacy Policy applies only to
            information We collect through the Website and does not apply to our
            collection of information from other sources.
          </p>
          <p>
            This Privacy Policy sets forth the general rules and policies
            governing your use of Our Website. Depending on your activities when
            visiting my Website, you may be required to agree to additional
            Terms and Conditions.
          </p>
          <h3 className="text-left mt-5 mb-4">Website Visitors</h3>
          <p>
            Like most website operators, Angels Towing - Junk Car Mass collects
            non-personally-identifying information of the sort that web browsers
            and servers typically make available, such as the browser type,
            language preference, referring site, and the date and time of each
            visitor request. Angels Towing - Junk Car Mass's purpose in
            collecting non-personally identifying information is to better
            understand how Angels Towing - Junk Car Mass's visitors use Our
            website. From time to time, MDH Construction may release
            non-personally-identifying information in the aggregate, e.g., by
            publishing a report on trends in the usage of its website.
          </p>
          <p>
            Angels Towing - Junk Car Mass also collects potentially
            personally-identifying information like Internet Protocol (IP)
            addresses for logged in users and for users leaving comments on{' '}
            <Link to="/" className="text-link-on-white">
              https://junkcarsmass.com
            </Link>{' '}
            blog posts. MDH Construction only discloses logged in user and
            commenter IP addresses under the same circumstances that it uses and
            discloses personally-identifying information as described below.
          </p>
          <h3 className="text-left mt-5 mb-4">
            Gathering of Personally-Identifying Information
          </h3>
          <p>
            Certain visitors to Angels Towing - Junk Car Mass's website choose
            to interact with Angels Towing - Junk Car Mass in ways that require
            Angels Towing - Junk Car Mass to gather personally-identifying
            information. The amount and type of information that Angels Towing -
            Junk Car Mass gathers depends on the nature of the interaction. For
            example, We ask visitors who sign up for a blog at{' '}
            <Link to="/" className="text-link-on-white">
              https://junkcarsmass.com
            </Link>{' '}
            to provide a username and email address.
          </p>
          <h3 className="text-left mt-5 mb-4">Security</h3>
          <p>
            The security of your Personal Information is important to Us, but
            remember that no method of transmission over the Internet, or method
            of electronic storage is 100% secure. While We strive to use
            commercially acceptable means to protect your Personal Information,
            We cannot guarantee its absolute security.
          </p>
          <h3 className="text-left mt-5 mb-4">Links To External Sites</h3>
          <p>
            Our Service may contain links to external sites that are not
            operated by Us. If you click on a third party link, you will be
            directed to that third party's site. We strongly advise you to
            review the Privacy Policy and Terms and Conditions of every site you
            visit.
          </p>
          <p>
            We have no control over, and assume no responsibility for the
            content, privacy policies or practices of any third party sites,
            products or services.
          </p>
          <h3 className="text-left mt-5 mb-4">
            Our Website uses Google Ads for Remarketing
          </h3>
          <p>
            <Link to="/" className="text-link-on-white">
              https://junkcarsmass.com
            </Link>{' '}
            uses the remarketing services to advertise on third party websites
            (including Google) to previous visitors to Our site. It could mean
            that We advertise to previous visitors who haven't completed a task
            on Our site, for example using the contact form to make an enquiry.
            This could be in the form of an advertisement on the Google search
            results page, or a site in the Google Display Network. Third-party
            vendors, including Google, use cookies to serve ads based on
            someone's past visits. Of course, any data collected will be used in
            accordance with Our own privacy policy and Google's privacy policy.
          </p>
          <p>
            You can set preferences for how Google advertises to you using the
            Google Ad Preferences page, and if you want to you can opt out of
            interest-based advertising entirely by cookie settings or
            permanently using a browser plugin.
          </p>
          <h3 className="text-left mt-5 mb-4">Aggregated Statistics</h3>
          <p>
            Angels Towing - Junk Car Mass may collect statistics about the
            behavior of visitors to our website. Angels Towing - Junk Car Mass
            may display this information publicly or provide it to others.
            However, MDH Construction does not disclose your
            personally-identifying information.
          </p>
          <h3 className="text-left mt-5 mb-4">Cookies</h3>
          <p>
            To enrich and perfect your online experience, Angels Towing - Junk
            Car Mass uses "Cookies", similar technologies and services provided
            by others to display personalized content, appropriate advertising
            and store your preferences on your computer.
          </p>
          <p>
            A cookie is a string of information that a website stores on a
            visitor's computer, and that the visitor's browser provides to the
            website each time the visitor returns. Angels Towing - Junk Car Mass
            uses cookies to help Angels Towing - Junk Car Mass identify and
            track visitors, their usage of{' '}
            <Link to="/" className="text-link-on-white">
              https://junkcarsmass.com
            </Link>
            , and their website access preferences. Angels Towing - Junk Car
            Mass visitors who do not wish to have cookies placed on their
            computers should set their browsers to refuse cookies before using
            Angels Towing - Junk Car Mass's websites, with the drawback that
            certain features of Angels Towing - Junk Car Mass's websites may not
            function properly without the aid of cookies.
          </p>
          <p>
            By continuing to navigate Our website without changing your cookie
            settings, you hereby acknowledge and agree to Angels Towing - Junk
            Car Mass's use of cookies.
          </p>
          <h3 className="text-left mt-5 mb-4">Privacy Policy Changes</h3>
          <p>
            Although most changes are likely to be minor, Angels Towing - Junk
            Car Mass may change its Privacy Policy from time to time, and in MDH
            Construction's sole discretion. Angels Towing - Junk Car Mass
            encourages visitors to frequently check this page for any changes to
            its Privacy Policy. Your continued use of this site after any change
            in this Privacy Policy will constitute your acceptance of such
            change.
          </p>
          <Container className="pt-5 px-0 px-lg-5">
            <p className="text-center mb-5 lead font-weight-bold">
              If you have any questions about this Privacy Policy, please
              contact us.
            </p>
            <Col xs={12} md={8} lg={6} className="mx-auto">
              <Container className="bg-dark border border-primary p-3 p-lg-3">
                <h3 className="text-center bg-contact-bar text-white p-2">
                  <span className="drop-shadow">Contact Us Today</span>
                </h3>
                <h4 className="text-left text-white">Address:</h4>
                <Container className="text-sans-serif d-flex mb-4 ml-3">
                  <i className="text-primary fas fa-2x fa-home mb-3"></i>
                  <a
                    className="ml-1-25 text-white"
                    href="https://goo.gl/maps/MZFJ1hR87hQpDgK16"
                    target="_blank"
                  >
                    87 County Rd
                    <br />
                    Plympton, MA 02367
                  </a>
                </Container>
                <h4 className="text-left text-white">Call Us:</h4>
                <Container className="text-sans-serif d-flex mb-4 ml-3">
                  <i className="text-primary fas fa-2x fa-phone mb-3"></i>
                  <a className="ml-3 text-white" href="tel:+17819363974">
                    (781) 936-3974
                  </a>
                </Container>
                <h4 className="text-left text-white">Email Us:</h4>
                <Container className="text-sans-serif d-flex mb-4 ml-3">
                  <i className="text-primary fas fa-2x fa-envelope mb-3"></i>
                  <a
                    className="ml-3 text-white"
                    href="mailto:angelstowing@hotmail.com?Subject=Important%20Email%20From%20Website"
                    target="_blank"
                    rel="nofollow"
                  >
                    angelstowing
                    <wbr />
                    @hotmail.com
                    <wbr />
                    .com
                  </a>
                </Container>
                <h4 className="text-left text-white">Hours of Operation:</h4>
                <Container className="text-sans-serif d-flex ml-3">
                  <i className="text-primary fas fa-2x fa-clock mt-2"></i>
                  <Table
                    className="ml-2 font-weight-bold text-white nap-text"
                    borderless
                    size="sm"
                  >
                    <tbody>
                      <tr>
                        <td>Monday</td>
                        <td>7AM–5PM</td>
                      </tr>
                      <tr>
                        <td>Tuesday</td>
                        <td>7AM–5PM</td>
                      </tr>
                      <tr>
                        <td>Wednesday</td>
                        <td>7AM–5PM</td>
                      </tr>
                      <tr>
                        <td>Thursday</td>
                        <td>7AM–5PM</td>
                      </tr>
                      <tr>
                        <td>Friday</td>
                        <td>7AM–5PM</td>
                      </tr>
                      <tr>
                        <td>Saturday</td>
                        <td>7AM–2PM</td>
                      </tr>
                      <tr>
                        <td>Sunday</td>
                        <td className="text-primary">Closed</td>
                      </tr>
                    </tbody>
                  </Table>
                </Container>
              </Container>
            </Col>
          </Container>
        </Container>
      </section>
    </>
  );
};

export default PrivacyPage;
