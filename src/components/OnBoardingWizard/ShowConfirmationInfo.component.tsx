import React from 'react';


const ShowConfirmationInfo: React.FC = () => {
 // const { nextStep } = useWizard();

//   const handleSubmit = (e: React.FormEvent) => {
//     e.preventDefault();
//     nextStep(); // This will move to the next step
//   };

  return (
    <div className='mx-auto max-w-screen-lg'>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="text-leftp-4 p-8 md:p-12 pb-0">
      
          <h1 className="text-left text-3xl font-inter py-4">
            We've recieved your submission.
          </h1>
          <p className="text-left font-popins text-base">
            What's next? <br/><br/>
            Let's get started with building your new website! Please go through
            the onboarding steps to help us understand your goals and
            preferences.
          </p>
        </div>
        <div className=" p-8">
         
        </div>
      </div>
      <div className="flex flex-col items-center justify-center px-8">
      <button
        className="border px-4 py-2 rounded-md w-full text-base text-white bg-black font-popins tracking-wider"
        type="submit"
      >
        Continue
      </button>
      </div>
      </div>
  );
};

export default ShowConfirmationInfo;
