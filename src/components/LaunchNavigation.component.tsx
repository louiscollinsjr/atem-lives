import React, { Fragment, useState } from 'react';
import { Link, NavLink, Outlet } from 'react-router-dom';
import navLogo from '../assets/atem-logo-with-wings-black.svg';
import Footer from './Footer.component';
import { LAUNCH_NAV_ITEMS } from '../config/launch';

import './navigation.styles.css';

const LaunchNavigation: React.FC = () => {
  const [isMobileNavOpen, setIsMobileNavOpen] = useState(false);

  const toggleMobileNav = () => {
    setIsMobileNavOpen(!isMobileNavOpen);
  };

  const closeMobileNav = () => {
    setIsMobileNavOpen(false);
  };

  return (
    <Fragment>
      <nav className="md:h-auto bg-black md:bg-white fixed  top-0 left-0  z-50 backdrop-filter backdrop-blur-lg md:bg-opacity-30 w-full">
        <div className="max-w-screen-2xl mx-auto px-4 md:px-4  py-3 flex justify-between items-center">
          <div className="flex items-center">
            <NavLink to="/" end>
              <img
                className="w-28 sm:w-20 invert md:invert-0"
                src={navLogo}
                alt="Logo"
                onClick={closeMobileNav}
              />
            </NavLink>
          </div>
          <div className="hidden md:flex space-x-4">
            {LAUNCH_NAV_ITEMS.map((item) => (
              <a key={item.href} className="text-xs nav-link" href={item.href}>
                {item.label}
              </a>
            ))}
          </div>
          <button
            className="md:hidden text-white text-2xl"
            onClick={toggleMobileNav}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="size-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 9h16.5m-16.5 6.75h16.5"
              />
            </svg>
          </button>
        </div>

        <div className="hidden md:flex justify-between max-w-screen-2xl mx-auto md:px-4 py-3 ">
          <div className="text-black text-xl font-semibold tracking-[0.011em] leading-5">
            Launch by Atem
          </div>
          <div className="space-x-4">
            <a
              href="#cta"
              className="text-xs nav-link"
            >
              Contact us
            </a>

            <a
              href="#cta"
              className="bg-blue-500 hover:bg-blue-400 text-white text-xs px-3 py-1.5 rounded-full"
            >
              Schedule a call
            </a>
          </div>
        </div>

        {isMobileNavOpen && (
          <div
            className="fixed inset-0  md:hidden bg-black h-screen bg-opacity-100 z-40 overflow-hidden transition-max-height duration-300 ease-in-out"
          >
            <div className="max-w-screen-xl mx-auto px-4 py-3 flex justify-between items-center">
              <div className="flex items-center">
                <Link to="/">
                  <img
                    className="w-20 bg-white invert md:invert-0"
                    src={navLogo}
                    alt="Logo"
                    onClick={closeMobileNav}
                  />
                </Link>
              </div>

              <button
                className="md:hidden text-white text-2xl"
                onClick={toggleMobileNav}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="px-4 pb-4 pt-6 space-y-2">
              {LAUNCH_NAV_ITEMS.map((item) => (
                <a
                  className="block text-white hover:text-gray-300 text-3xl py-2"
                  href={item.href}
                  key={item.href}
                  onClick={closeMobileNav}
                >
                  {item.label}
                </a>
              ))}
              <a
                className="block text-white hover:text-gray-300 text-3xl py-2"
                href="#cta"
                onClick={closeMobileNav}
              >
                Contact us
              </a>
            </div>
          </div>
        )}
      </nav>
        
        <Outlet />
        
        
        <Footer />

    </Fragment>
  );
};

export default LaunchNavigation;
