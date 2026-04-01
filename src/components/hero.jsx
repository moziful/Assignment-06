import React from 'react';
import Button from './button';
import banner from '../assets/banner.png';

function Hero() {
  return (
    <section className="px-6 py-16 lg:px-10 lg:py-24">
      <div className="mx-auto flex max-w-[1240px] flex-col items-center gap-12 lg:flex-row lg:gap-10">
        <div className="w-full max-w-[640px]">
          <div className="flex flex-col gap-4 rounded-lg text-center lg:text-left">
            <div className="flex w-max max-w-full items-center gap-2 rounded-full bg-gray-100 p-2 px-4 text-sm font-medium text-purple-600 sm:text-base">
              <div className="flex h-6 w-6 items-center justify-center rounded-full bg-purple-200">
                <div className="flex h-4 w-4 items-center justify-center rounded-full bg-purple-400">
                  <div className="h-2 w-2 rounded-full bg-purple-600"></div>
                </div>
              </div>
              <p>New: AI-Powered Tools Available</p>
            </div>

            <h1 className="text-4xl font-extrabold text-gray-900 sm:text-5xl lg:text-6xl">
              Supercharge Your Digital Workflow
            </h1>

            <p className="text-base text-gray-500 sm:text-lg">
              Access premium AI tools, design assets, templates, and productivity software all in one place. Start creating faster today.
            </p>
          </div>

          <div className="mt-6 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
            <Button btnName="Explore Products" className="w-full justify-center sm:w-auto" />
            <Button btnName="Watch Demo" className="w-full justify-center sm:w-auto" />
          </div>
        </div>

        <div className="flex w-full justify-center">
          <img className="w-full max-w-[520px]" src={banner} alt="Hero Image" />
        </div>
      </div>
    </section>
  );
}

export default Hero
