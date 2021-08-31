import React from 'react';

const About__item = ({ name, position, detail, img }) => {
  return (
    <div className="w3-col l3 m6 w3-margin-bottom">
      <img src={img} alt="John" style={{ width: '100%' }} />
      <h3>{name}</h3>
      <p className="w3-opacity">{position}</p>
      <p>{detail}</p>
      <p>
        <button className="w3-button w3-light-grey w3-block">Contact</button>
      </p>
    </div>
  );
};


export default About__item;
