import React from 'react';
import { Container, Row, Col, Table } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';

import ImgTowTruck from '../../images/Pages/Home/img-tow-truck';
import ButtonExternalLink from '../../common/Buttons/ButtonExternalLink/ButtonExternalLink';
import IconCashPayments from '../../../assets/svg/big-cash-payments-junk-cars-angels-auto-towing.svg';
import IconTowTruck from '../../../assets/svg/same-day-pick-up-angels-auto-towing-boston-ma.svg';
import IconExperience from '../../../assets/svg/experience-professional-angels-auto-towing-plympton-ma.svg';
import IconSatisfaction from '../../../assets/svg/custom-satisfaction-angels-auto-towing-plymouth-county-ma.svg';

const CompanyHome = () => {
  const data = useStaticQuery(graphql`
    query CompanyHomeQ {
      phoneNumber: site {
        siteMetadata {
          phoneDisplay
          phoneHref
        }
      }
    }
  `);

  const phone = data.phoneNumber.siteMetadata;
  return (
    <section className="bg-light">
      <Container className="bg-light py-5">
        <Row>
          <Col xs={12} lg={6} className="px-4">
            <Container className="bg-dark text-white p-5">
              <p className="display-5 font-weight-bold text-center text-primary">
                WHAT SETS US APART?
              </p>
              <Table responsive borderless className="text-white mt-4">
                <tbody>
                  <tr>
                    <th>
                      <IconCashPayments className="svg-bullet-icons" />
                    </th>
                    <th className="v-align-middle lead">Bigger cash payouts</th>
                  </tr>
                  <tr>
                    <th>
                      <IconTowTruck className="svg-bullet-icons" />
                    </th>
                    <th className="v-align-middle lead">Same day pick up</th>
                  </tr>
                  <tr>
                    <th>
                      <IconExperience className="svg-bullet-icons" />
                    </th>
                    <th className="v-align-middle lead">
                      Experienced & professional
                    </th>
                  </tr>
                  <tr>
                    <th>
                      <IconSatisfaction className="svg-bullet-icons" />
                    </th>
                    <th className="v-align-middle lead">
                      Customer satisfaction guaranteed
                    </th>
                  </tr>
                </tbody>
              </Table>
            </Container>
          </Col>
          <Col xs={12} lg={6} className="px-4 mt-5 mt-lg-0">
            <p className="lead font-weight-bold font-italic">
              A TRUSTED FAMILY OWNED BUSINESS
            </p>
            <h2 className="font-weight-bold text-secondary mb-4 text-left">
              Angels Towing - Junk Car Mass in Plympton, MA 02367
            </h2>
            <p>
              Since 2000, Angels Towing - Junk Car Mass has been a local,
              family-owned and operated business. We take great pride in serving
              our community, building strong customer relationships, and
              providing reliable junk car removal services.
            </p>
            <p className="lead font-weight-bold pt-4 text-green">
              DOING OUR PART TO HELP THE ENVIRONMENT
            </p>
            <p>
              By selling your junk car and recycling the scrap metal, you can go
              green and create many lasting benefits throughout your community.
              Let's build a clean and sustainable environment together!
            </p>
            <Container className="mt-5 mx-0 px-0 text-center text-lg-left">
              <ButtonExternalLink
                btnLabel="Call Us Today"
                btnLink={phone.phoneHref}
              />
            </Container>
          </Col>
        </Row>
        <Container className="mt-5 pt-5">
          <ImgTowTruck />
        </Container>
      </Container>
    </section>
  );
};

export default CompanyHome;
