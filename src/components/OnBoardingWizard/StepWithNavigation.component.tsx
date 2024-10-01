import { useWizard } from 'react-use-wizard';

const StepWithNavigation= () => {
  const { activeStep, stepCount, previousStep, isFirstStep, isLastStep } = useWizard();

  return (
    <div className="col-span-1 md:col-span-2 flex justify-between pt-12">
      {!isFirstStep && (
        <button
          className="border px-4 py-2 rounded-md text-sm text-white bg-black"
          type="button"
          onClick={previousStep}
        >
          Back
        </button>
      )}

      {!isLastStep && !(activeStep+1 === stepCount - 1) && (
        <button
          className="border px-4 py-2 rounded-md text-sm text-white  bg-black"
          type="submit"
        >
          Next
        </button>
      )}

      {(activeStep+1 === stepCount - 1) && (
        <button
          className="border px-4 py-2 rounded-md text-sm text-white  bg-black"
          type="submit"
        >
          Submit
        </button>
      )}
    </div>
  );
};

export default StepWithNavigation;