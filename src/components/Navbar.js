import React from 'react';
import Navbar__item from './Navbar__item';

const Navbar = () => {
  return (
    <div className="w3-top">
      <div className="w3-bar w3-white w3-wide w3-padding w3-card">
        <a href="#home" className="w3-bar-item w3-button">
          <b>BR</b> Architects
        </a>
        <div className="w3-right w3-hide-small">
          <Navbar__item
            className="w3-bar-item w3-button"
            target="#projects"
            label="Projects"
          />
          <Navbar__item
            className="w3-bar-item w3-button"
            target="#about"
            label="About"
          />
          <Navbar__item
            className="w3-bar-item w3-button"
            target="#contact"
            label="Contact"
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
