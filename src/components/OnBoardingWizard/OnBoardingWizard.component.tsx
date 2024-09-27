import React from 'react';
import { Wizard } from 'react-use-wizard';

import GetClientInfo from './GetClientInfo.component';
import GetDesignInfo from './GetDesignInfo.component';
import GetGoalInfo from './GetGoalInfo.component';
import GetProjectScope from './GetProjectScope.component';
import ShowConfirmationInfo from './ShowConfirmationInfo.component';
import { FormDataProvider } from '../../contexts/FormDataContext';

const OnBoardingWizard: React.FC = () => {
  return (
    <section className='w-full min-h-screen flex items-center justify-center bg-white py-40'>
      <div className="container mx-auto max-w-screen-lg w-full sm:border-0 sm:border-gray-300 rounded-xl bg-slate-50">
        <FormDataProvider>
        <Wizard>
          <GetClientInfo key="getClientInfo" />
          <GetGoalInfo key="getGoalInfo" />
          <GetDesignInfo key="getDesignInfo" />
          <GetProjectScope key="getProjectScope" />
          <ShowConfirmationInfo key="showConfirmationInfo" />
        </Wizard>
        </FormDataProvider>
      </div>
    </section>
  );
};

export default OnBoardingWizard;