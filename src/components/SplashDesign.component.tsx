import React from "react";
import { NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const MaestroProductButtonList: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className="bg-gray-100 items-center justify-center">
      <div className='container flex flex-col items-center justify-center h-[80vh] transition-all duration-800 mx-auto'>
        <div className="flex flex-col items-center justify-center p-12">
          <h1 className="~text-[6rem]/[10rem] font-medium font-spartan tracking-tighter text-gray-900 items-center justify-center text-center uppercase">
          {t("L❤️cal. 349. Design.")}
          </h1>
          <p className="~text-base/xl tracking-wide justify-center font-space text-center md:w-1/2 p-8">
          {t("At atem, we believe great design should be accessible to everyone.")}
          </p>
          <p className="~text-base/xl tracking-wide justify-center font-space text-center md:w-3/4 ">
          {t("Our 349 Design initiative offers affordable web design for our community while continuing to provide cutting-edge solutions for startups and businesses across the globe. Let's create something impactful.")}
          </p> 
          <p className="justify-center pt-20">
          <NavLink
            to="/design349"
            className="bg-black text-white text-lg px-4 py-1.5 rounded-full"
          >
            {t("Learn more")}
          </NavLink>
        </p>
        </div>
       
      </div>
    </section>
  );
}

export default MaestroProductButtonList;