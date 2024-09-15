import React from 'react';
import SplashDesign300 from './SplashDesign.component';
import DesignPricing from './DesignPricing.component';
// import DesignFAQ from './DesignFAQ.component';
import DesignServices from './DesignServices.component';
import DesignAdditionalServices from './DesignAdditionalServices.component';
import DesignSubscriptionService from './DesignSubscriptionService.component';

const Design: React.FC = () => {
  return (
    <>
     <SplashDesign300 />   
     <DesignSubscriptionService />
     <DesignServices /> 
     <DesignAdditionalServices />
     <DesignPricing />
     {/* <DesignFAQ /> */}
    </>
  );
}

export default Design;
