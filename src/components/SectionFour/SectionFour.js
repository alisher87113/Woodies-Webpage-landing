import React, { useState } from 'react';
import logo from '../../img/logo.png';
import table from '../../img/pexels-photo-footer.png';

const SectionFour = () => {
  const [show, setShow] = useState('');
  const setShowFn = (num) => {
    if (show !== num) {
      setShow(num);
    } else {
      setShow('');
    }
  };
  return (
    <section className="sectionFour">
      <div className="subscribe">
        <div className="aboutSubscription">
          <h5>Subscribe to our newsletter</h5>
          <p>
            A monthly digest of the new WOODIES products, hot offers, and
            resources.
          </p>
        </div>

        <div className="inputArea">
          <input
            type="email"
            placeholder="Your email address"
            className="subscribeInputField"
          ></input>
          <input
            type="submit"
            className="subscribeBtn"
            value="Subscribe"
          ></input>
        </div>
      </div>

      {/* Footer nav */}
      <div className="lineFooter" />

      <div className="menus">
        <div className="menusItems">
          <div className="contacts">
            <img src={logo} alt="logo" />
            <p>Woodies</p>
          </div>
          <div className="bottomLinks">
            <p onClick={() => setShowFn('1')}>Products</p>
            <ul style={{ display: show === '1' ? 'block' : 'none' }}>
              <li>
                <a href="#">Furnitures</a>
              </li>
              <li>
                <a href="#">Packages</a>
              </li>
              <li>
                <a href="#">Services</a>
              </li>
            </ul>
          </div>
          <div className="bottomLinks">
            <p onClick={() => setShowFn('2')}>Recourses</p>
            <ul style={{ display: show === '2' ? 'block' : 'none' }}>
              <li>
                <a href="#">Blogs</a>
              </li>
              <li>
                <a href="#">FAQs</a>
              </li>
              <li>
                <a href="#">Contact Us</a>
              </li>
            </ul>
          </div>

          <div className="bottomLinks">
            <p onClick={() => setShowFn('3')}> Company</p>
            <ul style={{ display: show === '3' ? 'block' : 'none' }}>
              <li>
                <a href="#">About Us</a>
              </li>
              <li>
                <a href="#">Jobs</a>
              </li>
              <li>
                <a href="#">Our Team</a>
              </li>
            </ul>
          </div>

          <div className="bottomLinks">
            <p onClick={() => setShowFn('4')}>Follow Us</p>
            <ul style={{ display: show === '4' ? 'block' : 'none' }}>
              <li>
                <a href="#">Facebook</a>
              </li>
              <li>
                <a href="#">Instagram</a>
              </li>
              <li>
                <a href="#">Twitter</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionFour;
