import React from 'react';

function Heading({ heading, subheading }) {
  return (
    <div className='mx-auto text-center'>
      <h1 className="text-3xl font-bold text-gray-900 sm:text-4xl lg:text-5xl">{heading}</h1>
      <p className="mt-2 text-base text-gray-500 sm:text-lg">{subheading}</p>
    </div>
  );
}

export default Heading
