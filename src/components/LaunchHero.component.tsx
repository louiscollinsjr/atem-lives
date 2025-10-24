import React from 'react';
import clientMeetingImage from "../assets/launch/images/client_meeting.png";

export interface HeroProps {
  className?: string;
}

const LaunchHero: React.FC<HeroProps> = ({ className = "" }) => {
  const heroData = {
    subtitle: "Launch by Atem",
    title: "Launch Your MVP in 8 Weeks",
    titleSuffix: "— Without Breaking the Bank 🚀",
    description: "Fast, focused development at half the cost of US agencies. Fixed scope. No surprises.",
    
    projectExample: {
      label: "Cool things we have helped build:",
      description: "An intelligent audit platform that scores, optimizes, and exports job postings for modern hiring teams.",
    },
    cta: {
      text: "Let's get started",
      href: "/contact/",
      ariaLabel: "Let's talk",
    },
  };

  return (
    <section
      id="overview"
      className={`w-full min-h-[calc(80vh-5rem)] pt-12 pb-16 md:pt-24 bg-gray-50 rounded-lg ${className}`}
    >
      <div className="py-8">
        <header className="space-y-8 text-center mx-auto">
          <p className="tracking-[0.3em] text-xs text-slate-500">
            {heroData.subtitle}
          </p>
          <h1 className="text-4xl md:text-6xl leading-tight">
            <b>{heroData.title}</b>{" "}
            <span className="text-slate-800">
              {heroData.titleSuffix}
            </span>
          </h1>
          <p className="text-2xl font-roboto font-medium text-slate-700 pt-2 max-w-lg mx-auto">
            {heroData.description}
          </p>
        </header>

        {/* Our Projects fade in carousel */}
        {/* <div className="my-12 mx-6 md:mx-10">
          <p className="text-sm text-slate-500 mx-auto max-w-sm text-left border border-slate-600 p-4 py-6 rounded-md border-dashed bg-gray-50/80">
            <b>{heroData.projectExample.label}</b> {heroData.projectExample.description}
          </p>
        </div> */}

        <div className="mt-20">
          <a
            href={heroData.cta.href}
            aria-label={heroData.cta.ariaLabel}
            className="group inline-flex items-center justify-between gap-6 rounded-full border border-black bg-black px-8 py-3 text-md font-normal tracking-wide text-white transition-colors duration-300 hover:bg-gray-800 hover:text-white"
            style={{ minWidth: "196px" }}
          >
            <span>{heroData.cta.text}</span>
            <span className="flex items-center">
              <svg
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                className="transition-transform duration-300 group-hover:translate-x-1"
              >
                <path
                  d="M12 4L20 12L12 20"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M20 12H4"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </div>

        {/* Insert image here */}
        <div className="mt-32 items-center justify-center mx-auto text-center">
          <img
            src={clientMeetingImage}
            alt="Two ethical techies collaborating"
            className="max-w-6xl h-auto rounded-lg shadow-lg mx-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default LaunchHero;
