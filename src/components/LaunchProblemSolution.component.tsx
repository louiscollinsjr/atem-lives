import React from 'react';
import AnimatedFeatureGrid, { FeatureSquare } from './AnimatedFeatureGrid.component';

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
      backgroundImage: '/src/assets/square1.png',
      overlayColor: '#012d55',
    },{
      id: 'velocity',
      icon: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
      title: 'Launch, today.',
      subtitle: 'Every product starts as an idea. Let\'s start making yours real, today.',
      description:'',
      ctaLabel: 'Get started',
      backgroundImage: '/src/assets/square2.png',
      overlayColor: '#77471b',
    },{
      id: 'velocity',
      icon: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
      title: 'Launch, today.',
      subtitle: 'Every product starts as an idea. Let\'s start making yours real, today.',
      description:'',
      ctaLabel: 'Get started',
      backgroundImage: '/src/assets/square3.png',
      overlayColor: '#000000',
    },{
      id: 'velocity',
      icon: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
      title: 'Launch, today.',
      subtitle: 'Every product starts as an idea. Let\'s start making yours real, today.',
      description:'',
      ctaLabel: 'Get started',
      backgroundImage: '/src/assets/square4.png',
      overlayColor: '#000000',
    },{
      id: 'velocity',
      icon: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
      title: 'Launch, today.',
      subtitle: 'Every product starts as an idea. Let\'s start making yours real, today.',
      description:'',
      ctaLabel: 'Get started',
      backgroundImage: '/src/assets/square5.png',
      overlayColor: '#000000',
    },{
      id: 'velocity',
      icon: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1400&q=80',
      title: 'Launch, today.',
      subtitle: 'Every product starts as an idea. Let\'s start making yours real, today.',
      description:'',
      ctaLabel: 'Get started',
      backgroundImage: '/src/assets/square7.png',
      overlayColor: '#5e220b',
    },
  ];

  return (
    <section className={`relative max-w-5xl mx-auto px-6 md:px-10 py-6 text-center min-h-[800px] pb-[750px] ${className}`}>
      {/* Background grid */}
      <div className="absolute inset-x-0 top-40 z-0 max-w-4xl mx-auto">
        <AnimatedFeatureGrid items={featureGridItems} />
      </div>

      {/* Foreground content */}
      <div className="relative z-10">
        {/* <div className="space-y-6">
          <h2 className="text-xl md:text-4xl max-w-2xl mx-auto font-semibold tracking-wide">Most great ideas stall between concept and product — <span className="font-roboto text-slate-600">We close the gap.</span></h2>
          <p className="text-lg text-slate-700">You've got the vision — but technical complexity, unclear costs, and delays can keep you stuck. We close the gap — building focused MVPs that actually ship, with transparent pricing and a process that feels effortless.</p>
        </div> */}
         <div className="mb-24 text-center mx-auto max-w-4xl">
        <p className="text-2xl  text-black font-bold font-roboto  pb-6 tracking-[0.04em]">
          Our mission
        </p>
        <h1 className="text-3xl md:text-7xl text-gray-900 font-bold mx-auto font-roboto pb-8 tracking-tight">
          We close the gap.
        </h1>
        <div className="text-black text-2xl font-medium mx-auto">
          <p className="font-roboto text-[#86868b] tracking-[0.011em] leading-[1.5]">
            <h2 className="text-black inline">Most great ideas stall between concept and product.</h2>{" "}
            <span>We turn vision into momentum — building focused MVPs that ship fast, with clarity, transparency, and a process that feels effortless.</span>
          </p>
        </div>
      </div>

     
      </div>

       <div className="absolute bottom-8 left-0 right-0 flex justify-center">
      <a
            href="/pricing"
            className="group inline-flex items-center justify-between gap-6 rounded-full border border-black bg-black px-8 py-3 text-lg font-medium tracking-wide text-white transition-colors duration-300 hover:bg-white hover:text-black"
            style={{ minWidth: "280px" }}
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
