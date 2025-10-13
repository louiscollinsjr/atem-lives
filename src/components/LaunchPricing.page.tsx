import React from 'react';
import Faq from './Faq.component';

export interface PricingItem {
  label: string;
  title: string;
  price: string;
  discountedPrice: string;
  description: string;
  features?: string[];
}

const LaunchPricingPage: React.FC = () => {
  const pricingItems: PricingItem[] = [
    {
      label: "Starting at",
      title: "Launch Micro",
      price: "$3,500",
      discountedPrice: "$2,500",
      description: "Test your idea in 3 weeks. Single core feature, basic design, perfect for early validation.",
      features: [
        "Single core feature",
        "Basic design system", 
        "3-week delivery",
        "Source code included",
        "Basic documentation"
      ]
    },
    {
      label: "Starting at",
      title: "Launch Starter", 
      price: "$8,500",
      discountedPrice: "$6,500",
      description: "Ship your MVP in 8 weeks. 2-3 features, full support, ready for real users.",
      features: [
        "2-3 core features",
        "Custom design system",
        "8-week delivery",
        "Source code & documentation",
        "User authentication",
        "Basic admin panel",
        "3 months support"
      ]
    },
    {
      label: "Starting at",
      title: "Launch Professional",
      price: "$12,000", 
      discountedPrice: "$9,500",
      description: "Market-ready with integrations. 3-4 features, payment processing, admin dashboard.",
      features: [
        "3-4 core features",
        "Advanced design system",
        "12-week delivery",
        "Full source code & docs",
        "Payment integration",
        "Advanced admin dashboard",
        "API integrations",
        "6 months support",
        "Performance optimization"
      ]
    },
    {
      label: "Starting at",
      title: "Launch Premium",
      price: "$18,000",
      discountedPrice: "$15,000",
      description: "Complex MVP built to scale. 4-5 features, advanced tech, priority support.",
      features: [
        "4-5 core features",
        "Enterprise-grade design",
        "16-week delivery",
        "Complete source code",
        "Advanced payment systems",
        "Custom admin dashboard",
        "Third-party API integrations",
        "Advanced analytics",
        "12 months priority support",
        "Scalable infrastructure",
        "Security audit"
      ]
    }
  ];

  const [selectedPlan, setSelectedPlan] = React.useState<string>('starter');
  const [additionalFeatures, setAdditionalFeatures] = React.useState({
    customDesign: false,
    advancedAnalytics: false,
    prioritySupport: false,
    customIntegrations: false
  });

  const calculateTotal = (planTitle: string) => {
    const plan = pricingItems.find(p => p.title.toLowerCase().includes(planTitle.toLowerCase()));
    if (!plan) return 0;
    
    let basePrice = parseInt(plan.discountedPrice.replace('$', '').replace(',', ''));
    
    if (additionalFeatures.customDesign) basePrice += 2000;
    if (additionalFeatures.advancedAnalytics) basePrice += 1500;
    if (additionalFeatures.prioritySupport) basePrice += 1000;
    if (additionalFeatures.customIntegrations) basePrice += 2500;
    
    return basePrice;
  };

  const getSelectedPlanData = () => {
    return pricingItems.find(p => p.title.toLowerCase().includes(selectedPlan.toLowerCase())) || pricingItems[0];
  };

  const CheckIcon = () => (
    <svg className="inline-block mr-2 h-4 w-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
    </svg>
  );

  return (
    <div className="relative bg-white text-black min-h-screen pt-32">
      {/* Page Header */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 pt-20 pb-20">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 font-roboto">
            Build Your Perfect Launch Plan
          </h1>
          <p className="text-2xl font-medium text-slate-600 max-w-3xl mx-auto mb-12 font-roboto">
            Fixed scope. Clear timelines. No surprises. Building at half the cost of other agencies.
          </p>
          {/* <div className="flex justify-center mb-8">
            <div className="bg-gray-200 p-1 rounded-full flex items-center gap-1">
              <button className="rounded-full px-6 py-2 bg-black text-white font-medium">
                One-time Payment
              </button>
              <button className="rounded-full px-6 py-2 text-gray-600 font-medium hover:text-black transition-colors">
                Payment Plans Available
              </button>
            </div>
          </div> */}
          <div className="flex justify-center">
            <div className="bg-gray-200 border border-gray-200 rounded-full px-4 py-2 inline-flex items-center">
              <span className="text-gray-800 font-medium">Limited Time: 30% Off All Launch Packages</span>
            </div>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-32">
          {/* Left Column: Plan Selection */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold mb-6 font-roboto">1. Choose your launch package</h2>
              <div className="space-y-4">
                {pricingItems.filter(plan => plan.title !== 'Launch Premium').map((plan, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedPlan(plan.title.toLowerCase().split(' ')[1])}
                    className={`p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                      selectedPlan === plan.title.toLowerCase().split(' ')[1]
                        ? 'border-black bg-gray-50 shadow-lg'
                        : 'border-gray-200 hover:border-gray-400 hover:shadow-md'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div>
                        <h3 className="text-xl font-bold mb-2 font-roboto">{plan.title}</h3>
                        <div className="flex items-baseline gap-2 mb-2">
                          <span className="text-2xl font-bold">{plan.discountedPrice}</span>
                          <span className="text-gray-400 line-through text-sm">{plan.price}</span>
                        </div>
                        <p className="text-sm text-slate-600 mb-4">{plan.description}</p>
                      </div>
                      <div className="bg-black text-white text-[10px] font-semibold px-4 py-1 rounded-2xl whitespace-nowrap">
                        30% Off
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-2 gap-2">
                      {plan.features?.slice(0, 6).map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckIcon />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    {plan.features && plan.features.length > 6 && (
                      <div className="text-xs text-slate-500 ml-6 mt-2">
                        +{plan.features.length - 6} more features
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Features */}
            <div>
              <h2 className="text-xl font-semibold mb-6 font-roboto">2. Enhance your package <span className="text-slate-600 text-xs">(Estimated prices based on requirements)</span></h2>
              <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={additionalFeatures.customDesign}
                    onChange={(e) => setAdditionalFeatures({...additionalFeatures, customDesign: e.target.checked})}
                    className="mt-1 w-4 h-4 text-black rounded focus:ring-black"
                  />
                  <div>
                    <div className="font-medium">Custom Brand Design - $2,000</div>
                    <div className="text-sm text-slate-600">Complete brand identity, logo, and design system</div>
                  </div>
                </label>
                
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={additionalFeatures.advancedAnalytics}
                    onChange={(e) => setAdditionalFeatures({...additionalFeatures, advancedAnalytics: e.target.checked})}
                    className="mt-1 w-4 h-4 text-black rounded focus:ring-black"
                  />
                  <div>
                    <div className="font-medium">Advanced Analytics - $1,500</div>
                    <div className="text-sm text-slate-600">Custom analytics dashboard and tracking setup</div>
                  </div>
                </label>
                
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={additionalFeatures.prioritySupport}
                    onChange={(e) => setAdditionalFeatures({...additionalFeatures, prioritySupport: e.target.checked})}
                    className="mt-1 w-4 h-4 text-black rounded focus:ring-black"
                  />
                  <div>
                    <div className="font-medium">Extended Support - $1,000</div>
                    <div className="text-sm text-slate-600">12 months of priority support and maintenance</div>
                  </div>
                </label>
                
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={additionalFeatures.customIntegrations}
                    onChange={(e) => setAdditionalFeatures({...additionalFeatures, customIntegrations: e.target.checked})}
                    className="mt-1 w-4 h-4 text-black rounded focus:ring-black"
                  />
                  <div>
                    <div className="font-medium">Custom Integrations - $2,500</div>
                    <div className="text-sm text-slate-600">Integration with up to 3 third-party services</div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right Column: Plan Summary */}
          <div>
            <div className="sticky top-32">
              <h2 className="text-xl font-semibold mb-6 font-roboto">Your Launch Plan</h2>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="font-semibold text-lg">{getSelectedPlanData().title}</div>
                    <div className="font-bold text-2xl">${calculateTotal(selectedPlan).toLocaleString()}</div>
                  </div>
                  <p className="text-sm text-slate-600">{getSelectedPlanData().description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {additionalFeatures.customDesign && (
                    <div className="flex justify-between text-sm">
                      <span>Custom Brand Design</span>
                      <span>+$2,000</span>
                    </div>
                  )}
                  {additionalFeatures.advancedAnalytics && (
                    <div className="flex justify-between text-sm">
                      <span>Advanced Analytics</span>
                      <span>+$1,500</span>
                    </div>
                  )}
                  {additionalFeatures.prioritySupport && (
                    <div className="flex justify-between text-sm">
                      <span>Extended Support</span>
                      <span>+$1,000</span>
                    </div>
                  )}
                  {additionalFeatures.customIntegrations && (
                    <div className="flex justify-between text-sm">
                      <span>Custom Integrations</span>
                      <span>+$2,500</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-300 pt-4 my-12">
                  <div className="flex justify-between items-center">
                    <div className="font-semibold text-lg">Total Investment</div>
                    <div className="font-bold text-3xl">${calculateTotal(selectedPlan).toLocaleString()}</div>
                  </div>
                  <div className="text-xs text-green-600 mt-2">
                    You're saving ${(parseInt(getSelectedPlanData().price.replace('$', '').replace(',', '')) - calculateTotal(selectedPlan)).toLocaleString()}
                  </div>
                </div>

                <div className="space-y-3">
                  <a
                    href="https://calendly.com/louiscollinsjr/atem-intro"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-black text-white rounded-full py-4 px-6 text-center font-medium hover:bg-gray-800 transition-colors inline-block"
                  >
                    Schedule a meeting
                  </a>
                  
                </div>

                <div className="mt-12 text-xs text-slate-600">
                  <div className="font-medium mb-2">Included Features:</div>
                  <div className="grid grid-cols-2 gap-1">
                    {getSelectedPlanData().features?.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckIcon />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

       

        {/* FAQ Section */}
        <Faq />
        
      </div>
    </div>
  );
};

export default LaunchPricingPage;
