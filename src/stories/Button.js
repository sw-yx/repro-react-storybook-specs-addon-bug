import React from 'react';

/**
 * The world's most _basic_ button
 */
export const Button = ({ children, onClick }) => (
  <button onClick={onClick} type='button'>
    {children}
    <span className='visuallyhidden'>not available</span>
  </button>
);
