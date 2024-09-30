import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
//import { useFormData, FormData } from '../../hooks/useFormData.hook';
import { useWizard } from 'react-use-wizard';
import ProgressIndicator from './ProgressIndicator.component';
import { useFormData } from '../../contexts/FormDataContext';


// objectivesWebsiteType: string;
// objectivesPrimaryGoals: string[];
// objectivesTargetAudience: string;
// objectivesAdditionalGoalNotes?: string;

const schema = yup.object().shape({
  objectivesPrimaryGoals: yup
    .array()
    .of(yup.string())
    .min(1, 'Please select at least one goal'),
  objectivesWebsiteType: yup.string().required('Please select a website type'),
  objectivesTargetAudience: yup
    .string()
    .required('Please select a target audience'),
  objectivesAdditionalGoalNotes: yup.string().optional(),
});

interface GoalInfo {
  objectivesPrimaryGoals?: (string | undefined)[];
  objectivesWebsiteType: string;
  objectivesTargetAudience: string;
  objectivesAdditionalGoalNotes?: string;
}
const GetGoalInfo: React.FC = () => {
  const { formData, updateFormData } = useFormData();
  const { nextStep, previousStep } = useWizard();


  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm<GoalInfo>({
    resolver: yupResolver(schema),
    defaultValues: {
      objectivesPrimaryGoals: formData.objectivesPrimaryGoals || [],
      objectivesWebsiteType: formData.objectivesWebsiteType || '',
      objectivesTargetAudience: formData.objectivesTargetAudience || '',
      objectivesAdditionalGoalNotes:
        formData?.objectivesAdditionalGoalNotes || '',
    },
  });

  const onSubmit = async (data: GoalInfo) => {
    const combinedData = {
      ...formData,
      ...data,
      objectivesPrimaryGoals:
        data.objectivesPrimaryGoals?.filter(
          (goal): goal is string => goal !== undefined
        ) || [],
    };
    updateFormData(combinedData);
    console.log('Updated goal information:', combinedData);
    nextStep();
  };

  const goalOptions = [
    {
      id: 'brand',
      label: 'Increase brand awareness',
      description: '(Get your name out there and grow your audience)',
    },
    {
      id: 'leads',
      label: 'Generate leads/sales',
      description: '(Convert visitors into customers or clients)',
    },
    {
      id: 'info',
      label: 'Provide information/resources',
      description: '(Offer helpful content to educate or inform your audience)',
    },
    {
      id: 'showcase',
      label: 'Showcase portfolio/products',
      description: '(Display your work or products in the best light)',
    },
    {
      id: 'service',
      label: 'Improve customer service',
      description: '(Help customers find answers or support quickly)',
    },
    {
      id: 'engagement',
      label: 'Build community engagement',
      description: '(Create a space for interaction and connection)',
    },
    {
      id: 'expertise',
      label: 'Establish expertise in the field',
      description: '(Position yourself as a leader in your industry)',
    },
  ];

  const audienceOptions = [
    { value: 'general', label: 'General public' },
    { value: 'professionals', label: 'Professionals' },
    { value: 'students', label: 'Students' },
    { value: 'seniors', label: 'Seniors' },
    { value: 'parents', label: 'Parents' },
  ];

  const websiteTypeOptions = [
    { value: 'ecommerce', label: 'E-commerce' },
    { value: 'portfolio', label: 'Portfolio or showcase' },
    { value: 'blog', label: 'Informational or Blog' },
    { value: 'corporate', label: 'Corporate or business website' },
    { value: 'educational', label: 'Educational' },
    { value: 'nonprofit', label: 'Nonprofit or charitable organization' },
    { value: 'community', label: 'Build community engagement' },
    { value: 'booking', label: 'Booking or scheduling' },
  ];

  const handleGoalChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const currentGoals = watch('objectivesPrimaryGoals') as string[];
    setValue(
      'objectivesPrimaryGoals',
      checked
        ? [...currentGoals, value]
        : currentGoals.filter((goal) => goal !== value)
    );
  };

  return (
    <section className="w-full mx-auto px-4 sm:px-8">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="sm:px-6 lg:px-8 mb-16">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-x-14">
            <div className="@container">
            <div className="sm:hidden mb-4">
                  <ProgressIndicator />
                </div>
              <div className="sm:pt-6">
                <h1 className="text-left text-xs sm:text-4xl md:text-sm font-roboto tracking-wide px-1 pb-2">
                  Local.349.Design
                </h1>
                <h1 className="text-left text-4xl sm:text-4xl md:text-6xl font-light font-roboto tracking-normal sm:w-[32rem]">
                  What are your primary{' '}
                  <span className="bg-gradient-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
                    {' '}
                    goals for the website?
                  </span>
                </h1>
                <p className="text-left text-gray-800 font-light sm:w-[32rem] text-base pt-2 sm:pt-4 px-1">
                  Share with us the vision for your website—what type of site
                  you're aiming for, who your audience is, and the key goals
                  you'd like to achieve.  <span className="hidden sm:inline">This helps us tailor our approach to
                  meet your specific needs.</span>
                </p>
              </div>
              </div>
              <div className="">
                <div className="hidden md:block mb-4">
                  <ProgressIndicator />
                </div>

                <div className="mb-8 text-base pt-10">
                  <label
                    htmlFor="objectivesWebsiteType"
                    className="block font-semibold mb-2"
                  >
                    Website Type:
                  </label>
                  <select
                    id="objectivesWebsiteType"
                    {...register('objectivesWebsiteType')}
                    className="w-full p-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                  >
                    <option value="">Select website type</option>
                    {websiteTypeOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.objectivesWebsiteType && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.objectivesWebsiteType.message}
                    </p>
                  )}
                </div>

                <div className="mb-8 text-base">
                  <p className="font-semibold mb-2">
                    What are your primary goals for the website?
                  </p>
                  {goalOptions.map((goal) => (
                    <div
                      key={goal.id}
                      className="flex items-start space-x-3 mb-4"
                    >
                      <input
                        type="checkbox"
                        id={goal.id}
                        value={goal.id}
                        {...register('objectivesPrimaryGoals')}
                        onChange={handleGoalChange}
                        className="mt w-6 h-6 cursor-pointer form-checkbox text-blue-600 rounded-md border-gray-300 focus:ring-blue-500 transition duration-150 ease-in-out"
                      />
                      <label htmlFor={goal.id}>
                        {goal.label} {' '}
                        <span className="text-xs font-extralight inline">
                          {goal.description}
                        </span>
                      </label>
                    </div>
                  ))}
                  {errors.objectivesPrimaryGoals && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.objectivesPrimaryGoals.message}
                    </p>
                  )}
                </div>

                <div className="mb-8 text-base">
                  <label
                    htmlFor="objectivesTargetAudience"
                    className="block font-semibold mb-2"
                  >
                    Target Audience:
                  </label>
                  <select
                    id="objectivesTargetAudience"
                    {...register('objectivesTargetAudience')}
                    className="w-full p-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                  >
                    <option value="">Select target audience</option>
                    {audienceOptions.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                  {errors.objectivesTargetAudience && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.objectivesTargetAudience.message}
                    </p>
                  )}
                </div>

                <div className="mb-4 text-base">
                  <label
                    htmlFor="objectivesAdditionalGoalNotes"
                    className="block font-semibold mb-2"
                  >
                    Share more about your vision for the website!
                  </label>
                  <textarea
                    id="objectivesAdditionalGoalNotes"
                    {...register('objectivesAdditionalGoalNotes')}
                    className="w-full p-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
                    rows={6}
                  />
                </div>
              </div>
              <div className="col-span-1 md:col-span-2 flex justify-between px-4">
                <button
                  className="border px-4 py-2 rounded-md text-sm text-blue-600"
                  type="button"
                  onClick={previousStep}
                >
                  Back
                </button>
                <button
                  className="border px-4 py-2 rounded-md text-sm text-blue-600"
                  type="submit"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
      </form>
    </section>
  );
};

export default GetGoalInfo;
