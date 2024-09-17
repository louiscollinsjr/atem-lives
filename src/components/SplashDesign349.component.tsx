import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const SplashDesign349: React.FC = () => {
  const { t } = useTranslation();


  return (
    <section className="bg-black min-h-screen flex items-center justify-center">
      <div className="container mx-auto px-4 py-12">
        <div className="flex flex-col items-center justify-center text-center">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[6rem] font-medium font-spartan tracking-tighter text-white mb-6">
            {t('349.Design')} 
          </h1>
          <p className="text-sm sm:text-base tracking-wide font-space text-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-8">
            {t('At the core of our business lies a passion for crafting designs that inspire and ignite emotions in our clients and their customers.')}
          </p>
          <p className="text-sm sm:text-base tracking-wide font-space text-white max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mb-12">
            {t('Romainia, if you can imagine it, we can design it.')}
          </p>

          <div className="flex flex-col items-center">
            <NavLink
              to="/onboarding"
              className="bg-blue-500 text-white text-sm tracking-wider px-5 py-3 rounded-full font-poppins mb-4"
            >
              {t('Let\'s create together')}
            </NavLink>
            <p className='text-white text-xs'>{t('or learn more below')}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplashDesign349;
