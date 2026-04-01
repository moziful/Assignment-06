import React from 'react';
import { FaFacebookF, FaInstagram, FaXTwitter } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="bg-slate-900 px-6 py-20 text-white lg:px-10">
      <div className="mx-auto max-w-[1240px]">
        <div className="grid gap-12 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1fr]">
          <div>
            <h2 className="text-5xl font-bold">DigiTools</h2>
            <p className="mt-6 max-w-[340px] text-xl leading-9 text-slate-300">
              Premium digital tools for creators, professionals, and businesses.
              Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Product</h3>
            <p className="mt-6 text-xl text-slate-300">Features</p>
            <p className="mt-4 text-xl text-slate-300">Pricing</p>
            <p className="mt-4 text-xl text-slate-300">Templates</p>
            <p className="mt-4 text-xl text-slate-300">Integrations</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Company</h3>
            <p className="mt-6 text-xl text-slate-300">About</p>
            <p className="mt-4 text-xl text-slate-300">Blog</p>
            <p className="mt-4 text-xl text-slate-300">Careers</p>
            <p className="mt-4 text-xl text-slate-300">Press</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Resources</h3>
            <p className="mt-6 text-xl text-slate-300">Documentation</p>
            <p className="mt-4 text-xl text-slate-300">Help Center</p>
            <p className="mt-4 text-xl text-slate-300">Community</p>
            <p className="mt-4 text-xl text-slate-300">Contact</p>
          </div>

          <div>
            <h3 className="text-2xl font-semibold">Social Links</h3>
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
          <div className="flex flex-col gap-6 text-lg text-slate-400 lg:flex-row lg:items-center lg:justify-between">
            <p>&copy; 2026 Digitools. All rights reserved.</p>

            <div className="flex flex-col gap-4 lg:flex-row lg:gap-10">
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
