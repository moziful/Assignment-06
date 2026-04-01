import React from 'react';

function Heading({ heading, subheading }) {
  return (
    <div className='mx-auto text-center'>
      <h1 className="text-4xl font-bold text-gray-900">{heading}</h1>
      <p className="text-lg text-gray-500 mt-2">{subheading}</p>
    </div>
  );
}

export default Heading