import React from 'react';
import Card from './card';

function CardHolder() {
  return (
    <div className='grid grid-cols-3 gap-4'>
      <Card />
      <Card />
      <Card />
    </div>
  );
}

export default CardHolder