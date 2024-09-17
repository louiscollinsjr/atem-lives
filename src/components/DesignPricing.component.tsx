import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import React from 'react';
import { useTranslation } from 'react-i18next';

const DesignPricing: React.FC = () => {
  const [isPro, setIsPro] = useState(false);
  const { t } = useTranslation();
  
  const togglePlan = () => {
    setIsPro(!isPro);
  };

  const pricingPlans = [
    {
      id: 'standard_pro',
      name: isPro ? 'Professional' : 'Standard',
      description: isPro
        ? 'Double requests. Advanced reporting.'
        : 'Advanced features and reporting.',
      price: isPro ? '€6,995' : '€4,995',
      type: 'Membership',
      onetime: false,
      CTA: isPro ? 'Get Started' : 'Get Started',
      items: isPro
        ? [
            'Two requests at a time',
            'Average 72 hour delivery',
            'Unlimited users',
            'Unlimited brands',
            'Weblfow or Framer developement',
            'Pause or cancel anytime',
          ]
        : [
            'One request at a time',
            'Average 72 hour delivery',
            'Weblfow or Framer developement',
            'Unlimited brands',
            'Basic reporting + analytics',
            'Pause or cancel anytime',
          ],
    },
  ];

  return (
    <section className="p-4 sm:p-10 sm:py-16 lg:py-24 tracking-wide bg-slate-100">
      <div className="container mx-auto py-8 sm:py-16">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-black tracking-wide">
              {t("Pricing built for businesses of all sizes")}
            </h2>
            <p className="max-w-md mx-auto mt-4 text-sm sm:text-base leading-relaxed text-gray-600 py-4">
              {t("Simple, transparent pricing that grows with you. Pause or cancel at anytime.")}
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8 mx-auto lg:grid-cols-2 mt-8 sm:mt-14 md:gap-4 justify-center">
            {/* CTA Column */}
            <div className="bg-black rounded-xl shadow-lg border border-gray-200">
              <div className="p-6 sm:p-12">
                <h3 className="text-4xl sm:text-5xl font-semibold text-white font-spartan pt-2 w-full">
                  {t("Join design@atem")}
                  
                </h3>

                <div>
                  <NavLink
                    to="https://calendly.com/louiscollinsjr/atem-intro"
                    title="Schedule a call with atem"
                    className="inline-flex items-center px-4 py-3 mt-8 sm:mt-12 my-4 w-full text-white font-popins border border-gray-600 rounded-xl bg-black"
                  >
                    <div className="py-2">
                      <p className="text-lg sm:text-xl font-semibold pb-2 sm:pb-4">
                        {t("Book a 15-min intro call")}
                      </p>
                      <p className="text-xs sm:text-sm">
                        {t("Learn more about how design@atem works and how it can help you.")}
                      </p>
                    </div>
                  </NavLink>

                  <NavLink
                    to="/contact"
                    title="Schedule a call with atem"
                    className="inline-flex items-center  px-4 py-3 w-full text-white font-popins border border-gray-600 rounded-xl bg-black"
                  >
                    <div className="py-2">
                      <p className="text-xl font-semibold pb-4">
                        {t("Refer a friend")}
                      </p>
                      <p className="text-sm">
                        {t("We appreciate your support!")}
                      </p>
                    </div>
                  </NavLink>

                </div>
              </div>
            </div>

            {/* Pricing Plans */}
            {pricingPlans.map((plan) => (
              <div
                key={plan.id}
                className="overflow-hidden bg-white rounded-xl h-full shadow-md border border-gray-200"
              >
                <div className="p-4 sm:p-6 md:py-8 md:px-9">
                  <h3 className="text-2xl sm:text-3xl text-black pb-4">{plan.type}</h3>

                  {plan.id === 'standard_pro' && (
                    <div className="mt-4 flex items-center justify-center sm:justify-start">
                      <div className="relative">
                        <div
                          className={`w-64 sm:w-72 h-12 flex items-center bg-gray-900 rounded-full p-2 duration-300 ease-in-out ${
                            isPro ? 'bg-blue-600' : 'bg-gray-300'
                          }`}
                        >
                          <span
                            className={`bg-yellow-400 w-28 sm:w-36 h-10 rounded-full shadow-md transform duration-300 ease-in-out ${
                              isPro ? 'translate-x-[8rem] sm:translate-x-32' : ''
                            }`}
                          ></span>
                        </div>
                        <div
                          className="absolute top-0 left-0 w-full h-full flex items-center text-base font-bold cursor-pointer"
                          onClick={togglePlan}
                        >
                          <span
                            className={`flex-1 text-center ${
                              isPro ? 'text-white' : 'text-gray-700'
                            }`}
                          >
                            {t("Standard")}
                          </span>
                          <span
                            className={`flex-1 text-center ${
                              isPro ? 'text-gray-700' : 'text-white'
                            }`}
                          >
                            🚀 {t("Pro")}
                          </span>
                        </div>
                        <input
                          type="checkbox"
                          className="hidden"
                          checked={isPro}
                          onChange={togglePlan}
                        />
                      </div>
                    </div>
                  )}

                  {plan.price && (
                    <div>
                      <div className="flex items-end pt-8">
                        <p className="text-4xl font-medium font-inter tracking-wide">
                          {plan.price}
                        </p>

                        <span className="ml-2 text-lg text-gray-600">
                          {plan.onetime ? 'One time fee' : t("/m")}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600 py-2">
                        {t(plan.description)}
                      </p>
                    </div>
                  )}

                  {plan.items && (
                    <>
                      <div className="h-[1px] bg-gray-300 my-4 sm:my-6 w-full"></div>
                      <p className="text-sm my-2">{t("What's included")}</p>
                      <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 sm:gap-y-4 mt-4">
                        {plan.items.map((item, itemIndex) => (
                          <li key={itemIndex} className="inline-flex space-x-1">
                            <svg
                              className="flex-shrink-0 w-5 h-5 text-gray-400"
                              xmlns="http://www.w3.org/2000/svg"
                              viewBox="0 0 20 20"
                              fill="currentColor"
                            >
                              <path
                                fillRule="evenodd"
                                d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                                clipRule="evenodd"
                              />
                            </svg>
                            <span className="text-sm text-gray-900">
                              {t(item)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </>
                  )}

                  <div className="flex flex-col sm:flex-row items-center justify-start mt-6 sm:mt-0">
                    <div className="w-full sm:w-auto">
                      <NavLink
                        to="https://calendly.com/louiscollinsjr/atem-intro"
                        title="Schedule a call with atem"
                        className="inline-flex items-center justify-center px-4 py-3 my-4 sm:my-12 w-full sm:w-auto text-white font-popins border border-transparent rounded-xl bg-black"
                      >
                        {t(plan.CTA || "Get Started")}
                      </NavLink>
                    </div>
                    <div className="pl-0 sm:pl-4 mt-2 sm:mt-0">
                      <p className="text-black text-sm">
                        {t("or")}{' '}
                        <NavLink
                          to="https://calendly.com/louiscollinsjr/atem-intro"
                          title="Schedule a call with atem"
                          className="underline"
                        >
                          {t("book a call")}
                        </NavLink>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DesignPricing;
