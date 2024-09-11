import React from 'react';
import { NavLink } from 'react-router-dom';
import Accordion from './Accordion.component';
import happyPeople01 from '../assets/happyPeople01.png';
import SplashDesign349 from './SplashDesign349.component';
import Design349Info from './Design349Info.component';
import Design349WhyUs from './Design349WhyUs.component';
import ProductNewThings from './ProductNewThings.component';

interface FAQItem {
  title: string;
  content: string;
}

const faqData: FAQItem[] = [
  {
    title: 'How much does a website cost?',
    content:
      "The cost of a website varies depending on its complexity, features, and design requirements. Our projects typically range from $5,000 to $50,000+. We'll provide a detailed quote after discussing your specific needs.",
  },
  {
    title: 'What is the typical timeline for a website project?',
    content:
      "On average, a website project takes 6-12 weeks from start to finish. This includes planning, design, development, and testing phases. The exact timeline depends on the project's scope and complexity.",
  },
  {
    title: 'Do you offer ongoing maintenance and support?',
    content:
      'Yes, we offer various maintenance and support packages to keep your website up-to-date, secure, and running smoothly. We can discuss these options once your project is complete.',
  },
  // Add more FAQ items as needed
];

const GetStarted: React.FC = () => {
  return (
    <div>
      <SplashDesign349 />
      <Design349Info />
      <Design349WhyUs />
      <ProductNewThings />

      
      <div className="container mx-auto py-24 px-12">
        <div className="grid grid-cols-1 grid-rows-1 gap-4 ">
          <div className="">
            <div>
              <h2 className="text-5xl text-black mb-1 font-roboto font-semibold text-center pb-12">
                Questions? Answers.
              </h2>
              <div className="space-y-4 text-roboto tracking-wide text-black">
                {faqData.map((item, index) => (
                  <Accordion key={index} item={item} />
                ))}
              </div>
            </div>
          </div>
          <div className="py-16">
            <div className="bg-gray-100 rounded-lg p-12 text-center">
            <img
                src={happyPeople01}
                alt="Happy People"
                className="w-48 h-48 mx-auto mb-8 rounded-full object-cover"
              />
              <h3 className="text-3xl text-gray-900 mb-8 text-center font-space font-bold">
              See if <span className="uppercase">L❤️cal.Design.349</span> is right for you.<br />(It totally is.)
              </h3>
              <NavLink to="/onboarding">
              <button className="tracking-widest bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                Start here
              </button>
              </NavLink>

              <p className="text-gray-600 mt-4 text-sm text-center">
                Prefer to email?{' '}
                <a
                  href="mailto:hello@designbyatem.com"
                  className="text-blue-600 hover:text-blue-700 transition duration-300"
                >
                  design.349@atem.gdn
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
