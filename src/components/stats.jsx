import React from 'react';

function Stats() {
  return (
    <section className="bg-purple-800 px-6 py-12 text-white lg:px-10">
      <div className="mx-auto grid max-w-[1240px] gap-8 md:grid-cols-3">
        <div className='rounded-lg p-4 text-center'>
            <p className='text-3xl font-extrabold sm:text-4xl'>50K+</p>
            <p className='font-medium opacity-80'>Active Users</p>
        </div>
        <div className='rounded-lg p-4 text-center'>
            <p className='text-3xl font-extrabold sm:text-4xl'>200+</p>
            <p className='font-medium opacity-80'>Premium Tools</p>
        </div>
        <div className='rounded-lg p-4 text-center'>
            <p className='text-3xl font-extrabold sm:text-4xl'>4.9</p>
            <p className='font-medium opacity-80'>Rating</p>
        </div>
      </div>
    </section>
  );
}

export default Stats
