import React from 'react';
import Button from './button';

function Transform() {
  return (
    <section className="py-20">
      <div className="bg-linear-to-r from-violet-700 via-violet-600 to-fuchsia-600 px-8 py-24 text-center text-white">
        <h2 className="text-4xl font-bold lg:text-6xl">
          Ready To Transform Your Workflow?
        </h2>

        <p className="mx-auto mt-6 max-w-[760px] text-lg leading-8 text-violet-100">
          Join thousands of professionals who are already using Digitools to work
          smarter. Start your free trial today.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button btnName="Explore Products" variant="light" />
          <Button btnName="View Pricing" variant="outline" />
        </div>

        <p className="mt-8 text-lg text-violet-100">
          14-day free trial • No credit card required • Cancel anytime
        </p>
      </div>
    </section>
  );
}

export default Transform;
