import React from 'react';
import { useTranslation } from 'react-i18next';

const ProductATEM: React.FC = () => {
  const { t } = useTranslation();
  return (
    <section className='min-h-screen w-full'>
    <div className="container mx-auto flex flex-col justify-center items-center min-h-screen px-4">
      <div className='w-full max-w-screen-2xl'>
        <h1 className="text-black text-3xl md:text-5xl font-bold pb-6 md:pb-12 text-center">atem.</h1>
        <h1 className='relative font-mono text-5xl md:text-5xl lg:text-9xl pb-6 md:pb-12 text-center break-words'>
          {t("We Build, Automate,and Elevate")}<span className="animate-blink">_</span>
        </h1>
      </div>
    </div>
  </section>
  );
};

export default ProductATEM;
    


{/* <section className='h-screen md:h-[80vh] w-full '>
      <div className="container mx-auto flex flex-col justify-center items-center h-full">
        <div className='max-w-screen-2xl px-10'>
        <h1 className="text-black text-5xl font-bold pb-12 text-center">atem.</h1>
        <h1 className='relative font-mono before:absolute before:inset-0  md:text-9xl text-5xl pb-12 text-center '>
        {t("We Build, Automate,and Elevate")}<span className="animate-blink">_</span>
        </h1>
        </div>
       
      </div>
    </section> */}