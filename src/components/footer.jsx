import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="bg-slate-900 px-6 py-20 text-white lg:px-10">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <div>
            <h2 className="text-4xl font-bold sm:text-5xl">DigiTools</h2>
            <p className="mt-6 max-w-[340px] text-lg leading-8 text-slate-300 sm:text-xl sm:leading-9">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">Product</h3>
            <p className="mt-6 text-base text-slate-300 sm:text-xl">Features</p>
            <p className="mt-4 text-base text-slate-300 sm:text-xl">Pricing</p>
            <p className="mt-4 text-base text-slate-300 sm:text-xl">Templates</p>
            <p className="mt-4 text-base text-slate-300 sm:text-xl">Integrations</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">Company</h3>
            <p className="mt-6 text-base text-slate-300 sm:text-xl">About</p>
            <p className="mt-4 text-base text-slate-300 sm:text-xl">Blog</p>
            <p className="mt-4 text-base text-slate-300 sm:text-xl">Careers</p>
            <p className="mt-4 text-base text-slate-300 sm:text-xl">Press</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">Resources</h3>
            <p className="mt-6 text-base text-slate-300 sm:text-xl">Documentation</p>
            <p className="mt-4 text-base text-slate-300 sm:text-xl">Help Center</p>
            <p className="mt-4 text-base text-slate-300 sm:text-xl">Community</p>
            <p className="mt-4 text-base text-slate-300 sm:text-xl">Contact</p>
          </div>

          <div>
            <h3 className="text-xl font-semibold sm:text-2xl">Social Links</h3>
            <div className="mt-6 flex gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900">
                <FaInstagram className="h-5 w-5" />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900">
                <FaFacebookF className="h-5 w-5" />
              </div>
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white text-slate-900">
                <FaXTwitter className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 border-t border-slate-700 pt-8">
          <div className="flex flex-col gap-6 text-base text-slate-400 sm:text-lg lg:flex-row lg:items-center lg:justify-between">
            <p>&copy; 2026 Digitools. All rights reserved.</p>

            <div className="flex flex-col gap-4 sm:flex-row sm:flex-wrap sm:gap-6 lg:gap-10">
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
              <p>Cookies</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
