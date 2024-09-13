import React, { useState } from 'react';

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How much does a website cost?",
    answer: "Great question! While our design and development cost is straightforward, there are a few additional costs for domain registration, hosting, and potentially third-party services. We’ll help guide you through all of these so you know exactly what to expect! The ongoing cost of a website typically includes: design and development, domain name registration, hosting, third-party services, and ongoing maintenance."
  },
  {
    question: "What is the typical timeline for a website project?",
    answer: "On average, a website project takes 6-12 weeks from start to finish. This includes planning, design, development, and testing phases. The exact timeline depends on the project's scope and complexity."
  },
  {
    question: "Do you offer ongoing maintenance and support?",
    answer: "Yes, we offer various maintenance and support packages to keep your website up-to-date, secure, and running smoothly. We can discuss these options once your project is complete."
  },
  // Add more FAQ items as needed
];

const FAQItem: React.FC<{ item: FAQItem }> = ({ item }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-b border-gray-200 py-4">
      <button
        className="flex justify-between items-center w-full text-left"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-medium">{item.question}</span>
        <span className="ml-6 flex-shrink-0">
          {isOpen ? (
            <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
            </svg>
          ) : (
            <svg className="h-6 w-6 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          )}
        </span>
      </button>
      {isOpen && (
        <div className="mt-2 pr-12">
          <p className="text-gray-500">{item.answer}</p>
        </div>
      )}
    </div>
  );
};

const DesignFAQ: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <div >
          <h2 className="md:~text-4xl/5xl text-gray-900 sm:text-4xl mb-8 font-inter">
          Commonly asked questions
          </h2>
          <div className="space-y-4">
            {faqData.map((item, index) => (
              <FAQItem key={index} item={item} />
            ))}
          </div>
        </div>
        <div className=" rounded-lg flex flex-col lg:items-end lg:pl-24">
            <div className='flex flex-col justify-center items-center bg-gray-100 rounded-lg p-12'>
            
            <h3 className="text-4xl text-gray-900 mb-8 text-center font-inter">
            Book a 15-minute intro call
          </h3>
          
          <button className="bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
            Schedule now
          </button>
          <p className="text-gray-600 mt-4 text-sm text-center">Prefer to email? <a href="mailto:hello@designbyatem.com" className="text-blue-600 hover:text-blue-700 transition duration-300">hello@atem.gdn</a></p>
        
            </div>
          </div>
      </div>
    </div>
  );
};

export default DesignFAQ;
