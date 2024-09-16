import React from 'react';
import { useTranslation } from 'react-i18next';

const ProductATEM: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className='min-h-screen w-full'>
    <div className="container mx-auto flex flex-col justify-center items-center min-h-screen px-4">
      <div className='w-full max-w-screen-2xl'>
        <h1 className="text-black text-3xl md:text-5xl font-bold pb-6 md:pb-12 text-center">atem.</h1>
        <h1 className='relative font-mono text-[2.8rem] md:text-5xl lg:text-9xl pb-6 md:pb-12 text-center'>
          {t("We Build, Automate,and Elevate")}<span className="animate-blink">_</span>
        </h1>
        <p className='text-center text-base font-playfair font-extralight max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8 lg:px-10 py-6 md:py-8 lg:py-10'>
          {t("At Atem, we're developers specializing in creating standout digital solutions.")}
          <span className='hidden md:inline'> {t("From web to mobile and AI, our team delivers solutions that enhance customer engagement and bring new ideas to life. We partner with businesses to improve and modernize their digital presence, driving value at every touchpoint.")}</span>
        </p>
      </div>
      </div>
  </section>
  );
};

export default ProductATEM;
