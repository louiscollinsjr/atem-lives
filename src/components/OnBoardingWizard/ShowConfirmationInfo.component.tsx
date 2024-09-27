import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const ShowConfirmationInfo: React.FC = () => {
  const { t } = useTranslation();
  return (
    <div className='mx-auto max-w-screen-lg'>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="text-leftp-4 p-8 md:p-12 pb-0">
      
          <h1 className="text-left text-3xl font-inter py-4">
          We’ve received your submission! What’s next?
          </h1>
          <p className="flex flex-col gap-4 text-left font-popins text-base text-gray-600">
            <span>We’re excited to begin this journey with you!</span> 
            <span>Our team will review your request, and since we have limited spots each month, we’ll confirm your project and timeline soon.</span>
            <span>We’re here to help bring your vision to life, and can’t wait to get started together.</span> 
            <span>Stay tuned for more details!</span>
          </p>
        </div>
        <div className=" p-8">
         
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-8">
      <NavLink to="/design349">
            <button className="bg-black text-white py-2 px-4 rounded flex items-center font-popins tracking-wider w-full">
              {t('Continue')} 
            </button>
          </NavLink>
      </div>
      </div>
  );
};

export default ShowConfirmationInfo;
