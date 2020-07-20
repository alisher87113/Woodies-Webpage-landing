import React from 'react';
import dishes from '../../img/dishes.png';
import spoons from '../../img/spoons.png';

const SectionTwo = () => {
  return (
    <section>
      <div className="sectionTwo">
        <p className="hat">
          <span className="hatLeft">Who are we</span>
          <div className="line"></div>
          <span className="hatRight">ABOUT US</span>
        </p>
        <div className="flexbox-1">
          <img src={dishes} alt="dishes" />
          <div className="aboutWoodies">
            <p className="textMain">
              {' '}
              <strong>WOODIES</strong> is the{' '}
              <strong>home of modern wooden furniture</strong>
            </p>
            <p className="textSecondary">
              the answer to your need for furniture with shapes, sizes and
              colors.
            </p>
          </div>
        </div>
        <div className="flexbox-2">
          <div className="textHolder">
            <p className="textMain">Customized furniture made just for you</p>
            <p className="textSecondary">
              Get it easy to adjust furniture to the shape and size of your
              dwelling or business.
            </p>
          </div>
          <div className="imageHolder">
            <img src={spoons} alt="spoons" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
