import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
//import { useFormData } from '../../hooks/useFormData.hook';
import { useWizard } from 'react-use-wizard';
import ProgressIndicator from './ProgressIndicator.component';
import { useFormData } from '../../contexts/FormDataContext';

const schema = yup.object().shape({
  clientFirstName: yup.string().required('First name is required'),
  clientLastName: yup.string().required('Last name is required'),
  clientEmail: yup
    .string()
    .email('Invalid email')
    .required('Email is required'),
});

interface ClientInfo {
  clientFirstName: string;
  clientLastName: string;
  clientEmail: string;
}

const GetClientInfo: React.FC = () => {
  const { formData, updateFormData } = useFormData();
  const { nextStep } = useWizard();

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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-x-14">
          <div className="@container mx-auto">
            <div className="sm:hidden sm:w-96">
              <ProgressIndicator />
            </div>
            <div className="sm:pt-6 bg-gray-100 p-4 sm:p-12 rounded-lg">
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
              <p className="text-left text-gray-800 font-light sm:w-[32rem] text-base pt-2 sm:pt-4">
                We're thrilled to have you join our mission to support our
                community with top-tier web design at an unbeatable price.{' '}
                <span className="hidden sm:inline">
                  This special offer is all about empowering local businesses
                  and individuals to grow through thoughtful design and
                  development. Your participation helps us build something
                  greater together.
                </span>
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
                      className="p-3 border border-gray-300 w-full text-sm rounded-md"
                      {...register('clientFirstName')}
                      placeholder="First name"
                    />
                    {errors.clientFirstName && (
                      <span className="text-red-500 text-sm">
                        {errors.clientFirstName.message}
                      </span>
                    )}
                  </div>
                  <div>
                    <input
                      className="p-3 border border-gray-300 w-full text-sm rounded-md"
                      {...register('clientLastName')}
                      placeholder="Last name"
                    />
                    {errors.clientLastName && (
                      <span className="text-red-500 text-sm">
                        {errors.clientLastName.message}
                      </span>
                    )}
                  </div>
                  <div className="md:col-span-2">
                    <input
                      className="p-3 border border-gray-300 w-full text-sm rounded-md"
                      {...register('clientEmail')}
                      placeholder="Email address"
                    />
                    {errors.clientEmail && (
                      <span className="text-red-500 text-sm">
                        {errors.clientEmail.message}
                      </span>
                    )}
                  </div>
                  <div className="sm:col-span-2 pt-4">
                    <button
                      className="border px-4 py-3 rounded-md w-full text-base text-white bg-black font-popins tracking-wider"
                      type="submit"
                    >
                      Next
                    </button>
                  </div>
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
