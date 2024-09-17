import React from 'react';
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MaestroProductButtonList: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-gray-100 items-center justify-center p-4 sm:p-10 overflow-x-hidden">
      <div className="container flex flex-col items-center justify-center min-h-[80vh] transition-all duration-[800ms] mx-auto px-4 sm:px-0">
        <div className="flex flex-col items-center justify-center p-4 pt-20 sm:p-12">
          <h1 className="text-4xl sm:text-6xl font-medium font-spartan tracking-tighter text-gray-900 text-center uppercase break-words">
            {t('L❤️cal. 349. Design.')}
          </h1>
          <p className="~text-sm/lg sm:~text-base/xl tracking-wide font-space text-center w-full sm:w-3/4 md:w-1/2 p-4 sm:p-8">
            {t(
              'At atem, we believe great design should be accessible to everyone.'
            )}
          </p>
          <p className="~text-sm/lg sm:~text-base/xl tracking-wide font-space text-center w-full sm:w-3/4 p-4">
            {t(
              "Our 349 Design initiative offers affordable web design for our community while continuing to provide cutting-edge solutions for startups and businesses across the globe. Let's create something impactful."
            )}
          </p>
          <p className="justify-center pt-12 sm:pt-20 pb-8">
            <NavLink
              to="/design349"
              className="bg-black text-white text-base sm:text-lg px-4 sm:px-6 py-2 sm:py-3 rounded-full hover:bg-gray-800 transition-colors duration-300"
            >
              {t('Learn more')}
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  );
};

export default MaestroProductButtonList;
