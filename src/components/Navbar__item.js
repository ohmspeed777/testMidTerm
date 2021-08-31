import React from 'react';

const Navbar__item = ({ label, target, className }) => {
  return (
    <a href={target} class={className}>
      {label}
    </a>
  );
};

export default Navbar__item;
