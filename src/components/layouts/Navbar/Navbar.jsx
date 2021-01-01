import React, { useState, useEffect } from 'react';
import { Link } from 'gatsby';
import { Container, Row, Col } from 'react-bootstrap';
import SubNavbar from './SubNavbar';
import ImgAngelsLogo from '../../images/Logos/img-angels-logo';

const Navbar = () => {
  const [isMobileNavActive, setIsMobileNavActive] = useState(false);

  const handleMobileNavToggle = () => {
    setIsMobileNavActive(!isMobileNavActive);
  };

  // const [mobileMenuDropdown, setMobileMenuDropdown] = useState({
  //   whoWeAre: false,
  //   whatWeDo: false,
  //   howWeHelp: false,
  // });

  // const { whoWeAre, whatWeDo, howWeHelp } = mobileMenuDropdown;

  // const handleChange = (e) => {
  //   const id = e.target.id;

  //   setMobileMenuDropdown({ ...mobileMenuDropdown, [id]: true });

  //   console.log(id);
  // };

  const [isMobileDropdownWhoActive, setIsMobileDropdownWhoActive] = useState(
    false
  );

  const [isMobileDropdownWhatActive, setIsMobileDropdownWhatActive] = useState(
    false
  );

  const [isMobileDropdownHowActive, setIsMobileDropdownHowActive] = useState(
    false
  );

  const handleMobileDropdownWhoToggle = () => {
    setIsMobileDropdownWhoActive(!isMobileDropdownWhoActive);
  };

  const handleMobileDropdownWhatToggle = () => {
    setIsMobileDropdownWhatActive(!isMobileDropdownWhatActive);
  };

  const handleMobileDropdownHowToggle = () => {
    setIsMobileDropdownHowActive(!isMobileDropdownHowActive);
  };

  return (
    <nav id="navbar" className="navbar">
      <Container fluid className="px-0 mx-0">
        <SubNavbar />
        <Row noGutters className="nav-main">
          <Link to="/" className="nav-logo">
            <ImgAngelsLogo />
          </Link>
          <ul
            className={
              isMobileNavActive
                ? 'nav-main-items nav-mobile-active'
                : 'nav-main-items'
            }
          >
            <ul className="nav-main-links">
              <li>
                <Link
                  to="/"
                  onClick={handleMobileNavToggle}
                  className="underline"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link to="#" onClick={handleMobileDropdownWhoToggle}>
                  Who We Are <i className="fas fa-chevron-down ml-1"></i>
                </Link>

                <ul
                  className={
                    isMobileDropdownWhoActive
                      ? 'nav-main-dropdown nav-mobile-dropdown-active'
                      : 'nav-main-dropdown'
                  }
                >
                  <li>
                    <Link
                      to="/about/"
                      onClick={handleMobileNavToggle}
                      className="underline"
                    >
                      About Us
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/service-areas/"
                      onClick={handleMobileNavToggle}
                      className="underline"
                    >
                      Service Areas
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/reviews/"
                      onClick={handleMobileNavToggle}
                      className="underline"
                    >
                      Reviews
                    </Link>
                  </li>
                </ul>
              </li>
              <li>
                <Link
                  to="#"
                  id="whatWeDo"
                  onClick={handleMobileDropdownWhatToggle}
                >
                  What We Do <i className="fas fa-chevron-down ml-1"></i>
                </Link>

                <ul
                  className={
                    isMobileDropdownWhatActive
                      ? 'nav-main-dropdown nav-mobile-dropdown-active'
                      : 'nav-main-dropdown'
                  }
                >
                  <li>
                    <Link
                      to="/cash-for-junk-cars/"
                      onClick={handleMobileNavToggle}
                      className="underline"
                    >
                      Cash For Junk Cars
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      to="/scrap-metal/"
                      onClick={handleMobileNavToggle}
                      className="underline"
                    >
                      Scrap Metal
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/towing/"
                      onClick={handleMobileNavToggle}
                      className="underline"
                    >
                      Towing
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/auto-parts/"
                      onClick={handleMobileNavToggle}
                      className="underline"
                    >
                      Auto Parts
                    </Link>
                  </li> */}
                </ul>
              </li>
              {/* <li>
                <Link
                  to="#"
                  id="howWeHelp"
                  onClick={handleMobileDropdownHowToggle}
                >
                  How We Help <i className="fas fa-chevron-down ml-1"></i>
                </Link>

                <ul
                  className={
                    isMobileDropdownHowActive
                      ? 'nav-main-dropdown nav-mobile-dropdown-active'
                      : 'nav-main-dropdown'
                  }
                >
                  <li>
                    <Link
                      to="/junk-car-removal/"
                      onClick={handleMobileNavToggle}
                      className="underline"
                    >
                      Recycling
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/scrap-metal/"
                      onClick={handleMobileNavToggle}
                      className="underline"
                    >
                      Environment
                    </Link>
                  </li>
                </ul>
              </li> */}
              <li>
                <Link
                  to="/blog/"
                  onClick={handleMobileNavToggle}
                  className="underline"
                >
                  Blog
                </Link>
              </li>
            </ul>
            <li>
              <div>
                <a href="tel:+16179976510" className="nav-btn">
                  Call Us
                </a>
              </div>
            </li>
            <Row className="nav-mobile-cta-btns">
              <Col>
                <i className="fas fa-2x fa-map-marker-alt text-primary"></i>
                <span>Directions</span>
              </Col>
              <Col className="btn-border">
                <i className="fas fa-2x fa-envelope text-primary"></i>
                <span>Contact</span>
              </Col>
              <Col>
                <i className="fas fa-2x fa-phone text-primary"></i>
                <span>Call Us</span>
              </Col>
            </Row>
          </ul>
        </Row>
        <div onClick={handleMobileNavToggle} className="burger">
          <div className="line-1"></div>
          <div className="line-2"></div>
          <div className="line-3"></div>
        </div>
      </Container>
    </nav>
  );
};

export default Navbar;
