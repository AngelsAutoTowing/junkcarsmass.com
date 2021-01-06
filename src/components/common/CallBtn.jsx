import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Container } from 'react-bootstrap';

const CallBtn = () => {
  const data = useStaticQuery(graphql`
    query CallBtnQ {
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
    <a href={phone.phoneHref} className="call-btn fa-stack fa-2x">
      <i className="fas fa-circle fa-stack-2x text-secondary outline"></i>
      <i className="fas fa-phone fa-stack-1x text-white fa-inverse"></i>
    </a>
  );
};

export default CallBtn;
