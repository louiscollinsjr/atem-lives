import React from 'react';
import { NavLink } from 'react-router-dom';
import Accordion from './Accordion.component';
import happyPeople01 from '../assets/happyPeople01.png';
import SplashDesign349 from './SplashDesign349.component';
import Design349Info from './Design349Info.component';
import Design349WhyUs from './Design349WhyUs.component';
import ProductNewThings from './ProductNewThings.component';
import { useTranslation } from 'react-i18next';

interface FAQItem {
  title: string;
  content: string;
}

const faqData: FAQItem[] = [
  {
    title: "How much does a website cost?",
    content: "Great question! While our design and development cost is straightforward, there are a few additional costs for domain registration, hosting, and potentially third-party services. We’ll help guide you through all of these so you know exactly what to expect! The ongoing cost of a website typically includes: design and development, domain name registration, hosting, third-party services, and ongoing maintenance."
  },
  {
    title: "What is Local Design 349?",
    content: "349 Design is a special web design service we’re offering to build our community by providing high-quality websites at a discounted price of 349 euros. It’s a limited-time opportunity aimed at helping local businesses get online with professional design."
  },
  {
    title: "Why is the price so low?",
    content: "We believe in giving back to our community and want to make professional web design accessible to local businesses. By offering this special price, we’re able to help entrepreneurs and organizations grow while showcasing our expertise."
  },
  {
    title: "What do I get for 349 euros?",
    content: "You’ll receive a fully customized, responsive website with up to 5 pages, including basic SEO, mobile optimization, and 15 days of unlimited revisions after launch. It's the same quality service we offer at higher price points, just tailored for this initiative."
  },
  {
    title: "How do I get started?",
    content: "Simply fill out our online form to make a request. Once we review your information, you’ll receive a confirmation email with the scope of work and prepayment options. We begin as soon as we receive payment."
  },
  {
    title: "Are there limited spots?",
    content: "Yes, we can only take on a limited number of projects each month to ensure we provide quality service. Once spots fill up, we offer a guaranteed reservation for the next available month with a partial payment."
  },
  {
    title: "What’s the timeline for completing my website?",
    content: "Our typical turnaround time is 2-3 weeks, depending on the project’s complexity. You’ll receive regular updates, and we work closely with you to ensure your site is perfect."
  },
  {
    title: "Do I need to pay everything upfront?",
    content: "No, we offer partial payment options. 50% Upfront Deposit: To start the project and cover initial design and planning work. Final Payment: Due upon project completion, before the website goes live. You’ll alsoneed to make a down payment to reserve your spot, and the rest is due upon project completion."
  },
  {
    title: "Can I make changes to the website after it’s done?",
    content: "Yes! You’ll have 15 days of unlimited revisions after the website is launched. If you need ongoing changes, we offer affordable subscription plans for monthly updates."
  },
  {
    title: "What’s included in the 15 days of unlimited revisions?",
    content: "This includes adjustments to text, images, and layout to ensure your website is exactly how you want it. Major redesigns or additional pages are not included but can be added for an extra fee."
  },
  {
    title: "Do you offer ongoing support?",
    content: "Yes, we offer subscription-based maintenance packages that cover updates, backups, and minor changes to ensure your site stays current and secure."
  },
  // Add more FAQ items as needed
];

const GetStarted: React.FC = () => {
  const { t } = useTranslation();

    // Translate FAQ items
    const translatedFaqData = faqData.map(item => ({
      title: t(item.title),
      content: t(item.content)
    }));

    
  return (
    <div>
      <SplashDesign349 /> {/*translated*/}
      <Design349Info /> {/*translated*/}
      <Design349WhyUs /> {/* translated*/}
      <ProductNewThings /> {/* translated*/}

      
      <div className="container mx-auto py-24 px-12">
        <div className="grid grid-cols-1 grid-rows-1 gap-4 ">
          <div className="">
            <div>
              <h2 className="text-5xl text-black mb-1 font-roboto font-semibold text-center pb-12">
                {t("Questions? Answers.")}
              </h2>
              <div className="space-y-4 text-roboto tracking-wide text-black">
                {translatedFaqData.map((item, index) => (
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
              {t("See if L❤️cal 349 Design is right for you. It totally is.")}
              </h3>
              <NavLink to="/onboarding">
              <button className="tracking-widest bg-black text-white font-semibold py-3 px-6 rounded-lg shadow-md hover:shadow-xl transition duration-300">
                {t("Start here")}
              </button>
              </NavLink>

              <p className="text-gray-600 mt-4 text-sm text-center">
                {t("Prefer to email?")}  
                <a
                  href="mailto:hello@designbyatem.com"
                  className="text-blue-600 hover:text-blue-700 transition duration-300"
                >
                   {t("design.349@atem.gdn")}
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
