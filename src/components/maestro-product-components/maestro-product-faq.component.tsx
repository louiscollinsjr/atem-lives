import React, { useState } from 'react';


const MaestroFAQ: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "Why wouldn't I just hire a full-time engineer?",
      answer: `That's a good question! To begin with, the cost of hiring a full-time senior-level engineer now exceeds $100,000 annually, not including benefits. Furthermore, it can be difficult to find a qualified engineer who is available.
      
      Apart from that, you may not always have enough work to keep them busy, which means you'll be paying for their time even when you don't need it.
      
      With our monthly plan, you can pause and resume your subscription as often as you need to, ensuring that you only pay for the time you need your engineer to work for you.`,
    },
    {
      question:
        'What programming languages do you use to write your automation scripts?',
      answer: `We utilize native programming in 1E and Nexthink. Additionally, we develop with Microsoft PowerShell scripting for servers and workstations, allowing us to quickly adapt to your chosen deployment tools. We can make you successful no matter the tool.`,
    },
    {
      question: 'Is there a free trial available?',
      answer: `No, there is an involved onboarding process, which takes time and energy from both sides. However, you can pause or cancel your plan at any time.`,
    },
    {
      question: 'What is your cancellation policy?',
      answer: `We understand that things change. You can pause or cancel your plan at any time.`,
    },
    {
      question: 'Can other info be added to an invoice?',
      answer: `No, there is an involved onboarding process, which takes time and energy from both sides. However, you can pause or cancel your plan at any time.`,
    },
    {
      question: 'Is there a free trial available?',
      answer: `The invoicing is handled by Stripe, and is based off the customer information provided to that service.`,
    },
    {
      question: 'How does billing work?',
      answer: `Plans are per account and recurring unless an end of engagement date is communicated.`,
    },
  ];

  return (
    <section className="py-12 mx-auto tracking-wide">
      <div className="max-w-4xl mx-auto p-6 bg-white">
        <h1 className="~text-4xl/6xl font-semibold text-center">
          Frequently Asked Questions
        </h1>
        <p className="text-center pb-12 ~text-2xl/6xl py-10">
          Everything you need to know about the product and billing.
        </p>
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b overflow-hidden">
              <button
                className="w-full p-4 text-left"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium text-lg">{faq.question}</span>
                  <svg
                    className={`text-gray-400 w-6 h-6 transform transition-transform ${
                      activeIndex === index ? 'rotate-180' : 'rotate-0'
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M19 9l-7 7-7-7"
                    ></path>
                  </svg>
                </div>
              </button>
              {activeIndex === index && (
                <div className="p-4 bg-white">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* <section className="bg-zinc-50 my-12 py-4 rounded-lg w-full">
        <div>
          <div >
            <h4 className='text-5xl font-semibold text-center py-12'>Get in touch</h4>
            
            <div className="text-center text-lg">
              Can’t find the answer you’re looking for? Please chat to our
              friendly team.
            </div>
            <div className="content-center text-center">
              <div className="my-6">
             
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
        </div>
      </section> */}
    </section>
  );
};

export default MaestroFAQ;
