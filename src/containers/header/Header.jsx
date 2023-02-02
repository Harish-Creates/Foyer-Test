import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="ij__header section__padding" id="home">
    <div className="ij__header-content">
      <h1 className="gradient__text">IJC <br/> The way forward.</h1>
      <p>We with a vision to provide a Software Development and web application development company with experienced IT consultants.</p>

      <div className="ij__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>

      <div className="ij__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 3 weeks</p>
      </div>
    </div>

    <div className="ij__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
