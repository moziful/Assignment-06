import React from 'react';

function Stats() {
  return (
    <div className="w-full flex justify-between items-center gap-1 px-50 py-15 bg-purple-800 text-white">
        <div className='p-4 rounded-lg w-1/3 text-center'>
            <p className='text-4xl font-extrabold'>50K+</p>
            <p className='opacity-80 font-medium'>Active Users</p>
        </div>
        <div className='p-4 rounded-lg w-1/3 text-center'>
            <p className='text-4xl font-extrabold'>200+</p>
            <p className='opacity-80 font-medium'>Premium Tools</p>
        </div>
        <div className='p-4 rounded-lg w-1/3 text-center'>
            <p className='text-4xl font-extrabold'>4.9</p>
            <p className='opacity-80 font-medium'>Rating</p>
        </div>
  </div>
  );
}

export default Stats