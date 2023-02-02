import React from 'react';
import gpt3Logo from '../../logo.svg';
import './footer.css';

const Footer = () => (
  <div className="ij__footer section__padding">
    <div className="ij__footer-heading">
      <h1 className="gradient__text">Step in to the future with us</h1>
    </div>

    <div className="ij__footer-btn">
      <p>Contact Us</p>
    </div>

    <div className="ij__footer-links">
      <div className="ij__footer-links_logo">
        <img src={gpt3Logo} alt="gpt3_logo" />
        <p>Greeta Towers, Perungudi, CH-96 <br /> All Rights Reserved</p>
      </div>
      <div className="ij__footer-links_div">
        <h4>Links</h4>
        <p>Social Media</p>
        <p>Counters</p>
      </div>
      <div className="ij__footer-links_div">
        <h4>Company</h4>
        <p>Terms & Conditions </p>
        <p>Privacy Policy</p>
        <p>Contact</p>
      </div>
      <div className="ij__footer-links_div">
        <h4>Get in touch</h4>
        <p>+91-9840954469</p>
        <p>ijc@mail.com</p>
      </div>
    </div>

    <div className="ij__footer-copyright">
      <p>@2023 IJC. No rights reserved.</p>
    </div>
  </div>
);

export default Footer;
