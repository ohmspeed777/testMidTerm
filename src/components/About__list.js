import React from 'react';
import About__item from './About__item';

const About__list = ({ data }) => {
  const items = data.map((el) => {
    return (
      <About__item
        img={el.img}
        name={el.name}
        position={el.position}
        detail={el.detail}
      />
    );
  });
  return <div className="w3-row-padding w3-grayscale">{items}</div>;
};

export default About__list;
