import React, {useEffect} from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useWizard } from 'react-use-wizard';
import ProgressIndicator from './ProgressIndicator.component';
import { useFormData } from '../../contexts/FormDataContext';
import StepWithNavigation from './StepWithNavigation.component';



const schema = yup.object().shape({
  clientFirstName: yup.string().required('First name is required'),
  clientLastName: yup.string().required('Last name is required'),
  clientCompany: yup.string().optional(),
  clientPhoneNumber: yup.string().optional(),
  clientEmail: yup
    .string()
    .email('Invalid email')
    .required('Email is required'),
});

interface ClientInfo {
  clientFirstName: string;
  clientLastName: string;
  clientEmail: string;
  clientCompany?: string;
  clientPhoneNumber?: string;
}


const GetClientInfo: React.FC = () => {
  const { formData, updateFormData } = useFormData();
  const { nextStep } = useWizard();

  useEffect(() => {
    // Scroll to the top on step change
    console.log('Scroll to top on step change');
    window.scrollTo(0, 0);
  },[nextStep]);


  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ClientInfo>({
    resolver: yupResolver(schema),
    defaultValues: {
      clientFirstName: formData.clientFirstName || '',
      clientLastName: formData.clientLastName || '',
      clientEmail: formData.clientEmail || '',
    },
  });

  const onSubmit = (data: ClientInfo) => {
    updateFormData(data);
    console.log('Updated client info:', data);
    nextStep();
  };

  return (
    <section className="w-full mx-auto px-4 sm:px-8">
      <div className="sm:px-6 lg:px-8 mb-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 md:gap-x-14">
          <div className="@container mx-auto">
            <div className="sm:hidden sm:w-96">
              <ProgressIndicator />
            </div>
            <div className="sm:pt-6 bg-gray-100 p-4 py-8 sm:p-12 rounded-lg sm:rounded-none sm:bg-gray-50">
              <h1 className="text-left text-xs sm:text-4xl md:text-sm font-roboto tracking-wide px-1 pb-2">
                Local.349.Design
              </h1>
              <h1 className="text-left text-4xl sm:text-4xl md:text-7xl font-light font-roboto tracking-normal">
                Building for{' '}
                <span className="bg-gradient-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
                  {' '}
                  our community.
                </span>
              </h1>
              <p className="text-left text-gray-800 font-light w-full sm:w-[32rem] text-base pt-4 sm:pt-4">
              Welcome! Join us in empowering our community through top-tier development and design. Together, we'll create tools that connect people and drive positive change.{' '}
              </p>
            </div>
          </div>

          <div className="@container mx-auto p-4">
            <div className="text-left w-full sm:w-[32rem]">
              <div className="hidden md:block sm:w-96">
                <ProgressIndicator />
              </div>
              <p className="text-left text-gray-800 font-light text-base sm:w-[32rem]">
                <b>Let's begin our design journey!</b> Share your vision, goals,
                and preferences to craft something amazing together.
              </p>
              <form onSubmit={handleSubmit(onSubmit)}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 gap-y-4 py-6">
                  <div>
                    <input
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                      {...register('clientFirstName')}
                      placeholder="First name"
                    />
                    {errors.clientFirstName && (
                      <span className="text-red-500 text-base">
                        {errors.clientFirstName.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <input
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                      {...register('clientLastName')}
                      placeholder="Last name"
                    />
                    {errors.clientLastName && (
                      <span className="text-red-500 text-base">
                        {errors.clientLastName.message}
                      </span>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <input
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                      {...register('clientCompany')}
                      placeholder="Company name (optional)"
                    />
                    {errors.clientCompany && (
                      <span className="text-red-500 text-base">
                        {errors.clientCompany.message}
                      </span>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <input
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                      {...register('clientPhoneNumber')}
                      placeholder="WhatsApp or Phone number (optional)"
                    />
                    {errors.clientPhoneNumber && (
                      <span className="text-red-500 text-base">
                        {errors.clientPhoneNumber.message}
                      </span>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <input
                      className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                      {...register('clientEmail')}
                      placeholder="Email address"
                    />
                    {errors.clientEmail && (
                      <span className="text-red-500 text-base">
                        {errors.clientEmail.message}
                      </span>
                    )}
                  </div>
                  {/* <div className="sm:col-span-2 pt-4">
                    <button
                      className="border px-4 py-3 rounded-md w-full text-base text-white bg-black font-popins tracking-wider"
                      type="submit"
                    >
                      Next
                    </button>
                  </div> */}
                  <StepWithNavigation />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GetClientInfo;
