// src/components/GetDesignInfo.component.tsx
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFormData } from '../../hooks/useFormData.hook';
import { useWizard } from 'react-use-wizard';
import ProgressIndicator from './ProgressIndicator.component';

const schema = yup.object().shape({
  projectScope: yup.string().optional(),
});


const GetProjectScope: React.FC = () => {
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(schema)
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
            Let's talk features?
          </h1>
          <p className="text-left text-sm text-gray-500 font-popins">
            Tell us a little about the features you want in your website.
          </p>
        </div>
        <div className="p-8">
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
                {...register('projectScope')}
                placeholder="Project Scope"
              />
              {errors.projectScope && <span>{errors.projectScope.message}</span>}
            </div>
            <div className="text-sm col-span-2 row-start-2">
              <input
                className="p-2 border border-gray-300 w-full text-sm"
                {...register('projectScope')}
                placeholder="Project Scope"
              />
              {errors.projectScope && <span>{errors.projectScope.message}</span>}
            </div>
            <div className="row-start-3">
              {' '}
              <input
                className="p-2 border border-gray-300 w-full text-sm"
                {...register('projectScope')}
                placeholder="Project Scope"
              />
              {errors.projectScope && <span>{errors.projectScope.message}</span>}
            </div>
            <div className="col-span-2 col-start-1 row-start-4">
              {' '}
              <input
                className="p-2 border border-gray-300 w-full text-sm"
                {...register('projectScope')}
                placeholder="Project Scope"
              />
              {errors.projectScope && <span>{errors.projectScope.message}</span>}
            </div>
            <div className="col-start-2 row-start-3">
              {' '}
              <input
                className="p-2 border border-gray-300 w-full text-sm"
                {...register('projectScope')}
                placeholder="Project Scope"
              />
              {errors.projectScope && <span>{errors.projectScope.message}</span>}
            </div>
            <div className="col-span-2 row-start-5">
              {' '}
              <input
                className="p-2 border border-gray-300 w-full text-sm"
                {...register('projectScope')}
                placeholder="Project Scope"
              />
              {errors.projectScope && <span>{errors.projectScope.message}</span>}
            </div>
            <div className="col-span-2 row-start-6 pt-12">
            
              <p className="text-left text-xs text-gray-500 font-popins">
                You change goals anytime, but this gives us a starting point.
              </p>
            </div>
          </div>
        </div>
        <div>
       
          <button
            className="border px-4 py-2 rounded-md w-full text-sm text-blue-600"
            type="button"
            onClick={previousStep}
          >
            Back
          </button>
        </div>
        <div>
          <button
            className="border px-4 py-2 rounded-md w-full text-sm text-blue-600"
            type="submit"
          >
            Next
          </button>
        </div>
      </div>
    </div>
  </form>
//     <div>
// <h1>Get Project Scope</h1>
// <form onSubmit={handleSubmit(onSubmit)}>
//       <input {...register('projectScope')} placeholder="Project Scope" />
//       {errors.projectScope && <span>{errors.projectScope.message}</span>}

//       <button type="submit">Next</button>
//       <button type="button" onClick={previousStep}>Back</button>
//     </form> 
//     </div>
  
  );
};

export default GetProjectScope;