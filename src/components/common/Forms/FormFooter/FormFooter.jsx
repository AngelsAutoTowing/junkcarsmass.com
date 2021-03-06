import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Form, Button, Col, Container } from 'react-bootstrap';

const FormFooter = () => {
  const [contact, setContact] = useState({
    fullName: '',
    phone: '',
    email: '',
    pickupLocation: '',
    make: '',
    model: '',
    year: '',
    foundUs: '',
  });

  const {
    fullName,
    phone,
    email,
    pickupLocation,
    make,
    model,
    year,
    foundUs,
  } = contact;

  const handleChange = (e) =>
    setContact({ ...contact, [e.target.name]: e.target.value });

  return (
    <Form
      name="form-footer"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      className="bg-light border border-primary rounded shadow p-2 p-md-4"
      id="form-footer"
    >
      <p className="display-5 text-secondary text-center font-weight-bold mb-1 mt-3 mt-lg-0">
        REQUEST CAR REMOVAL
      </p>
      <hr className="divider pb-5 drop-shadow" />
      <input type="hidden" name="form-name" value="form-footer" />
      <Container>
        <Form.Row>
          <Col xs={12} lg={6} className="order-1 order-lg-1">
            <Form.Group
              className="text-secondary"
              controlId="formFooterFullName"
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
          <Col xs={12} lg={6} className="order-2 order-lg-1">
            <Form.Group controlId="formFooterPhone">
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
          <Col xs={12} lg={6} className="order-3 order-lg-1">
            <Form.Group controlId="formFooterEmail">
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
          <Col xs={12} lg={6} className="order-4 order-lg-1">
            <Form.Group controlId="formFooterPickupLocation">
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
          <Col xs={12} lg={6} className="order-5 order-lg-1">
            <Form.Group controlId="formFooterMake">
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
          <Col xs={12} lg={6} className="order-6 order-lg-1">
            <Form.Group controlId="formFooterModel">
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
          <Col xs={12} lg={6} className="order-7 order-lg-1">
            <Form.Group controlId="formFooterYear">
              <Form.Control
                name="year"
                type="number"
                value={year}
                onChange={handleChange}
                placeholder="Year"
                required
              />
            </Form.Group>
          </Col>
          <Col xs={12} lg={6} className="order-8 order-lg-1">
            <Form.Group controlId="formFooterFindUs">
              <Form.Control
                name="foundUs"
                as="select"
                value={foundUs}
                onChange={handleChange}
                required
              >
                <option value="" disabled hidden>
                  Found Us?
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
  formname: `form-footer`,
};

Button.propTypes = {
  formname: PropTypes.string,
};

export default FormFooter;
