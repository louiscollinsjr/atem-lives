import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';


const SplashDesign349: React.FC = () => {
  const { t } = useTranslation();


  return (
    <section className="bg-black items-center justify-center">
      <div className="container flex flex-col items-center justify-center h-[70vh] transition-all duration-800 mx-auto">
        <div className="flex flex-col items-center justify-center p-12">
          <h1 className="~text-[6rem]/[10rem] font-medium font-spartan tracking-tighter text-white items-center justify-center text-center">
            {t('349.Design')} 
          </h1>
          <p className="~text-xs/base tracking-wide justify-center font-space text-center text-white w-96">
            {t('At the core of our business lies a passion for crafting designs that inspire and ignite emotions in our clients and their customers.')}
          </p>
          <p className="pt-20 ~text-xs/base tracking-wide justify-center font-space text-center text-white w-96">
            {t('Romainia, if you can imagine it, we can design it.')}
          </p>
         

          <div className="grid grid-cols-1grid-rows-1 gap-4 items-center justify-center text-center pt-20">
            <div> <p className="justify-center">
            <NavLink
              to="/onboarding"
              className="bg-blue-500 text-white text-sm tracking-wider px-5 py-3 rounded-full font-poppins"
            >
              {t('Let\'s create together')}
            </NavLink>
          </p></div>
            <div><p className='text-white text-xs pt-4'> {t('or learn more below')}</p></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SplashDesign349;
