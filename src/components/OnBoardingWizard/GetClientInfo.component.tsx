// src/components/GetClientInfo.component.tsx
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useFormData } from '../../hooks/useFormData.hook';
import { useWizard } from 'react-use-wizard';


const schema = yup.object().shape({
  firstName: yup.string().optional(), //required('First name is required'),
  lastName: yup.string().optional(), //required('Last name is required'),
  email: yup.string().email('Invalid email').optional(), //required('Email is required'),
});

const GetClientInfo: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { updateFormData } = useFormData();
  const { nextStep } = useWizard();

  const onSubmit = (data: any) => {
    updateFormData(data);
    nextStep();
  };

  return (
    <div className='mx-auto max-w-screen-lg'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-leftp-4 p-8 md:p-12 pb-0">
          <h1 className="text-left text-3xl font-inter tracking-wide py-4">Let's get started</h1>
          <p className="text-left text-sm text-gray-500 font-popins">
            Let's get started with building your new website! Please go through
            the onboarding steps to help us understand your goals and
            preferences.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 gap-y-4 py-8">
              <div>
                <input
                  className="p-2 border border-gray-300 w-full text-sm rounded-md"
                  {...register('firstName')}
                  placeholder="First name"
                />
                {errors.firstName && <span>{errors.firstName.message}</span>}
              </div>
              <div>
                <input
                  className="p-2 border border-gray-300 w-full text-sm rounded-md"
                  {...register('lastName')}
                  placeholder="Last name"
                />
                {errors.lastName && <span>{errors.lastName.message}</span>}
              </div>
              <div className="md:col-span-2">
                <input
                  className="p-2 border border-gray-300 w-full text-sm rounded-md"
                  {...register('email')}
                  placeholder="Email address"
                />
                {errors.email && <span>{errors.email.message}</span>}
              </div>
              <div className="md:col-span-2 pt-6">
                <button
                  className="border px-4 py-2 rounded-md w-full text-base text-white bg-black font-popins tracking-wider"
                  type="submit"
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="p-8 pb-16 md:p-12">
          <h1 className="text-left text-3xl font-inter tracking-wide py-4">
            Experience the future of design.
          </h1>
          <p className="text-left text-gray-500 font-popins text-sm">
            We're excited to have you on board! Let's get started with your
            website design journey.
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetClientInfo;
