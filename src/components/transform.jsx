import React from 'react';
import Button from './button';

function Transform() {
  return (
    <section className="pt-20">
      <div className="bg-linear-to-r from-violet-700 via-violet-600 to-fuchsia-600 px-6 py-16 text-center text-white sm:px-8 sm:py-24">
        <h2 className="text-3xl font-bold sm:text-4xl lg:text-6xl">
          Ready To Transform Your Workflow?
        </h2>

        <p className="mx-auto mt-6 max-w-[760px] text-base leading-7 text-violet-100 sm:text-lg sm:leading-8">
          Join thousands of professionals who are already using Digitools to work
          smarter. Start your free trial today.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button btnName="Explore Products" variant="light" className="w-full justify-center sm:w-auto" />
          <Button btnName="View Pricing" variant="outline" className="w-full justify-center sm:w-auto" />
        </div>

        <p className="mt-8 text-base text-violet-100 sm:text-lg">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}

export default Transform;
