import React from 'react';
import Project__item from './Project__item';

const Project__list = ({ data }) => {
  const items = data.map((el) => {
    return <Project__item name={el.title} img={el.img} />;
  });

  return <div className="w3-row-padding">{items}</div>;
};

export default Project__list;
