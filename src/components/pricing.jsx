import React from 'react';
import Button from './button';
import Heading from './heading';

const plans = [
  {
    name: 'Starter',
    description: 'Perfect for getting started',
    price: '$0',
    period: '/Month',
    features: [
      'Access to 10 free tools',
      'Basic templates',
      'Community support',
      '1 project per month'
    ],
    buttonLabel: 'Get Started Free',
    featured: false
  },
  {
    name: 'Pro',
    description: 'Best for professionals',
    price: '$29',
    period: '/Month',
    features: [
      'Access to all premium tools',
      'Unlimited templates',
      'Priority support',
      'Unlimited projects',
      'Cloud sync',
      'Advanced analytics'
    ],
    buttonLabel: 'Start Pro Trial',
    featured: true,
    badge: 'Most Popular'
  },
  {
    name: 'Enterprise',
    description: 'For teams and businesses',
    price: '$99',
    period: '/Month',
    features: [
      'Everything in Pro',
      'Team collaboration',
      'Custom integrations',
      'Dedicated support',
      'SLA guarantee',
      'Custom branding'
    ],
    buttonLabel: 'Contact Sales',
    featured: false
  }
];

function Pricing() {
  return (
    <section className="px-6 py-20 lg:px-10">
      <div className="mx-auto max-w-[1240px]">
        <Heading
          heading="Simple, Transparent Pricing"
          subheading="Choose the plan that fits your needs. Upgrade or downgrade anytime."
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {plans.map((plan) => (
            <article
              key={plan.name}
              className={`relative flex min-h-[520px] flex-col rounded-[26px] border px-8 py-8 shadow-[0_12px_40px_rgba(15,23,42,0.06)] ${
                plan.featured
                  ? 'border-transparent bg-linear-to-br from-violet-700 via-violet-600 to-fuchsia-500 text-white'
                  : 'border-gray-200 bg-white text-slate-900'
              }`}
            >
              {plan.featured && (
                <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/2 rounded-full bg-amber-300 px-5 py-2 text-sm font-semibold text-amber-900">
                  {plan.badge}
                </div>
              )}

              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className={`mt-2 text-lg ${plan.featured ? 'text-violet-100' : 'text-slate-500'}`}>
                {plan.description}
              </p>

              <div className="mt-8 flex items-end gap-1">
                <span className="text-5xl font-bold">{plan.price}</span>
                <span className={`pb-1 text-2xl ${plan.featured ? 'text-violet-100' : 'text-slate-500'}`}>
                  {plan.period}
                </span>
              </div>

              <div className="mt-8 flex flex-1 flex-col gap-4">
                {plan.features.map((feature) => (
                  <div key={feature} className="flex items-start gap-3">
                    <span className={plan.featured ? 'text-white' : 'text-emerald-500'}>
                      &#10003;
                    </span>
                    <span className={`text-lg leading-7 ${plan.featured ? 'text-white' : 'text-slate-600'}`}>
                      {feature}
                    </span>
                  </div>
                ))}
              </div>

              <Button
                btnName={plan.buttonLabel}
                className="mt-10 w-full justify-center"
                variant={plan.featured ? 'light' : 'gradient'}
              />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Pricing;
