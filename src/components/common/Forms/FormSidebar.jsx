import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Col, Container } from 'react-bootstrap';
import { graphql, useStaticQuery } from 'gatsby';

const FormSidebar = () => {
  const [contact, setContact] = useState({
    fullName: '',
    phone: '',
    email: '',
    pickupLocation: '',
    make: '',
    model: '',
    year: '',
    findUs: '',
  });

  const {
    fullName,
    phone,
    email,
    pickupLocation,
    make,
    model,
    year,
    findUs,
  } = contact;

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  const data = useStaticQuery(graphql`
    query FormSidebarQ {
      phoneNumber: site {
        siteMetadata {
          phoneDisplay
          phoneHref
        }
      }
    }
  `);

  const phoneNumber = data.phoneNumber.siteMetadata;

  return (
    <Form
      name="form-sidebar"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="bg-dark border border-primary rounded shadow p-2 p-md-4"
      id="form-sidebar"
    >
      <p className="lead text-primary font-weight-bold text-center mb-1 mt-3 mt-lg-0">
        REQUEST CAR REMOVAL
      </p>
      <hr className="divider pb-3 drop-shadow" />
      <Container className="pt-2 pb-4">
        <p className="text-light">
          Wondering what your junk car is worth? Need to get that clunker picked
          up right away?
        </p>
        <p className="text-light">
          Give us a call at{' '}
          <a className="font-weight-bold" href={phoneNumber.phoneHref}>
            {phoneNumber.phoneDisplay}
          </a>{' '}
          or fill out the form below.
        </p>
      </Container>
      <input type="hidden" name="form-name" value="form-sidebar" />
      <Container>
        <Form.Row>
          <Col xs={12} className="order-1 order-lg-1">
            <Form.Group
              className="text-secondary"
              controlId="formSidebarFullName"
            >
              <Form.Control
                name="fullName"
                type="text"
                value={fullName}
                onChange={handleChange}
                placeholder="Full Name"
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} className="order-2 order-lg-1">
            <Form.Group controlId="formSidebarPhone">
              <Form.Control
                name="phone"
                type="tel"
                value={phone}
                onChange={handleChange}
                placeholder="Phone Number"
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} className="order-3 order-lg-1">
            <Form.Group controlId="formSidebarEmail">
              <Form.Control
                name="email"
                type="email"
                value={email}
                onChange={handleChange}
                placeholder="Email"
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} className="order-4 order-lg-1">
            <Form.Group controlId="formSidebarPickupLocation">
              <Form.Control
                name="pickupLocation"
                type="text"
                value={pickupLocation}
                onChange={handleChange}
                placeholder="Pickup Location"
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} className="order-5 order-lg-1">
            <Form.Group controlId="formSidebarMake">
              <Form.Control
                name="make"
                type="text"
                value={make}
                onChange={handleChange}
                placeholder="Make"
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} className="order-6 order-lg-1">
            <Form.Group controlId="formSidebarModel">
              <Form.Control
                name="model"
                type="text"
                value={model}
                onChange={handleChange}
                placeholder="Model"
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} className="order-7 order-lg-1">
            <Form.Group controlId="formSidebarYear">
              <Form.Control
                name="year"
                type="text"
                value={year}
                onChange={handleChange}
                placeholder="Year"
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} className="order-8 order-lg-1">
            <Form.Group controlId="formSidebarFindUs">
              <Form.Control
                name="findUs"
                as="select"
                value={findUs}
                onChange={handleChange}
                required
              >
                <option value="" disabled hidden>
                  How Did You Find Us?
                </option>
                <option value="Website (Yellowpages, etc.)">
                  Directory (Yellowpages, etc.)
                </option>
                <option value="Facebook" className="bg-light">
                  Facebook
                </option>
                <option value="Family/Friend">Family/Friend</option>
                <option value="Google Ads" className="bg-light">
                  Google Ads
                </option>
                <option value="Google Search">Google Search</option>
                <option value="Referral" className="bg-light">
                  Referral
                </option>
              </Form.Control>
            </Form.Group>
          </Col>
        </Form.Row>
      </Container>

      <div className="text-center">
        <Button
          className="btn btn-xl drop-shadow mt-4 mb-4 mb-lg-0"
          type="submit"
          value="Submit"
        >
          <span>Get My Cash</span>
        </Button>
      </div>
    </Form>
  );
};

Form.defaultProps = {
  formname: `contact-form-sidebar`,
};

Button.propTypes = {
  formname: PropTypes.string,
};

export default FormSidebar;
