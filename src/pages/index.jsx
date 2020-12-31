import React from 'react';
import SEO from '../components/common/SEO/Seo';
import HeroHome from '../components/views/Home/HeroHome';
import AnswersHome from '../components/views/Home/AnswersHome';
import ReviewsHome from '../components/views/Home/ReviewsHome';
import ProcessHome from '../components/views/Home/ProcessHome';
import CompanyHome from '../components/views/Home/CompanyHome';

const IndexPage = () => {
  let canonical = typeof window !== 'undefined' ? window.location.href : '';

  return (
    <>
      <SEO
        title="Highest Cash For Junk Cars - Same Day Pick Up 24/7 | Angels Towing - Junk Car Mass"
        description="Angels Towing - Junk Car Mass will pay the highest amount of CASH for your junk car. We buy any vehicle make, model, and condition. Call (617) 997-6510 for your quote!"
        canonicalLink={canonical}
      />
      <HeroHome className="bg-img-hero-home" />
      <CompanyHome />
      <ProcessHome />
      <ReviewsHome />
      <AnswersHome />
    </>
  );
};

export default IndexPage;
