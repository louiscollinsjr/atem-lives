import React from 'react';
import { Wizard } from 'react-use-wizard';

import GetClientInfo from './GetClientInfo.component';
import GetDesignInfo from './GetDesignInfo.component';
import GetGoalInfo from './GetGoalInfo.component';
import GetProjectScope from './GetProjectScope.component';
import ShowConfirmationInfo from './ShowConfirmationInfo.component';

const App: React.FC = () => {
  return (
    <section className='w-full p-6 h-screen bg-slate-50 md:pt-48'>
    <div className="container mx-auto max-w-screen-lg border border-gray-300 rounded-xl pb-12 md:p-12 bg-white">
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

export default App;