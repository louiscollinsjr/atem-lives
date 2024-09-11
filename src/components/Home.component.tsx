import React from 'react';
import SplashDesign300 from './SplashDesign.component';
import ProductATEM from './ProductATEM.component';
import ProductMaestro from './ProductMaestro.component';
import ProductNewThings from './ProductNewThings.component';
import ProductNRTW from './ProductNRTW.components';
import HomeContactForm from './HomeContactForm.component';

const Home: React.FC = () => {
  return (
    <div>
      <ProductATEM />
      <ProductMaestro />
      <ProductNewThings />
      <SplashDesign300 />
      <ProductNRTW />
      <HomeContactForm  />
    </div>
  );
};

export default Home;