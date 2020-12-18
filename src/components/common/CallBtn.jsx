import React from 'react';
import { Container } from 'react-bootstrap';

const CallBtn = () => {
  return (
    <a href="tel:+16179976510" className="call-btn fa-stack fa-2x">
      <i className="fas fa-circle fa-stack-2x text-secondary outline"></i>
      <i className="fas fa-phone fa-stack-1x text-white fa-inverse"></i>
    </a>
  );
};

export default CallBtn;
