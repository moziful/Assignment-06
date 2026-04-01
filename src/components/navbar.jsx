import React from 'react';
import { FaBars } from 'react-icons/fa6';
import shoppingCartIcon from '../assets/products/shopping-cart.png';
import Button from './button';

const navItems = ['Products', 'Features', 'Pricing', 'Testimonials', 'FAQ'];

function Navbar({ cartCount }) {
  return (
    <header className="border-b border-gray-200 bg-white">
      <nav className="mx-auto flex max-w-[1240px] items-center justify-between px-6 py-5 lg:px-10">
        <a
          href="#"
          className="text-3xl font-extrabold tracking-tight text-violet-600 sm:text-4xl"
        >
          DigiTools
        </a>

        <div className="hidden items-center gap-10 lg:flex">
          {navItems.map((item) => (
            <a
              key={item}
              href="#"
              className="text-xl font-medium text-slate-700 transition hover:text-violet-600"
            >
              {item}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-6 lg:flex">
          <a
            href="#"
            className="relative flex items-center gap-2 text-lg font-medium text-slate-700 transition hover:text-violet-600"
          >
            <img src={shoppingCartIcon} alt="Cart" className="h-5 w-5 object-contain" />
            <span className="absolute -right-3 -top-3 flex h-5 min-w-5 items-center justify-center rounded-full bg-violet-600 px-1 text-xs font-semibold text-white">
              {cartCount}
            </span>
          </a>

          <a
            href="#"
            className="text-lg font-medium text-slate-700 transition hover:text-violet-600"
          >
            Login
          </a>

          <Button btnName="Get Started" />
        </div>

        <div className="dropdown dropdown-end lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 text-slate-700"
          >
            <FaBars className="h-5 w-5" />
          </div>

          <ul
            tabIndex={0}
            className="menu dropdown-content z-10 mt-3 w-64 rounded-2xl border border-gray-200 bg-white p-3 shadow-lg"
          >
            {navItems.map((item) => (
              <li key={item}>
                <a className="rounded-xl text-base font-medium text-slate-700">
                  {item}
                </a>
              </li>
            ))}
            <li>
              <a className="rounded-xl text-base font-medium text-slate-700">
                Cart ({cartCount})
              </a>
            </li>
            <li>
              <a className="rounded-xl text-base font-medium text-slate-700">
                Login
              </a>
            </li>
            <li className="mt-2">
              <Button btnName="Get Started" className="w-full" />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
