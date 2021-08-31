import React from 'react';

const Project__item = ({ name, img }) => {
  return (
    <div className="w3-col l3 m6 w3-margin-bottom">
      <div className="w3-display-container">
        <div className="w3-display-topleft w3-black w3-padding">{name}</div>
        <img src={img} alt={name} style={{ width: '100%' }} />
      </div>
    </div>
  );
};

export default Project__item;
