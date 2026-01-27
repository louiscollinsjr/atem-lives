import React from 'react';

export interface PricingItem {
  label: string;
  title: string;
  price: string;
  discountedPrice?: string;
  discountLabel?: string;
  hasDiscount?: boolean;
  description: string;
}

export interface PricingTeaserProps {
  className?: string;
}

const LaunchPricingTeaser: React.FC<PricingTeaserProps> = ({ className = "" }) => {
  const pricingItems: PricingItem[] = [
    {
      label: "Starting at",
      title: "Launch Micro",
      price: "$3,500",
      discountedPrice: "$2,500",
      discountLabel: "Limited time 30% off",
      hasDiscount: true,
      description: "1 core feature focused on a single user journey, so you can validate one big assumption fast."
    },
    {
      label: "Starting at",
      title: "Launch Starter", 
      price: "$8,500",
      hasDiscount: false,
      description: "2–3 core features that cover your main user journey end to end (onboarding, core action, and basic admin)."
    },
    {
      label: "Starting at",
      title: "Launch Professional",
      price: "$12,000",
      hasDiscount: false,
      description: "3–4 core features including payments, advanced admin, and integrations, so you can launch to paying users."
    }
  ];

  return (
    <section className={`max-w-7xl mx-auto px-4 sm:px-6 md:px-2 py-16 sm:py-20 mb-24 sm:mb-28 ${className}`}>
      {/* Section Header */}
      <div className="text-center mb-16 sm:mb-24">
        <p className="text-xl sm:text-2xl text-black font-bold font-roboto pb-4 sm:pb-6 tracking-[0.04em]">
          From idea to launch
        </p>
        <h1 className="text-3xl sm:text-4xl md:text-6xl text-gray-900 font-bold font-roboto pb-6 sm:pb-8 tracking-tight">
          Pricing That Makes Sense
        </h1>
        <p className="text-lg sm:text-xl font-medium text-[#000000] font-roboto max-w-3xl mx-auto px-2">
          Three clear tiers: validate your idea, launch your MVP, or go to market with integrations — all with fixed scope and timelines.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-4 mb-10 sm:mb-12 bg-[#ebebeb]/15 rounded-2xl p-3 sm:p-4">
        {pricingItems.map((item, index) => (
          <a 
            key={index} 
            href="/pricing"
            className="text-center bg-[#f7f7f7] border border-[#ffffff] rounded-2xl p-6 sm:p-8 block cursor-pointer"
          >
            {/* <div className="text-sm text-[#999] tracking-[0.1em] mb-3 font-roboto">
              {item.label}
            </div> */}
            <h3 className="text-3xl md:text-3xl font-semibold text-gray-900 mb-2 font-roboto tracking-tight">
              {item.title}
            </h3>
            <p className="text-[#000000] text-base sm:text-lg leading-relaxed font-roboto max-w-sm text-center mx-auto py-2 min-h-[72px] sm:min-h-[80px] flex items-center justify-center">
              {item.description}
            </p>
            <div className="pt-4 min-h-[80px] flex flex-col justify-center">
              {item.hasDiscount && (
                <div className="text-sm text-gray-500 mb-1">From {item.price}</div>
              )}
              <div className="flex items-baseline justify-center gap-2">
                {!item.hasDiscount && (
                  <span className="text-sm text-gray-500 mr-1">From</span>
                )}
                <span className="text-2xl font-bold">
                  {item.hasDiscount && item.discountedPrice ? item.discountedPrice : item.price}
                </span>
                {item.hasDiscount && item.discountLabel && (
                  <span className="text-xs text-green-600 font-medium">{item.discountLabel}</span>
                )}
              </div>
            </div>
            {/* <div className="text-[10px] font-semibold text-white bg-blue-500 rounded-full text-center px-3 py-1 mb-4 font-roboto inline-block">Get Started</div> */}
            {/* <div className="text-[10px] font-semibold text-white bg-blue-500 rounded-full text-center px-3 py-1 mb-4 font-roboto inline-block"> 30% Off</div>
            <div className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 font-roboto">
              {item.price} <span className="text-gray-400 text-sm leading-relaxed font-roboto max-w-sm text-center mx-auto line-through">{item.price}</span>
            </div>
            <p className="text-[#666] text-lg leading-relaxed font-roboto max-w-sm text-center mx-auto">
              {item.description}
            </p> */}
          </a>
        ))}
      </div>

      {/* CTA Section */}
      <div className="text-center pt-20 border-t border-gray-200/50">
        <p className="text-lg text-[#666] mb-8 font-roboto">
          All packages include fixed scope, direct collaboration, and clean documented code.
        </p>
        <div className="flex flex-col items-center space-y-6">
          <a
            href="/pricing"
            className="group inline-flex items-center justify-between gap-6 rounded-full border border-black bg-black px-8 py-3 text-lg font-medium tracking-wide text-white transition-colors duration-300 hover:bg-gray-800 hover:text-white"
            style={{ minWidth: "280px" }}
          >
            <span>View Full Pricing & Details</span>
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
          <p className="text-base text-[#666] font-roboto">
            Not sure which package?{" "}
            <a href="#contact" className="text-black underline hover:text-gray-700 transition-colors">
              Schedule a free consultation
            </a>
          </p>
        </div>
      </div>
    </section>
  );
};

export default LaunchPricingTeaser;
