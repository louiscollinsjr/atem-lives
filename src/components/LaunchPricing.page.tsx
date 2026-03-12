import React from 'react';
import { useNavigate } from 'react-router-dom';
import Faq from './Faq.component';
import Cta from './cta.component';

export interface PricingItem {
  id: string;
  label: string;
  title: string;
  price: string;
  range?: string;
  timeline: string;
  description: string;
  features?: string[];
  exclusions?: string[];
}

const LaunchPricingPage: React.FC = () => {
  const navigate = useNavigate();
  const pricingItems: PricingItem[] = [
    {
      id: 'discovery',
      label: "Scoped entry",
      title: "Discovery Sprint",
      price: "$1,500",
      range: "$1,500–$2,500",
      timeline: "1 week",
      description: "A rapid scope, architecture recommendation, and fixed quote you can apply to your build. Fully credited if you proceed.",
      features: [
        "Scope document",
        "Architecture recommendation",
        "Delivery plan & quote",
        "Credited toward build if you start within 30 days"
      ],
      exclusions: [
        "No feature development",
        "No hosting or third-party fees",
        "Limited to discovery only"
      ]
    },
    {
      id: 'proof',
      label: "Project size",
      title: "Proof",
      price: "$9,500",
      range: "$9,500–$15,000",
      timeline: "4–6 weeks",
      description: "Single-feature validation or a narrow MVP to answer one critical question fast.",
      features: [
        "One focused user journey",
        "Clickable prototype or narrow MVP",
        "Essential auth & data model",
        "Deployment included"
      ],
      exclusions: [
        "Hosting and third-party API costs",
        "Post-launch feature additions",
        "Complex integrations"
      ]
    },
    {
      id: 'foundation',
      label: "Project size",
      title: "Foundation",
      price: "$18,000",
      range: "$18,000–$35,000",
      timeline: "6–10 weeks",
      description: "Full MVP with auth, core flows, and one integration—built clean and ready to extend.",
      features: [
        "2–4 core features",
        "Custom UI system",
        "Authentication & roles",
        "One core integration",
        "Deployed to production",
        "Support included"
      ],
      exclusions: [
        "Hosting and third-party API costs",
        "Post-launch feature additions",
        "Multi-region or heavy compliance work"
      ]
    },
    {
      id: 'launch',
      label: "Project size",
      title: "Launch",
      price: "$35,000",
      range: "$35,000–$65,000",
      timeline: "10–16 weeks",
      description: "Production-ready product with payments, advanced admin, and multiple integrations. Most builds land here.",
      features: [
        "3–5 core features",
        "Advanced design system",
        "Payments and billing",
        "Advanced admin & reporting",
        "Multiple integrations",
        "Performance & reliability pass",
        "Up to 6 months support"
      ],
      exclusions: [
        "Hosting and third-party API costs",
        "Post-launch feature additions",
        "Heavy data migration or greenfield mobile apps"
      ]
    },
    {
      id: 'scale',
      label: "Project size",
      title: "Scale",
      price: "$65,000+",
      range: "Custom / $65,000+",
      timeline: "Ongoing",
      description: "Full product builds, automation systems, and longer-term partnerships with senior architecture guidance.",
      features: [
        "Complex systems & automations",
        "Scalable architecture",
        "Multi-integration workflows",
        "Data & analytics stack",
        "Ongoing delivery cadence",
        "Dedicated senior lead"
      ],
      exclusions: [
        "Hosting and third-party API costs",
        "Post-launch feature additions outside scope",
        "Equity-only engagements"
      ]
    }
  ];

  const [selectedPlan, setSelectedPlan] = React.useState<string>('proof');
  const [additionalFeatures, setAdditionalFeatures] = React.useState({
    customDesign: false,
    advancedAnalytics: false,
    prioritySupport: false,
    customIntegrations: false
  });

  const calculateTotal = (planId: string) => {
    const plan = pricingItems.find(p => p.id === planId);
    if (!plan) return 0;
    
    let basePrice = parseInt(plan.price.replace('$', '').replace(',', ''));

    if (additionalFeatures.customDesign) basePrice += 3500;
    if (additionalFeatures.advancedAnalytics) basePrice += 2500;
    if (additionalFeatures.prioritySupport) basePrice += 2500;
    if (additionalFeatures.customIntegrations) basePrice += 2500;
    
    return basePrice;
  };

  const getSelectedPlanData = () => {
    return pricingItems.find(p => p.id === selectedPlan) || pricingItems[0];
  };

  const getPlanDisplayPrice = () => {
    const plan = getSelectedPlanData();
    return plan.range || plan.price;
  };

  const selectedAddOns = React.useMemo(() =>
    Object.entries(additionalFeatures)
      .filter(([_, enabled]) => enabled)
      .map(([key]) => key),
    [additionalFeatures]
  );

  const handleContinue = () => {
    navigate('/contact', {
      state: {
        plan: getSelectedPlanData().title,
        total: calculateTotal(selectedPlan),
        addOns: selectedAddOns,
      },
    });
  };

  const CheckIcon = () => (
    <svg className="inline-block mr-2 h-4 w-4 text-green-600" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"/>
    </svg>
  );

  return (
    <div className="relative bg-white text-black min-h-screen pt-28 sm:pt-32">
      {/* Page Header */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 pt-24 sm:pt-28 md:pt-40 pb-16 sm:pb-20">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 font-roboto">
           Simple Pricing for Serious Builds.
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-slate-600 max-w-3xl mx-auto mb-6 font-roboto">
            Fixed-scope MVP development led by a senior engineer. Built fast, built clean, ready to grow.
          </p>
         
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-32">
          {/* Left Column: Plan Selection */}
          <div className="space-y-8">
            <div>
              <p className="text-base text-slate-600 mb-6 font-roboto">
                Project sizes that match real delivery: from fast validation to full-scale builds, all with fixed scope and confident timelines.
              </p>
              <h2 className="text-xl font-semibold mb-6 font-roboto">1. Choose your development plan</h2>
              <div className="space-y-4">
                {pricingItems.map((plan, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedPlan(plan.id)}
                    className={`p-4 sm:p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                      selectedPlan === plan.id
                        ? 'border-black bg-gray-50'
                        : 'border-gray-200'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 font-roboto">{plan.title}</h3>
                        <div className="mb-2">
                          <div className="flex items-baseline gap-2">
                            <span className="text-sm text-gray-500">From</span>
                            <span className="text-2xl font-bold">{plan.range || plan.price}</span>
                          </div>
                          {/* <div className="text-sm text-gray-600">Timeline: {plan.timeline}</div> */}
                        </div>
                        <p className="text-sm text-slate-600 mb-4">{plan.description}</p>
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {plan.features?.map((feature, idx) => (
                        <div key={idx} className="flex items-center text-sm">
                          <CheckIcon />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* {plan.exclusions && (
                      <div className="mt-4 text-xs text-slate-500">
                        <div className="font-semibold mb-1">What's not included</div>
                        <ul className="list-disc list-inside space-y-1">
                          {plan.exclusions.map((item, idx) => (
                            <li key={idx}>{item}</li>
                          ))}
                        </ul>
                      </div>
                    )} */}
                  </div>
                ))}
              </div>
            </div>

            {/* Additional Features */}
            <div>
              <h2 className="text-xl font-semibold mb-6 font-roboto">2. Enhance your package <span className="text-slate-600 text-xs">(Estimated ranges based on requirements)</span></h2>
              <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
                <label className="flex items-start gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={additionalFeatures.customDesign}
                    onChange={(e) => setAdditionalFeatures({...additionalFeatures, customDesign: e.target.checked})}
                    className="mt-1 w-4 h-4 text-black rounded focus:ring-black"
                  />
                  <div>
                    <div className="font-medium">Brand Identity System – $3,500–$6,000</div>
                    <div className="text-sm text-slate-600">Identity system with palette, type, and component styling for a production product—not just a logo pack.</div>
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
                    <div className="font-medium">Product Analytics – $2,500–$4,500</div>
                    <div className="text-sm text-slate-600">Event taxonomy, GA4 setup, and an in-app dashboard so you know which features drive activation and revenue from day one.</div>
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
                    <div className="font-medium">Priority Support Retainer – $2,500–$3,000</div>
                    <div className="text-sm text-slate-600">Post-launch priority access for fixes and small enhancements; sized as a meaningful discount vs. hourly ad hoc work.</div>
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
                    <div className="font-medium">Custom Integrations</div>
                    <div className="text-sm text-slate-600 space-y-1">
                      <div>Light (webhooks, read-only API) — from $1,200 each</div>
                      <div>Heavy (bidirectional, OAuth, custom logic) — from $2,500 each</div>
                    </div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          {/* Right Column: Plan Summary */}
          <div>
            <div className="sticky top-32">
              <h2 className="text-xl font-semibold mb-6 font-roboto">Your development plan</h2>
              <div className="bg-gray-50 rounded-2xl p-8">
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-4">
                    <div className="font-semibold text-lg">{getSelectedPlanData().title}</div>
                    <div className="font-bold text-2xl">{getPlanDisplayPrice()}</div>
                  </div>
                  <p className="text-sm text-slate-600">{getSelectedPlanData().description}</p>
                </div>

                <div className="space-y-3 mb-6">
                  {additionalFeatures.customDesign && (
                    <div className="flex justify-between text-sm">
                      <span>Brand Identity System</span>
                      <span>$3,500–$6,000</span>
                    </div>
                  )}
                  {additionalFeatures.advancedAnalytics && (
                    <div className="flex justify-between text-sm">
                      <span>Product Analytics</span>
                      <span>$2,500–$4,500</span>
                    </div>
                  )}
                  {additionalFeatures.prioritySupport && (
                    <div className="flex justify-between text-sm">
                      <span>Priority Support Retainer</span>
                      <span>$2,500–$3,000</span>
                    </div>
                  )}
                  {additionalFeatures.customIntegrations && (
                    <div className="flex justify-between text-sm">
                      <span>Custom Integrations</span>
                      <span>$1,200+ / $2,500+</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-300 pt-4 my-12">
                  <div className="flex justify-between items-center">
                    <div className="font-semibold text-lg">Starting at</div>
                    <div className="font-bold text-3xl">${calculateTotal(selectedPlan).toLocaleString()}</div>
                  </div>
                  {/* <div className="text-xs text-slate-600 mt-2">Range for this tier: {getPlanDisplayPrice()}</div> */}
                </div>

                <div className="space-y-3">
                  <button
                    type="button"
                    onClick={handleContinue}
                    className="w-full bg-black text-white rounded-full py-4 px-6 text-center font-medium hover:bg-gray-800 transition-colors"
                  >
                    Continue
                  </button>
                  <p className="text-xs text-slate-600 text-center">We’ll carry your selected package into the contact form.</p>
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
        <Cta />
        
      </div>
    </div>
  );
};

export default LaunchPricingPage;
