import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../logo.svg';
import './navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return (
    <div className="ij__navbar">
      <div className="ij__navbar-links">
        <div className="ij__navbar-links_logo">
          <img src={logo} />
        </div>
        <div className="ij__navbar-links_container">
          <p><a href="#home">Home</a></p>
          <p><a href="#wijc">What is IJC ?</a></p>
          <p><a href="#workprocess">Work Process</a></p>
          <p><a href="#expertises">Expertises</a></p>
        </div>
      </div>
      <div className="ij__navbar-sign">
        <p>Log in</p>
        <button type="button">Sign up</button>
      </div>
      <div className="ij__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)} />}
        {toggleMenu && (
        <div className="ij__navbar-menu_container scale-up-center">
          <div className="ij__navbar-menu_container-links">
            <p><a href="#home">Home</a></p>
            <p><a href="#wijc">What is IJC?</a></p>
            <p><a href="#workprocess">Work Process</a></p>
            <p><a href="#expertises">Expertises</a></p>
          </div>
          <div className="ij__navbar-menu_container-links-sign">
            <p>Log in</p>
            <button type="button">Sign up</button>
          </div>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
