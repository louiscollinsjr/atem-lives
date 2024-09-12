import React from 'react';
import SplashMaestro from './SplashMaestro.component';
import MaestroPricing from './MaestroPricing.component';
import MasonaryGridCTA from './maestro-product-components/maestro-product-masonary-grid.component';
import MaestroContactForm from './MaestroContactForm.component';
import MaestroDetails from './MaestroDetails.component';
const Maestro: React.FC = () => {
  return (
    <div>
        <MaestroDetails />
        <SplashMaestro />
      
        <MasonaryGridCTA />
        <MaestroPricing />
        <MaestroContactForm />
    </div>
  );
}

export default Maestro;
