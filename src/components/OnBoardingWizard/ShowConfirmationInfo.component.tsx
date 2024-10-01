import React, {useEffect} from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const ShowConfirmationInfo: React.FC = () => {
  const { t } = useTranslation();
  useEffect(() => {
    // Scroll to the top on step change
    console.log('confirmation step changed');
    window.scrollTo(0, 0);
  },[]);

  return (
    <div className='mx-auto max-w-screen-lg w-full'>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-12">
      <div className="text-left">
      <div className="sm:pt-6">
                <h1 className="text-left text-xs sm:text-4xl md:text-sm font-roboto tracking-wide pb-2">
                  Local.349.Design
                </h1>
                <h1 className="text-left pb-12 text-4xl sm:text-4xl md:text-6xl font-light font-roboto tracking-normal sm:w-[32rem]">
                 We’ve received your submission!
                  <span className="bg-gradient-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
                    {' '}
                    What’s next?
                  </span>
                </h1>
                <p className="text-left text-gray-800 font-light sm:w-[32rem] text-base pt-2 sm:pt-4">
                We’re excited to begin this journey with you! Our team will review your request, and since we have limited spots each month, we’ll confirm your project and timeline soon.<br/><br/> We’re here to help bring your vision to life, and can’t wait to get started together. Stay tuned for more details - we will contact you shortly.
                </p>
              </div>
        </div>
        
      </div>
      <div className="">
      <NavLink to="/design349">
            <button className="bg-black text-white py-2 px-4 rounded font-popins tracking-wider ">
              {t('Continue')} 
            </button>
          </NavLink>
      </div>
      </div>
  );
};

export default ShowConfirmationInfo;
