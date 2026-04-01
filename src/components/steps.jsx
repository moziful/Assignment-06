import React from 'react';
import userIcon from '../assets/user.png';
import packageIcon from '../assets/package.png';
import rocketIcon from '../assets/rocket.png';
import Heading from './heading';

const steps = [
  {
    number: '01',
    title: 'Create Account',
    description: 'Sign up for free in seconds. No credit card required to get started.',
    icon: userIcon,
    alt: 'User icon'
  },
  {
    number: '02',
    title: 'Choose Products',
    description: 'Browse our catalog and select the tools that fit your needs.',
    icon: packageIcon,
    alt: 'Package icon'
  },
  {
    number: '03',
    title: 'Start Creating',
    description: 'Download and start using your premium tools immediately.',
    icon: rocketIcon,
    alt: 'Rocket icon'
  }
];

function Steps() {
  return (
    <section className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-[1240px]">
        <Heading
          heading="Get Started In 3 Steps"
          subheading="Start using premium digital tools in minutes, not hours."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {steps.map((step) => (
            <article
              key={step.number}
              className="relative rounded-[28px] border border-gray-200 bg-white px-8 py-14 text-center shadow-[0_12px_40px_rgba(15,23,42,0.06)]"
            >
              <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-violet-600 text-sm font-bold text-white">
                {step.number}
              </div>

              <div className="mx-auto flex h-[88px] w-[88px] items-center justify-center rounded-full bg-violet-100">
                <img src={step.icon} alt={step.alt} className="h-12 w-12 object-contain" />
              </div>

              <h3 className="mt-8 text-2xl font-bold text-slate-900">
                {step.title}
              </h3>

              <p className="mt-4 text-lg leading-7 text-slate-500">
                {step.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Steps;
