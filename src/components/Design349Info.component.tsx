import React from 'react';
import { NavLink } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';
import { useTranslation } from 'react-i18next';

const Design349Info: React.FC = () => {
  const { t } = useTranslation();

  return (
    <section className='px-6'>

    <div className="max-w-7xl mx-auto px-4 py-24 container-x"> 

      <div className="bg-red-500 rounded-3xl text-center flex flex-col justify-end items-center p-6 h-[700px] mb-24">
        <div className="flex flex-col items-center mb-12">
          <p className="text-2xl w-1/2 font-bold text-black-500 uppercase py-3">{t('L❤️cal love.')}</p>
          <h1 className="~text-4xl/6xl md:text-6xl font-bold mb-4 text-white md:w-1/2">{t('Stunning Websites, Unbeatable Price. Just €349!')}</h1>
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 px-2 pt-16">
        <div>
          <h2 className="~text-6xl/8xl font-semibold mb-8 bg-gradient-to-r from-red-500 to-blue-500 bg-clip-text text-transparent md:pr-16 pb-4">{t('Our creative process, designed around you.')}</h2>
          {/* You can add an image or additional content here if needed */}
          <NavLink to="/onboarding">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-normal py-2 px-4 rounded flex items-center">
              {t('Get started')} <FaArrowRight className="ml-2" />
            </button>
          </NavLink>
        </div>

        <div className='pt-6'>
          <ol className="list-disc list-outside space-y-6 px-4">
            {[
              { title: 'Make a Request', description: 'Start by filling out our simple online form. Let us know about your project, and we\'ll get back to you quickly with a confirmed scope of work and prepayment options.' },
              { title: 'Secure Your Spot', description: 'We\'ll send you a confirmation email with everything you need to know. To lock in your spot, simply make a partial payment. Your project will be officially in queue!' },
              { title: 'Let the Magic Begin', description: 'Once we\'ve received your payment, we\'ll get to work creating your dream website! We\'ll send regular updates for review, ensuring everything is just right.' },
              { title: 'Unlimited Revisions for 15 Days', description: 'After delivering the initial design, you\'ll have 15 days of unlimited updates. This is your time to make tweaks and adjustments—until your site is perfect.' },
              { title: 'Launch & Handover', description: 'Once everything is set, we\'ll publish your site and hand over the keys. Your site will be live, fully functional, and ready to impress.' },
              { title: 'Stay Fresh with a Monthly Subscription', description: 'Want to keep your site updated? We offer a monthly subscription for ongoing maintenance and updates, so your site always stays fresh and relevant.' },
            ].map((step, index) => (
              <li key={index} >
                <h3 className="text-xl font-semibold inline text-roboto">{t(step.title)}</h3>
                <p className="mt-2 text-roboto text-gray-800 tracking-wide text-base">{t(step.description)}</p>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </div>
    </section>
  );
};

export default Design349Info;
