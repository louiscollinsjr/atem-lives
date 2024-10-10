// src/components/ProgressIndicator.tsx
import React from 'react';
import { useWizard } from 'react-use-wizard';
import { useTranslation } from "react-i18next";

const ProgressIndicator: React.FC = () => {
  const { t } = useTranslation();
  const { activeStep, stepCount } = useWizard();
  const actualStepCount = stepCount-1; // -1 not counting confirmation page

  return (
    <div className="flex flex-col space-y-2 w-full py-8">
      <p className="text-xs text-gray-900 text-left font-popins">
        {t("Step")} {activeStep+1} {t("of")} {actualStepCount}
      </p>
      <div className="flex space-x-2">
        {Array.from({ length: actualStepCount }, (_, index) => (
          <div
            key={index}
            className={`h-1 rounded-full ${
              index <= activeStep  ? 'bg-blue-600' : 'bg-gray-300'
            }`}
            style={{ width: `${100 / actualStepCount}%` }}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default ProgressIndicator;