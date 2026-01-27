import React from 'react';
import { useNavigate } from 'react-router-dom';
import Faq from './Faq.component';
import Cta from './cta.component';

export interface PricingItem {
  label: string;
  title: string;
  price: string;
  discountedPrice?: string;
  discountLabel?: string;
  hasDiscount?: boolean;
  description: string;
  features?: string[];
}

const LaunchPricingPage: React.FC = () => {
  const navigate = useNavigate();
  const pricingItems: PricingItem[] = [
    {
      label: "Starting at",
      title: "Launch Micro",
      price: "$4,500",
      discountedPrice: "$3,150",
      discountLabel: "Limited time 30% off",
      hasDiscount: true,
      description: "For testing one core feature focused on a single user journey, so you can validate one big assumption fast, simple design, 3-week delivery.",
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
      hasDiscount: false,
      description: "For your first real users: 2–3 core features that cover your main user journey end to end (onboarding, core action, and basic admin), custom design, 8-week MVP.",
      features: [
        "2-3 core features",
        "Custom design system",
        "8-week delivery",
        "Source code & full documentation",
        "User authentication",
        "Basic admin panel",
        "3 months support"
      ]
    },
    {
      label: "Starting at",
      title: "Launch Professional",
      price: "$12,000",
      hasDiscount: false,
      description: "For going to market: 3–4 core features including payments, advanced admin, and integrations, so you can launch to paying users.",
      features: [
        "3-4 core features",
        "Advanced design system",
        "12-week delivery",
        "Full source code & documentation",
        "Payment integration (e.g., Stripe)",
        "Advanced admin dashboard",
        "Up to 3 custom integrations (CRM, email, analytics)",
        "6 months support",
        "Performance optimization"
      ]
    },
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
    
    let basePrice = plan.hasDiscount && plan.discountedPrice
      ? parseInt(plan.discountedPrice.replace('$', '').replace(',', ''))
      : parseInt(plan.price.replace('$', '').replace(',', ''));
    
    if (additionalFeatures.customDesign) basePrice += 2000;
    if (additionalFeatures.advancedAnalytics) basePrice += 1500;
    if (additionalFeatures.prioritySupport) basePrice += 1000;
    if (additionalFeatures.customIntegrations) basePrice += 2500;
    
    return basePrice;
  };

  const getSelectedPlanData = () => {
    return pricingItems.find(p => p.title.toLowerCase().includes(selectedPlan.toLowerCase())) || pricingItems[0];
  };

  const getPlanDisplayPrice = () => {
    const plan = getSelectedPlanData();
    return plan.hasDiscount && plan.discountedPrice ? plan.discountedPrice : plan.price;
  };

  const selectedAddOns = React.useMemo(() =>
    Object.entries(additionalFeatures)
      .filter(([_, enabled]) => enabled)
      .map(([key]) => key),
    [additionalFeatures]
  );

  const handleContinue = () => {
    const planData = getSelectedPlanData();
    navigate('/contact', {
      state: {
        plan: planData.title,
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
            Transparent Pricing. Real Timelines.
          </h1>
          <p className="text-xl sm:text-2xl font-medium text-slate-600 max-w-3xl mx-auto mb-12 font-roboto">
            Every package includes fixed scope, clear milestones, and direct collaboration with a senior developer. Typical agencies charge around $25,000 for an 8-week MVP; Launch starts at $6,500.
          </p>
          <div className="flex justify-center">
            <div className="bg-gray-200 border border-gray-200 rounded-full px-4 py-2 inline-flex items-center">
              <span className="text-gray-800 font-medium">Limited Time: 30% Off Launch Micro</span>
            </div>
          </div>
        </div>

        {/* Two-column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 my-32">
          {/* Left Column: Plan Selection */}
          <div className="space-y-8">
            <div>
              <p className="text-base text-slate-600 mb-6 font-roboto">
                Three clear tiers: validate one core idea, ship your MVP, or go to market with payments and integrations—all with fixed scope and timelines.
              </p>
              <h2 className="text-xl font-semibold mb-6 font-roboto">1. Choose your development plan</h2>
              <div className="space-y-4">
                {pricingItems.filter(plan => plan.title !== 'Launch Premium').map((plan, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedPlan(plan.title.toLowerCase().split(' ')[1])}
                    className={`p-4 sm:p-6 rounded-2xl border-2 cursor-pointer transition-all ${
                      selectedPlan === plan.title.toLowerCase().split(' ')[1]
                        ? 'border-black bg-gray-50'
                        : 'border-gray-200'
                    }`}
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3 className="text-xl font-bold mb-2 font-roboto">{plan.title}</h3>
                        <div className="mb-2">
                          {plan.hasDiscount && (
                            <div className="text-sm text-gray-500 mb-1">From {plan.price}</div>
                          )}
                          <div className="flex items-baseline gap-2">
                            {!plan.hasDiscount && (
                              <span className="text-sm text-gray-500 mr-1">From</span>
                            )}
                            <span className="text-2xl font-bold">
                              {plan.hasDiscount && plan.discountedPrice ? plan.discountedPrice : plan.price}
                            </span>
                            {plan.hasDiscount && plan.discountLabel && (
                              <span className="text-xs text-green-600 font-medium">{plan.discountLabel}</span>
                            )}
                          </div>
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
                    <div className="font-medium">Custom Brand Design – from $2,000</div>
                    <div className="text-sm text-slate-600">Logo, palette, 1–2 type choices, simple component styles; scales with scope.</div>
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
                    <div className="font-medium">Advanced Analytics – from $1,500</div>
                    <div className="text-sm text-slate-600">GA4 + event design plus 1 in-app dashboard; launch with activation/retention/revenue cohorts tracked.</div>
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
                    <div className="font-medium">Extended Support – $1,000</div>
                    <div className="text-sm text-slate-600">Up to 25 hours of priority support after launch — a significant discount vs. our standard $150/hour rate.</div>
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
                    <div className="font-medium">Custom Integrations – from $2,500</div>
                    <div className="text-sm text-slate-600">Up to 3 services typical; light vs heavy integrations priced accordingly.</div>
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
                      <span>Custom Brand Design – from $2,000</span>
                      <span>from $2,000</span>
                    </div>
                  )}
                  {additionalFeatures.advancedAnalytics && (
                    <div className="flex justify-between text-sm">
                      <span>Advanced Analytics</span>
                      <span>from $1,500</span>
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
                      <span>Custom Integrations – from $2,500</span>
                      <span>from $2,500</span>
                    </div>
                  )}
                </div>

                <div className="border-t border-gray-300 pt-4 my-12">
                  <div className="flex justify-between items-center">
                    <div className="font-semibold text-lg">Total Investment</div>
                    <div className="font-bold text-3xl">${calculateTotal(selectedPlan).toLocaleString()}</div>
                  </div>
                  {(() => {
                    const savings = parseInt(getSelectedPlanData().price.replace('$', '').replace(',', '')) - calculateTotal(selectedPlan);
                    return savings > 0 ? (
                      <div className="text-xs text-green-600 mt-2">
                        You're saving ${savings.toLocaleString()}
                      </div>
                    ) : null;
                  })()}
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
