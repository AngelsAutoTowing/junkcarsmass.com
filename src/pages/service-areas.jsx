import React from 'react';
import { graphql, Link, useStaticQuery } from 'gatsby';
import { Accordion, Card, Col, Container, Row } from 'react-bootstrap';

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
      phoneNumber: site {
        siteMetadata {
          phoneDisplay
          phoneHref
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
        title={`Junk Car Removal Service Areas - Boston, MA - Providence, RI | ${siteMetadata.title}`}
        description={`Check our junk car removal service areas to verify your location. We will pay cash for your junk car and tow it for free. Call ${phone.phoneDisplay} for free quote`}
        canonicalLink="https://junkcarsmass.com/service-areas/"
      />
      <Header
        Tag="header"
        className="bg-img-page-top"
        fluid={imageDataHeader}
        alt={`${siteMetadata.title}'s service area map of Massachusetts and Rhode Island for junk car removal and cash for junk car services`}
        textMain="MA & RI Junk Car Removal Service Areas"
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
              <Img
                fluid={imgContentTop}
                title="Boston, MA junk car removal service area"
                alt="Boston, MA city skyline, we pickup junk cars in and around Boston, Massachusetts from the north shore to the south shore."
                className="my-5"
              />
              <h3>Our Location</h3>
              <p className="no-drop-shadow mb-5">
                Our junkyard is centrally located at{' '}
                <a
                  href="https://www.google.com/maps?cid=13760398526388246013"
                  target="_blank"
                  className="text-secondary"
                >
                  87 County Rd, Plympton, MA 02367
                </a>
                . We service a 40-mile radius around our location, so this
                includes Massachusetts and Rhode Island.
              </p>
              <h3>Massachusetts</h3>
              <p className="mb-5">
                Our tow trucks will travel throughout{' '}
                <Link to="/massachusetts/" className="text-secondary">
                  Massachusetts
                </Link>{' '}
                to Boston, North Shore, Central MA (Worcester), South Shore,
                South Coast (Fall River), and Cape Cod.
              </p>
              <Container className="mt-4 my-lg-5 p-3 justify-content-center align-items-center rounded">
                <Accordion className="drop-shadow">
                  <Card className="accordion-animation">
                    <Accordion.Toggle
                      className="d-flex align-content-center bg-dark"
                      as={Card.Header}
                      eventKey="1"
                    >
                      <span className="mr-3 mt-1">
                        <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                      </span>
                      <h3 className="accordionText mb-2 text-left font-weight-normal d-inline-block">
                        Barnstable County
                      </h3>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body className="px-0 px-lg-3">
                        <Row>
                          <Col xs={12} lg={4}>
                            <ul className="mb-2 mb-lg-3">
                              <li>Barnstable</li>
                              <li>Bourne</li>
                              <li>Brewster</li>
                              <li>Chatham</li>
                              <li>Dennis</li>
                              <li>Eastham</li>
                              <li>Falmouth</li>
                              <li>Harwich</li>
                              <li>Mashpee</li>
                              <li>Orleans</li>
                            </ul>
                          </Col>
                          <Col xs={12} lg={4}>
                            <ul className="mb-2 mb-lg-3">
                              <li>Provincetown</li>
                              <li>Sandwich</li>
                              <li>Truro</li>
                              <li>Wellfleet</li>
                              <li>Yarmouth</li>
                            </ul>
                          </Col>
                          <Col xs={12} lg={4}>
                            <ul className="mb-2 mb-lg-3"></ul>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card className="accordion-animation">
                    <Accordion.Toggle
                      className="d-flex align-content-center bg-dark"
                      as={Card.Header}
                      eventKey="2"
                    >
                      <span className="mr-3 mt-1">
                        <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                      </span>
                      <h3 className="accordionText mb-2 text-left font-weight-normal d-inline-block">
                        Bristol County
                      </h3>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="2">
                      <Card.Body className="px-0 px-lg-3">
                        <Row>
                          <Col xs={12} lg={4}>
                            <ul className="mb-2 mb-lg-3">
                              <li>Acushnet</li>
                              <li>Attleboro</li>
                              <li>Berkley</li>
                              <li>Dartmouth</li>
                              <li>Dighton</li>
                              <li>Easton</li>
                              <li>Fairhaven</li>
                              <li>Fall River</li>
                              <li>Freetown</li>
                              <li>Mansfield</li>
                            </ul>
                          </Col>
                          <Col xs={12} lg={4}>
                            <ul className="mb-2 mb-lg-3">
                              <li>New Bedford</li>
                              <li>North Attleborough</li>
                              <li>Norton</li>
                              <li>Raynham</li>
                              <li>Rehoboth</li>
                              <li>Seekonk</li>
                              <li>Somerset</li>
                              <li>Swansea</li>
                              <li>Taunton</li>
                              <li>Westport</li>
                            </ul>
                          </Col>
                          <Col xs={12} lg={4}>
                            <ul className="mb-2 mb-lg-3"></ul>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card className="accordion-animation">
                    <Accordion.Toggle
                      className="d-flex align-content-center bg-dark"
                      as={Card.Header}
                      eventKey="3"
                    >
                      <span className="mr-3 mt-1">
                        <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                      </span>
                      <h3 className="accordionText mb-2 text-left font-weight-normal d-inline-block">
                        Essex County
                      </h3>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="3">
                      <Card.Body className="px-0 px-lg-3">
                        <Row>
                          <Col xs={12} lg={4}>
                            <ul className="mb-2 mb-lg-3">
                              <li>Amesbury</li>
                              <li>Andover</li>
                              <li>Beverly</li>
                              <li>Boxford</li>
                              <li>Danvers</li>
                              <li>Essex</li>
                              <li>Georgetown</li>
                              <li>Gloucester</li>
                              <li>Groveland</li>
                              <li>Hamilton</li>
                              <li>Haverhill</li>
                              <li>Ipswich</li>
                            </ul>
                          </Col>
                          <Col xs={12} lg={4}>
                            <ul className="mb-2 mb-lg-3">
                              <li>Lawrence</li>
                              <li>Lynn</li>
                              <li>Lynnfield</li>
                              <li>Manchester By The Sea</li>
                              <li>Marblehead</li>
                              <li>Merrimac</li>
                              <li>Methuen</li>
                              <li>Middleton</li>
                              <li>Nahant</li>
                              <li>Newbury</li>
                              <li>Newburyport</li>
                              <li>North Andover</li>
                            </ul>
                          </Col>
                          <Col xs={12} lg={4}>
                            <ul className="mb-2 mb-lg-3">
                              <li>Peabody</li>
                              <li>Rockport</li>
                              <li>Rowley</li>
                              <li>Salem</li>
                              <li>Salisbury</li>
                              <li>Saugus</li>
                              <li>Swampscott</li>
                              <li>Topsfield</li>
                              <li>Wenham</li>
                              <li>West Newbury</li>
                            </ul>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card className="accordion-animation">
                    <Accordion.Toggle
                      className="d-flex align-content-center bg-dark"
                      as={Card.Header}
                      eventKey="4"
                    >
                      <span className="mr-3 mt-1">
                        <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                      </span>
                      <h3 className="accordionText mb-2 text-left font-weight-normal d-inline-block">
                        Middlesex County
                      </h3>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="4">
                      <Card.Body className="px-0 px-lg-3">
                        <Row>
                          <Col xs={12} lg={4}>
                            <ul className="mb-2 mb-lg-3">
                              <li>Acton</li>
                              <li>Arlington</li>
                              <li>Ashby</li>
                              <li>Ashland</li>
                              <li>Ayer</li>
                              <li>Bedford</li>
                              <li>Belmont</li>
                              <li>Billerica</li>
                              <li>Boxborough</li>
                              <li>Burlington</li>
                              <li>Cambridge</li>
                              <li>Carlisle</li>
                              <li>Chelmsford</li>
                              <li>Concord</li>
                              <li>Dracut</li>
                              <li>Dunstable</li>
                              <li>Everett</li>
                              <li>Framingham</li>
                              <li>Groton</li>
                              <li>Holliston</li>
                            </ul>
                          </Col>
                          <Col xs={12} lg={4}>
                            <ul className="mb-2 mb-lg-3">
                              <li>Hopkinton</li>
                              <li>Hudson</li>
                              <li>Lexington</li>
                              <li>Lincoln</li>
                              <li>Littleton</li>
                              <li>Lowell</li>
                              <li>Malden</li>
                              <li>Marlborough</li>
                              <li>Maynard</li>
                              <li>Medford</li>
                              <li>Melrose</li>
                              <li>Natick</li>
                              <li>Newton</li>
                              <li>North Reading</li>
                              <li>Pepperell</li>
                              <li>Reading</li>
                              <li>Sherborn</li>
                              <li>Shirley</li>
                              <li>Somerville</li>
                              <li>Stoneham</li>
                            </ul>
                          </Col>
                          <Col xs={12} lg={4}>
                            <ul className="mb-2 mb-lg-3">
                              <li>Stow</li>
                              <li>Sudbury</li>
                              <li>Tewksbury</li>
                              <li>Townsend</li>
                              <li>Tyngsborough</li>
                              <li>Wakefield</li>
                              <li>Waltham</li>
                              <li>Watertown</li>
                              <li>Wayland</li>
                              <li>Westford</li>
                              <li>Weston</li>
                              <li>Wilmington</li>
                              <li>Winchester</li>
                              <li>Woburn</li>
                            </ul>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card className="accordion-animation">
                    <Accordion.Toggle
                      className="d-flex align-content-center bg-dark"
                      as={Card.Header}
                      eventKey="5"
                    >
                      <span className="mr-3 mt-1">
                        <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                      </span>
                      <h3 className="accordionText mb-2 text-left font-weight-normal d-inline-block">
                        Norfolk County
                      </h3>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="5">
                      <Card.Body className="px-0 px-lg-3">
                        <Row>
                          <Col xs={12} lg={4}>
                            <ul className="mb-2 mb-lg-3">
                              <li>Avon</li>
                              <li>Bellingham</li>
                              <li>Braintree</li>
                              <li>Brookline</li>
                              <li>Canton</li>
                              <li>Cohasset</li>
                              <li>Dedham</li>
                              <li>Dover</li>
                              <li>Foxborough</li>
                              <li>Franklin</li>
                            </ul>
                          </Col>
                          <Col xs={12} lg={4}>
                            <ul className="mb-2 mb-lg-3">
                              <li>Holbrook</li>
                              <li>Medfield</li>
                              <li>Medway</li>
                              <li>Millis</li>
                              <li>Milton</li>
                              <li>Needham</li>
                              <li>Norfolk</li>
                              <li>Norwood</li>
                              <li>Plainville</li>
                              <li>Quincy</li>
                            </ul>
                          </Col>
                          <Col xs={12} lg={4}>
                            <ul className="mb-2 mb-lg-3">
                              <li>Randolph</li>
                              <li>Sharon</li>
                              <li>Stoughton</li>
                              <li>Walpole</li>
                              <li>Wellesley</li>
                              <li>Westwood</li>
                              <li>Weymouth</li>
                              <li>Wrentham</li>
                            </ul>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card className="accordion-animation">
                    <Accordion.Toggle
                      className="d-flex align-content-center bg-dark"
                      as={Card.Header}
                      eventKey="6"
                    >
                      <span className="mr-3 mt-1">
                        <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                      </span>
                      <h3 className="accordionText mb-2 text-left font-weight-normal d-inline-block">
                        Plymouth County
                      </h3>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="6">
                      <Card.Body className="px-0 px-lg-3">
                        <Row>
                          <Col xs={12} lg={4}>
                            <ul className="mb-2 mb-lg-3">
                              <li>Abington</li>
                              <li>Bridgewater</li>
                              <li>Brockton</li>
                              <li>Carver</li>
                              <li>Duxbury</li>
                              <li>East Bridgewater</li>
                              <li>Halifax</li>
                              <li>Hanover</li>
                              <li>Hanson</li>
                              <li>Hingham</li>
                            </ul>
                          </Col>
                          <Col xs={12} lg={4}>
                            <ul className="mb-2 mb-lg-3">
                              <li>Hull</li>
                              <li>Kingston</li>
                              <li>Lakeville</li>
                              <li>Marion</li>
                              <li>Marshfield</li>
                              <li>Mattapoisett</li>
                              <li>Middleborough</li>
                              <li>Norwell</li>
                              <li>Pembroke</li>
                              <li>Plymouth</li>
                            </ul>
                          </Col>
                          <Col xs={12} lg={4}>
                            <ul className="mb-2 mb-lg-3">
                              <li>Plympton</li>
                              <li>Rochester</li>
                              <li>Rockland</li>
                              <li>Scituate</li>
                              <li>Wareham</li>
                              <li>West Bridgewater</li>
                              <li>Whitman</li>
                            </ul>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card className="accordion-animation">
                    <Accordion.Toggle
                      className="d-flex align-content-center bg-dark"
                      as={Card.Header}
                      eventKey="7"
                    >
                      <span className="mr-3 mt-1">
                        <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                      </span>
                      <h3 className="accordionText mb-2 text-left font-weight-normal d-inline-block">
                        Suffolk County
                      </h3>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="7">
                      <Card.Body className="px-0 px-lg-3">
                        <Row>
                          <Col xs={12} lg={4}>
                            <ul className="mb-2 mb-lg-3">
                              <li>
                                <Link
                                  to="/massachusetts/boston/"
                                  className="text-secondary font-weight-bold"
                                >
                                  Boston
                                </Link>
                              </li>
                              <li>Chelsea</li>
                              <li>Revere</li>
                              <li>Winthrop</li>
                            </ul>
                          </Col>
                          <Col xs={12} lg={4}>
                            <ul className="mb-2 mb-lg-3"></ul>
                          </Col>
                          <Col xs={12} lg={4}>
                            <ul className="mb-2 mb-lg-3"></ul>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                  <Card className="accordion-animation">
                    <Accordion.Toggle
                      className="d-flex align-content-center bg-dark"
                      as={Card.Header}
                      eventKey="8"
                    >
                      <span className="mr-3 mt-1">
                        <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                      </span>
                      <h3 className="accordionText mb-2 text-left font-weight-normal d-inline-block">
                        Worcester County
                      </h3>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="8">
                      <Card.Body className="px-0 px-lg-3">
                        <Row>
                          <Col xs={12} lg={4}>
                            <ul className="mb-2 mb-lg-3">
                              <li>Ashburnham</li>
                              <li>Athol</li>
                              <li>Auburn</li>
                              <li>Barre</li>
                              <li>Berlin</li>
                              <li>Blackstone</li>
                              <li>Bolton</li>
                              <li>Boylston</li>
                              <li>Brookfield</li>
                              <li>Charlton</li>
                              <li>Clinton</li>
                              <li>Douglas</li>
                              <li>Dudley</li>
                              <li>East Brookfield</li>
                              <li>Fitchburg</li>
                              <li>Gardner</li>
                              <li>Grafton</li>
                              <li>Hardwick</li>
                              <li>Harvard</li>
                              <li>Holden</li>
                            </ul>
                          </Col>
                          <Col xs={12} lg={4}>
                            <ul className="mb-2 mb-lg-3">
                              <li>Hopedale</li>
                              <li>Hubbardston</li>
                              <li>Lancaster</li>
                              <li>Leicester</li>
                              <li>Leominster</li>
                              <li>Lunenburg</li>
                              <li>Mendon</li>
                              <li>Milford</li>
                              <li>Millbury</li>
                              <li>Millville</li>
                              <li>New Braintree</li>
                              <li>North Brookfield</li>
                              <li>Northborough</li>
                              <li>Northbridge</li>
                              <li>Oakham</li>
                              <li>Oxford</li>
                              <li>Paxton</li>
                              <li>Petersham</li>
                              <li>Phillipston</li>
                              <li>Princeton</li>
                            </ul>
                          </Col>
                          <Col xs={12} lg={4}>
                            <ul className="mb-2 mb-lg-3">
                              <li>Royalston</li>
                              <li>Rutland</li>
                              <li>Shrewsbury</li>
                              <li>Southborough</li>
                              <li>Southbridge</li>
                              <li>Spencer</li>
                              <li>Sterling</li>
                              <li>Sturbridge</li>
                              <li>Sutton</li>
                              <li>Templeton</li>
                              <li>Upton</li>
                              <li>Uxbridge</li>
                              <li>Warren</li>
                              <li>Webster</li>
                              <li>West Boylston</li>
                              <li>West Brookfield</li>
                              <li>Westborough</li>
                              <li>Westminster</li>
                              <li>Winchendon</li>
                              <li>Worcester</li>
                            </ul>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Container>
              <h3>Rhode Island</h3>
              <p className="mb-5">
                Our tow trucks only travel to the metro Providence area. We
                prefer not to go any further than the city limits. If you have
                any questions about your location, please just give us a call at{' '}
                <a
                  className="font-weight-bold text-secondary"
                  href={phone.phoneHref}
                >
                  {phone.phoneDisplay}
                </a>
                .
              </p>
              <Container className="mt-4 my-lg-5 p-3 justify-content-center align-items-center rounded">
                <Accordion className="drop-shadow">
                  <Card className="accordion-animation">
                    <Accordion.Toggle
                      className="d-flex align-content-center bg-dark"
                      as={Card.Header}
                      eventKey="1"
                    >
                      <span className="mr-3 mt-1">
                        <i className="fas fa-plus-circle text-primary accordionIcon"></i>
                      </span>
                      <h3 className="accordionText mb-2 text-left font-weight-normal d-inline-block">
                        Providence County
                      </h3>
                    </Accordion.Toggle>
                    <Accordion.Collapse eventKey="1">
                      <Card.Body className="px-0 px-lg-3">
                        <Row>
                          <Col xs={12} lg={4}>
                            <ul className="mb-2 mb-lg-3">
                              <li>Central Falls</li>
                              <li>Chepachet</li>
                              <li>Clayville</li>
                              <li>Cranston</li>
                              <li>Cumberland Hill</li>
                              <li>East Providence</li>
                              <li>Foster Center</li>
                              <li>Greenville</li>
                              <li>Harmony</li>
                              <li>Harrisville</li>
                            </ul>
                          </Col>
                          <Col xs={12} lg={4}>
                            <ul className="mb-2 mb-lg-3">
                              <li>Pascoag</li>
                              <li>Pawtucket</li>
                              <li>Providence</li>
                              <li>Valley Falls</li>
                              <li>Woonsocket</li>
                            </ul>
                          </Col>
                          <Col xs={12} lg={4}>
                            <ul className="mb-2 mb-lg-3"></ul>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Accordion.Collapse>
                  </Card>
                </Accordion>
              </Container>
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

export default ServiceAreasPage;
