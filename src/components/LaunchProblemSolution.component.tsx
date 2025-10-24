import React from 'react';
import AnimatedFeatureGrid, { FeatureSquare } from './AnimatedFeatureGrid.component';
import square1 from '../assets/square1.png';
import square2 from '../assets/square2.png';
import square3 from '../assets/square3.png';
import square4 from '../assets/square4.png';
import square5 from '../assets/square5.png';
import square7 from '../assets/square7.png';

export interface ProblemSolutionProps {
  className?: string;
}

const LaunchProblemSolution: React.FC<ProblemSolutionProps> = ({ className = "" }) => {
  const featureGridItems: FeatureSquare[] = [
    {
      id: 'velocity',
      icon: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
      title: 'Launch, today.',
      subtitle: 'Every product starts as an idea. Let\'s start making yours real, today.',
      description:'',
      ctaLabel: 'Get started',
      backgroundImage: square1,
      overlayColor: '#012d55',
    },{
      id: 'velocity',
      icon: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
      title: 'Launch, today.',
      subtitle: 'Every product starts as an idea. Let\'s start making yours real, today.',
      description:'',
      ctaLabel: 'Get started',
      backgroundImage: square2,
      overlayColor: '#77471b',
    },{
      id: 'velocity',
      icon: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
      title: 'Launch, today.',
      subtitle: 'Every product starts as an idea. Let\'s start making yours real, today.',
      description:'',
      ctaLabel: 'Get started',
      backgroundImage: square3,
      overlayColor: '#000000',
    },{
      id: 'velocity',
      icon: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
      title: 'Launch, today.',
      subtitle: 'Every product starts as an idea. Let\'s start making yours real, today.',
      description:'',
      ctaLabel: 'Get started',
      backgroundImage: square4,
      overlayColor: '#000000',
    },{
      id: 'velocity',
      icon: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
      title: 'Launch, today.',
      subtitle: 'Every product starts as an idea. Let\'s start making yours real, today.',
      description:'',
      ctaLabel: 'Get started',
      backgroundImage: square5,
      overlayColor: '#000000',
    },{
      id: 'velocity',
      icon: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
      title: 'Launch, today.',
      subtitle: 'Every product starts as an idea. Let\'s start making yours real, today.',
      description:'',
      ctaLabel: 'Get started',
      backgroundImage: square7,
      overlayColor: '#5e220b',
    },
  ];

  return (
    <section className={`relative flex flex-col items-center gap-12 max-w-5xl mx-auto py-6 sm:py-8 text-center min-h-[600px] sm:min-h-[700px] md:min-h-[800px] pb-32 sm:pb-[500px] md:pb-[750px] sm:block ${className}`}>
      {/* Background grid */}
      <div className="order-2 w-full relative mt-12 sm:mt-0 sm:absolute sm:inset-x-0 sm:top-32 md:top-40 z-0 max-w-[22rem] sm:max-w-4xl mx-auto px-2 sm:px-0">
        <AnimatedFeatureGrid items={featureGridItems} />
      </div>

      {/* Foreground content */}
      <div className="order-1 relative z-10">
         <div className="mb-0 sm:mb-20 md:mb-24 text-center mx-auto max-w-4xl px-4">
        <p className="text-sm sm:text-lg md:text-lg text-black font-regular font-roboto pb-4 sm:pb-6 tracking-[0.02em] sm:tracking-[0.04em]">
          Our mission
        </p>
        <h1 className="text-4xl sm:text-3xl md:text-4xl lg:text-7xl text-gray-900 font-bold mx-auto font-roboto pb-6 sm:pb-8 tracking-tight">
          We close the gap.
        </h1>
        <div className="text-black text-sm sm:text-xl md:text-2xl font-medium mx-auto px-4">
          <div className="font-roboto text-[#86868b] tracking-[0.008em] sm:tracking-[0.011em] leading-[1.4] sm:leading-[1.5]">
            <h2 className="text-black inline">Most great ideas stall between concept and product.</h2>{" "}
            <span className="inline">We turn vision into momentum — building focused MVPs that ship fast, with clarity, transparency, and a process that feels effortless.</span>
          </div>
        </div>
      </div>

     
      </div>

       <div className="order-3 relative mt-10 sm:mt-0 sm:absolute sm:bottom-8 sm:left-0 sm:right-0 flex justify-center px-4">
      <a
            href="/contact"
            className="group inline-flex items-center justify-between gap-4 sm:gap-6 rounded-full border border-black bg-black px-6 sm:px-8 py-3 text-base sm:text-md font-normal tracking-wide text-white transition-colors duration-300 hover:bg-gray-800 hover:text-white"
            style={{ minWidth: "240px", maxWidth: "320px" }}
          >
            <span>Let's get started</span>
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
    </section>
  );
};

export default LaunchProblemSolution;
