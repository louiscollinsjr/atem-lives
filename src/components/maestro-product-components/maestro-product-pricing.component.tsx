import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';

const MaestroPricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const togglePricing = () => {
    setIsYearly(!isYearly);
  };

  const pricing = {
    basic: {
      monthly: '4,995',
      yearly: '3,995',
      items: [
        'One request at a time',
        'Average 72-hour delivery',
        'Basic reporting + analytics',
        'Pause or cancel at anytime',
      ],
    },
    professional: {
      monthly: '6,995',
      yearly: '5,995',
      items: [
        'Everything in Basic plus...',
        'Two requests at a time',
        'Build compelling data stories, together.',
      ],
    },
  };

  return (
    <section className="p-10 bg-gray-50 sm:py-16 lg:py-24 tracking-wide">
      <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="~text-3xl/7xl font-bold leading-tight text-black sm:text-4xl lg:text-5xl">
            Pricing built for businesses of all sizes
          </h2>
          <p className="max-w-md mx-auto mt-4 text-base leading-relaxed text-gray-600">
            Simple, transparent pricing that grows with you. Pause or cancel at
            anytime.
          </p>
        </div>

        <div className="mt-10">
          <div className="flex items-center justify-center space-x-2.5">
            <span className="text-base font-medium text-gray-900">
              Monthly billing
            </span>

            {/* <button type="button" className="relative inline-flex flex-shrink-0 h-6 py-0.5 transition-colors duration-200 ease-in-out bg-transparent border-2 border-blue-600 rounded-full cursor-pointer w-12 focus:outline-none" role="switch">
                    <span aria-hidden="true" className="inline-block w-4 h-4 transition duration-200 ease-in-out translate-x-6 bg-blue-600 rounded-full shadow pointer-events-none"></span>
                </button> */}

            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isYearly}
                onChange={togglePricing}
              />
              <div className="w-11 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
            </label>

            <span className="text-base font-medium text-gray-900">
              Yearly billing
              <span className="bg-slate-200 text-slate-600 font-medium text-sm px-3 py-1.5 rounded-lg mx-2">
                Save 20%
              </span>
            </span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 mx-auto lg:grid-cols-2 mt-14 md:gap-9">
          <div className="overflow-hidden bg-white border border-gray-100  rounded-xl shadow-lg">
            <div className="p-6 md:py-8 md:px-9">
              <h3 className="flex text-3xl font-semibold text-black">
                Basic
                <span className="flex text-white bg-black text-xs h-6 text-center justify-center items-center px-4 py-1 mt-2 mx-4 rounded-full">
                  Most popular
                </span>
              </h3>

              <p className="mt-2.5 text-normal text-gray-600">
                Advanced features and reporting. Pause or cancel anytime.
              </p>

              <div className="flex items-end my-6">
                <div className="flex items-start">
                  <span className="text-xl font-medium text-black"> </span>
                  <p className="~text-4xl/6xl font-medium tracking-tight">
                    € {isYearly ? pricing.basic.yearly : pricing.basic.monthly}
                  </p>
                </div>
                <span className="ml-2 text-lg text-gray-600">
              
                  {isYearly ? ' per month' : ' per month'}{' '}
                </span>
              </div>

             

              <NavLink
  to="https://calendly.com/louiscollinsjr/atem-intro" // Adjust this path to the correct route in your app
  title="Schedule a call with atem"
  className="inline-flex items-center justify-center px-4 py-3 my-12 font-semibold text-white bg-black transition-all duration-200 border border-transparent rounded-xl border-gray-700 hover:bg-slate-50 hover:text-black focus:text-black focus:bg-white"
   
>
  Get Started
</NavLink>

              <div className="h-[1px] bg-gray-300 my-[2rem] my-6 w-full"></div>

              <p className="font-bold text-md my-4">What's included:</p>

              <ul className="flex flex-col mt-8 space-y-4">
                {pricing.basic.items.map((item) => (
                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-900">
                      {item}
                    </span>
                    {/* <svg
                    className="w-4 h-4 ml-0.5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg> */}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="overflow-hidden bg-white border border-transparent rounded-xl shadow-lg w-full">
            <div className="p-6 md:py-8 md:px-9">
              <h3 className="text-3xl font-semibold text-black">Pro</h3>
              <p className="mt-2.5 text-normal text-gray-600">
                Double requests. Advanced reporting. Pause or cancel anytime.
              </p>

              <div className="flex items-end my-6">
                <div className="flex items-start">
                  <span className="text-xl font-medium text-black"></span>
                  <p className="~text-4xl/6xl font-medium tracking-tight">
                    € {isYearly
                      ? pricing.professional.yearly
                      : pricing.professional.monthly}
                  </p>
                </div>
                <span className="ml-2 text-lg text-gray-600">
                  {isYearly ? ' per month' : ' per month'}
                </span>
              </div>

              <NavLink
  to="https://calendly.com/louiscollinsjr/atem-intro" // Adjust this path to the correct route in your app
  title="Schedule a call with atem"
  className="inline-flex items-center justify-center px-4 py-3 my-12 font-semibold text-white bg-black transition-all duration-200 border border-transparent rounded-xl border-gray-700 hover:bg-slate-50 hover:text-black focus:text-black focus:bg-white"
  //activeClassName="bg-slate-50 text-black" // Optional: Styles for active link
>
  Get Started with Pro
</NavLink>

              <div className="h-[1px] bg-gray-300 my-[2rem] my-6 w-full"></div>

              <p className="font-bold text-md my-4">What's included:</p>
              <ul className="flex flex-col mt-8 space-y-4">
              {pricing.professional.items.map((item) => (
                  <li className="inline-flex items-center space-x-2">
                    <svg
                      className="flex-shrink-0 w-5 h-5 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clip-rule="evenodd"
                      />
                    </svg>
                    <span className="text-base font-medium text-gray-900">
                      {item}
                    </span>
                    {/* <svg
                    className="w-4 h-4 ml-0.5 text-gray-500"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg> */}
                  </li>
                ))}
              </ul>
            </div>
            
          </div>
          
        </div>

        <section className=" w-full flex flex-col content-center items-center min-h-[42.5rem] py-24">
        <div className="max-w-screen-2xl">
          <div className="">
            <h2 className="~text-4xl/6xl font-bold text-center leading-relaxed lg:leading-normal tracking-wide">Hiring or traditional <br/> outsourcing? <span className="bg-[#03ff00] px-1 lg:p-2">Neither.</span></h2>
            <div className="~text-base/xl text-left lg:w-245 py-10 lg:text-center">Let's face it: traditional approaches to providing digital solutions are bloated outdated relics of the past. 
            <br/> <br/>Developed in a bygone era, they are ill-suited for today&#x27;s fast-paced digital landscape that demands speed &amp; adaptability. 
             Learn more about Awesomations by atem works and how it can help you.</div>
              <div className="text-center">
              <NavLink
  to="https://calendly.com/louiscollinsjr/atem-intro" // Adjust this path to the correct route in your app
  title="Schedule a call with atem"
  className="inline-flex items-center justify-center px-4 py-3 my-12 font-semibold text-white bg-black transition-all duration-200 border border-transparent rounded-xl border-gray-700 hover:bg-slate-50 hover:text-black focus:text-black focus:bg-white"
  //activeClassName="bg-slate-50 text-black" // Optional: Styles for active link
>
  Schedule a call
</NavLink>

              </div>
           
          </div>
        </div>
      
   
                </section>
        
      </div>

      

    </section>
  );
};

export default MaestroPricing;
