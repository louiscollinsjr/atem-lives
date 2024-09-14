import React from 'react';
import SplashDesign from './SplashDesign.component';
import ProductATEM from './ProductATEM.component';
import ProductMaestro from './ProductMaestro.component';
import ProductNewThings from './ProductNewThings.component';
import ProductNRTW from './ProductNRTW.components';
import HomeContactForm from './HomeContactForm.component';

const Home: React.FC = () => {
  return (
    <div className='overscroll-contain'>
      <ProductATEM />
      {/* <ProductMaestro />
      <ProductNewThings />
      <SplashDesign />
      <ProductNRTW />
      <HomeContactForm  /> */}
    </div>
  );
};

export default Home;