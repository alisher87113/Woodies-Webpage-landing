import React from 'react';
import chair from '../../img/chair.png';
import desk from '../../img/table3.png';
import cups from '../../img/cups.png';
import booksShelf from '../../img/bookshelf.png';
import radio from '../../img/electronics.png';

const SectionThree = () => {
  return (
    <section className="sectionThree">
      <p className="hat">
        <p className="hatLeft">What we have</p>
        <div className="line"></div>
        <p className="hatRight">CATEGORIES</p>
      </p>
      <div className="grid">
        <div className="card cardRose">
          <span className="category">Desk</span>
          <div className="imageHolder">
            <img className="left" src={desk} alt="desk" />
          </div>
          <button>Buy Now</button>
        </div>
        <div className="card cardYellow">
          <span className="category">Chair</span>
          <div className="imageHolder">
            <img src={chair} alt="chair" />
          </div>
          <button>Buy Now</button>
        </div>
        <div className="card cardBlue">
          <span className="category">Kitchenware</span>
          <div className="imageHolder">
            <img src={cups} alt="cups" />
          </div>
          <button>Buy Now</button>
        </div>
        <div className="card cardRose">
          <span className="category">Books Shelf</span>
          <div className="imageHolder">
            <img src={booksShelf} alt="booksShelf" />
          </div>
          <button>Buy Now</button>
        </div>
        <div className="card cardYellow">
          <span className="category">Electronics</span>
          <div className="imageHolder">
            <img src={radio} alt="radio" />
          </div>

          <button>Buy Now</button>
        </div>
      </div>
    </section>
  );
};

export default SectionThree;
