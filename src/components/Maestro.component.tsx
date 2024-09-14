import React from 'react';
import SplashMaestro from './SplashMaestro.component';
import MaestroPricing from './MaestroPricing.component';
import MasonaryGridCTA from './maestro-product-components/maestro-product-masonary-grid.component';
import MaestroDetails from './MaestroDetails.component';
import HomeContactForm from './HomeContactForm.component';

const Maestro: React.FC = () => {
  return (
    <div>
      <MaestroDetails />
      <SplashMaestro />
      <MasonaryGridCTA />
      <MaestroPricing />
      <HomeContactForm />
    </div>
  );
};

export default Maestro;
