import React from 'react';

export interface PricingItem {
  label: string;
  title: string;
  price: string;
  discountedPrice: string;
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
      description: "Test your idea in 3 weeks. Single core feature, basic design, perfect for early validation."
    },
    {
      label: "Starting at",
      title: "Launch Starter", 
      price: "$8,500",
      discountedPrice: "$6,500",
      description: "Ship your MVP in 8 weeks. 2-3 features, full support, ready for real users."
    },
    {
      label: "Starting at",
      title: "Launch Professional",
      price: "$12,000", 
      discountedPrice: "$9,500",
      description: "Market-ready with integrations. 3-4 features, payment processing, admin dashboard."
    },
    {
      label: "Starting at",
      title: "Launch Premium",
      price: "$18,000",
      discountedPrice: "$15,000",
      description: "Complex MVP built to scale. 4-5 features, advanced tech, priority support."
    }
  ];

  return (
    <section className={`max-w-7xl mx-auto px-2 md:px-2 py-20 mb-28 ${className}`}>
      {/* Section Header */}
      <div className="text-center mb-28">
        <p className="text-2xl text-black font-bold font-roboto pb-6 tracking-[0.04em]">
          From idea to launch
        </p>
        <h1 className="text-3xl md:text-7xl text-gray-900 font-bold font-roboto pb-8 tracking-tight">
          Pricing That Makes Sense
        </h1>
        <p className="text-2xl font-medium text-[#000000] font-roboto max-w-3xl mx-auto">
          Fixed scope. Clear timelines. No surprises. Building at half the cost of traditional US agencies.
        </p>
      </div>

      {/* Pricing Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 mb-12 bg-[#ebebeb]/15 rounded-2xl p-2">
        {pricingItems.map((item, index) => (
          <div key={index} className="text-center bg-[#f7f7f7] border border-[#ffffff] rounded-2xl p-8">
            {/* <div className="text-sm text-[#999] tracking-[0.1em] mb-3 font-roboto">
              {item.label}
            </div> */}
            <h3 className="text-3xl md:text-3xl font-semibold text-gray-900 mb-2 font-roboto tracking-tight">
              {item.title}
            </h3>
            <p className="text-[#000000] text-lg leading-relaxed font-roboto max-w-sm text-center mx-auto py-2">
              {item.description}
            </p>
            <p className="text-[#000000] text-sm leading-relaxed font-roboto max-w-sm text-center mx-auto pt-4">From <span className="font-semibold">{item.price}</span> {item.discountedPrice && <span className="text-gray-600 text-sm leading-relaxed font-roboto max-w-sm text-center mx-auto line-through">{item.discountedPrice}</span>}. 30% off for limited time.</p>
            {/* <div className="text-[10px] font-semibold text-white bg-blue-500 rounded-full text-center px-3 py-1 mb-4 font-roboto inline-block">Get Started</div> */}
            {/* <div className="text-[10px] font-semibold text-white bg-blue-500 rounded-full text-center px-3 py-1 mb-4 font-roboto inline-block"> 30% Off</div>
            <div className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4 font-roboto">
              {item.price} <span className="text-gray-400 text-sm leading-relaxed font-roboto max-w-sm text-center mx-auto line-through">{item.discountedPrice}</span>
            </div>
            <p className="text-[#666] text-lg leading-relaxed font-roboto max-w-sm text-center mx-auto">
              {item.description}
            </p> */}
          </div>
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
            className="group inline-flex items-center justify-between gap-6 rounded-full border border-black bg-black px-8 py-3 text-lg font-medium tracking-wide text-white transition-colors duration-300 hover:bg-white hover:text-black"
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
