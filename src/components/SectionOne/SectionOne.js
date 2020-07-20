import React, { useState } from 'react';
import logo from '../../img/logo.png';
import table from '../../img/table.png';

const SectionOne = () => {
  const [showNav, setShowNav] = useState(false);
  const showNavigation = () => {
    setShowNav(!showNav);
  };
  return (
    <section>
      <div className="sectionOne">
        <div className="navigation">
          <div className="header">
            <div className="logoTitle">
              <img src={logo} alt="" />
              <h3>Woodies</h3>
            </div>

            <i class="fa fa-bars" onClick={showNavigation}></i>
          </div>
          <nav
            style={{ display: showNav ? 'block' : 'none' }}
            className="navLinks"
          >
            <a href="#">SIGN UP</a>
            <a href="#news">Home</a>
            <a href="#contact">About Us</a>
            <a href="#about">How it works</a>
            <a href="#about">Categories</a>
            <a href="#about">Testimony</a>
          </nav>
        </div>{' '}
        <div className="content-a">
          <div className="content-a-left">
            <p>
              Are you looking for{' '}
              <strong>
                woodden
                <br /> furniture{' '}
              </strong>
              for your place?
            </p>
            <h2>This is the Right Place</h2>
            <button>Explore Furniture</button>
          </div>
          {/* <div> */}
          <img src={table} alt="table" />
          {/* </div> */}
        </div>
        <div className="bg-pink"></div>
      </div>
    </section>
  );
};

export default SectionOne;
