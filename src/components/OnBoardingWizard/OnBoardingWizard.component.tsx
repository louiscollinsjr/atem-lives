import React from 'react';
import { Wizard } from 'react-use-wizard';

import GetClientInfo from './GetClientInfo.component';
import GetDesignInfo from './GetDesignInfo.component';
import GetGoalInfo from './GetGoalInfo.component';
import GetProjectScope from './GetProjectScope.component';
import ShowConfirmationInfo from './ShowConfirmationInfo.component';

const OnBoardingWizard: React.FC = () => {
  return (
    <section className='w-full min-h-screen flex items-center justify-center bg-white pt-4 sm:px-10'>
      <div className="container mx-auto max-w-screen-lg w-full sm:border sm:border-gray-300 rounded-xl sm:p-6 bg-white">
        <Wizard>
          <GetClientInfo key="getClientInfo" />
          <GetGoalInfo key="getGoalInfo" />
          <GetDesignInfo key="getDesignInfo" />
          <GetProjectScope key="getProjectScope" />
          <ShowConfirmationInfo key="showConfirmationInfo" />
        </Wizard>
      </div>
    </section>
  );
};

export default OnBoardingWizard;