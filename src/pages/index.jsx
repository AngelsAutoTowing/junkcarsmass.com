import React from 'react';
import SEO from '../components/common/SEO/Seo';
import HeroHome from '../components/views/Home/HeroHome';
import AnswersHome from '../components/views/Home/AnswersHome';
import ReviewsHome from '../components/views/Home/ReviewsHome';
import ProcessHome from '../components/views/Home/ProcessHome';
import CompanyHome from '../components/views/Home/CompanyHome';

const IndexPage = () => {
  return (
    <>
      <SEO
        title="Cash For Junk Cars - Junk Car Removal - MA & RI | Angels Towing - Junk Car Mass"
        description="We pay cash for junk cars - MA & RI. Get EXTRA for Toyota & Honda. Junk car removal 24/7, same-day pickup, free towing, any condition. Call (781) 243-1927"
        canonicalLink="https://junkcarsmass.com/"
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
