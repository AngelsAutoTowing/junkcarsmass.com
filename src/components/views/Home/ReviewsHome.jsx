import React from 'react';
import { Container, Row, Col, Carousel, CarouselItem } from 'react-bootstrap';
import ImgReviewRyan from '../../images/Pages/Home/img-review-ryan';
import ImgReviewYves from '../../images/Pages/Home/img-review-yves';

const ReviewsHome = () => {
  return (
    <section className="section-no-margin bg-light-gray page-section">
      <Container className="py-5">
        <h2 className="display-4 font-weight-bold text-secondary mb-5 pb-5">
          #1 Junk Car Removal Service
        </h2>
        <Carousel
          interval={null}
          className="bg-dark rounded shadow-lg mx-lg-5 px-3 px-lg-0"
        >
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
                      Positive: Professionalism, Punctuality, Quality, Value
                    </p>
                    <p className="lead text-left">
                      Very knowledgeable, great price for used parts. Friendly!
                      I like it so much that I applied for a job here!
                    </p>
                    <p className="lead font-italic text-right mb-0">- Ryan</p>
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
    </section>
  );
};

export default ReviewsHome;
