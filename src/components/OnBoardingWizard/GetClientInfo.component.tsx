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
    <section className='mx-auto max-w-screen-lg'>
    <div className='mx-auto max-w-screen-lg px-4 sm:px-6 lg:px-8 mt-16 sm:mt-20 mb-16'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="text-left p-4 sm:p-6 md:p-8">
          <h1 className="text-left text-2xl sm:text-3xl font-inter tracking-wide py-4">Let’s get started on our design journey!</h1>
          <p className="text-left text-sm text-gray-500 font-popins">
          Complete the onboarding steps to share your goals and preferences, and together, we’ll create something amazing.
          </p>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 gap-y-4 py-6">
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
              <div className="sm:col-span-2 pt-4">
                <button disabled
                  className="border px-4 py-2 rounded-md w-full text-base text-white bg-black font-popins tracking-wider"
                  type="submit"
                >
                  Next
                </button>
              </div>
            </div>
          </form>
        </div>
        <div className="p-4 sm:p-6 md:p-8">
          <h1 className="text-left text-2xl sm:text-3xl font-inter tracking-wide py-4">
            Building together.
          </h1>
          <p className="text-left text-gray-500 font-popins text-sm">
          We’re thrilled to have you join our mission to support our community with top-tier web design at an unbeatable price. 
          </p>
          <p className="text-left text-gray-500 font-popins text-sm pt-8">
          This special offer is all about empowering local businesses and individuals to grow through thoughtful design and development.Your participation helps us build something greater together.
          </p>

          <p className="text-left text-gray-500 font-popins text-sm pt-8">
          Your participation helps us build something greater together.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
};

export default GetClientInfo;
