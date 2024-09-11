// src/components/GetClientInfo.component.tsx
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFormData } from '../../hooks/useFormData.hook';
import { useWizard } from 'react-use-wizard';
import ProgressIndicator from './ProgressIndicator.component';

const schema = yup.object().shape({
  goalInfo: yup.string().optional(),
});

const GetGoalInfo: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { updateFormData } = useFormData();
  const { nextStep, previousStep } = useWizard();

  const onSubmit = (data: any) => {
    updateFormData(data);
    nextStep();
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='mx-auto max-w-screen-lg'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-leftp-4 p-8 md:p-12 pb-0">
             {/* Show ProgressIndicator only on screens below md breakpoint */}
         <div className="md:hidden">
            <ProgressIndicator/>
          </div>
            <h1 className="text-left text-3xl font-inter tracking-wide py-4">
              What are your goals?
            </h1>
            <p className="text-left text-sm text-gray-500 font-popins">
              Tell us a little about your desired website type, audience, and
              primary goals.
            </p>
          </div>
          <div className="p-8 ">
          <div className="hidden md:block">
            <ProgressIndicator/>
          </div>

            <p className="text-left text-sm text-gray-500 font-popins">
              We're excited to have you on board! Let's get started with your
              website design journey.
            </p>

            <div className="grid grid-cols-2 grid-rows-5 gap-4 py-4">
              <div className="text-sm col-span-2">
                <input
                  className="p-2 border border-gray-300 w-full text-sm"
                  {...register('goalInfo')}
                  placeholder="Goal Info"
                />
                {errors.goalInfo && <span>{errors.goalInfo.message}</span>}
              </div>
              <div className="text-sm col-span-2 row-start-2">
                <input
                  className="p-2 border border-gray-300 w-full text-sm"
                  {...register('goalInfo')}
                  placeholder="Goal Info"
                />
                {errors.goalInfo && <span>{errors.goalInfo.message}</span>}
              </div>
              <div className="row-start-3">
                {' '}
                <input
                  className="p-2 border border-gray-300 w-full text-sm"
                  {...register('goalInfo')}
                  placeholder="Goal Info"
                />
                {errors.goalInfo && <span>{errors.goalInfo.message}</span>}
              </div>
              <div className="col-span-2 col-start-1 row-start-4">
                {' '}
                <input
                  className="p-2 border border-gray-300 w-full text-sm"
                  {...register('goalInfo')}
                  placeholder="Goal Info"
                />
                {errors.goalInfo && <span>{errors.goalInfo.message}</span>}
              </div>
              <div className="col-start-2 row-start-3">
                {' '}
                <input
                  className="p-2 border border-gray-300 w-full text-sm"
                  {...register('goalInfo')}
                  placeholder="Goal Info"
                />
                {errors.goalInfo && <span>{errors.goalInfo.message}</span>}
              </div>
              <div className="col-span-2 row-start-5">
                {' '}
                <input
                  className="p-2 border border-gray-300 w-full text-sm"
                  {...register('goalInfo')}
                  placeholder="Goal Info"
                />
                {errors.goalInfo && <span>{errors.goalInfo.message}</span>}
              </div>
              <div className="col-span-2 row-start-6 pt-12">
                {' '}
                <p className="text-left text-xs text-gray-500 font-popins">
                  You change goals anytime, but this gives us a starting point.
                </p>
              </div>
            </div>
          </div>
          <div className='px-4 md:px-0'>
            {' '}
            <button
              className="border px-4 py-2 rounded-md w-full text-sm text-blue-600"
              type="button"
              onClick={previousStep}
            >
              Back
            </button>
          </div>
          <div className='px-4 md:px-0'>
            <button
              className="border px-4 py-2 rounded-md w-full text-sm  text-blue-600"
              type="submit"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </form>
  );
};

export default GetGoalInfo;

// // src/components/GetDesignInfo.component.tsx
// import { useForm } from 'react-hook-form';
// import * as yup from 'yup';
// import { yupResolver } from '@hookform/resolvers/yup';
// import { useFormData } from '../hooks/useFormData.hook';
// import { useWizard } from 'react-use-wizard';

// const schema = yup.object().shape({
//   goalInfo: yup.string().required('Goal info is required'),
// });

// const GetGoalInfo: React.FC = () => {
//   const { register, handleSubmit, formState: { errors } } = useForm({
//     resolver: yupResolver(schema)
//   });

//   const { updateFormData } = useFormData();
//   const { nextStep, previousStep } = useWizard();

//   const onSubmit = (data: any) => {
//     updateFormData(data);
//     nextStep();

//   };

//   return (
//     <div>
// <h1>Get Goal Info</h1>

//     </div>

//   );
// };

// export default GetGoalInfo;
