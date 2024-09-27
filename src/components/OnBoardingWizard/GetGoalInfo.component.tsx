import React from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
//import { useFormData, FormData } from '../../hooks/useFormData.hook';
import { useWizard } from 'react-use-wizard';
import ProgressIndicator from './ProgressIndicator.component';
import { useFormData } from '../../contexts/FormDataContext';
import { useTranslation } from 'react-i18next';

// objectivesWebsiteType: string;
// objectivesPrimaryGoals: string[];
// objectivesTargetAudience: string;
// objectivesAdditionalGoalNotes?: string;

const schema = yup.object().shape({
  objectivesPrimaryGoals: yup.array().of(yup.string()).min(1, 'Please select at least one goal'),
  objectivesWebsiteType: yup.string().required('Please select a website type'),
  objectivesTargetAudience: yup.string().required('Please select a target audience'),
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
  const { t } = useTranslation();

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
      objectivesAdditionalGoalNotes: formData?.objectivesAdditionalGoalNotes || '',
    },
  });

    const onSubmit = async (data: GoalInfo) => {
      const combinedData = {
        ...formData,
        ...data,
        objectivesPrimaryGoals: data.objectivesPrimaryGoals?.filter((goal): goal is string => goal !== undefined) || []
      };
      updateFormData(combinedData);
      console.log('Updated goal information:', combinedData);
      nextStep();
    };

  const goalOptions = [
    { id: 'brand', label: 'Increase brand awareness' , description:'(Simple, uncluttered design with a focus on white space)'},
    { id: 'leads', label: 'Generate leads/sales' , description:'(Simple, uncluttered design with a focus on white space)' },
    { id: 'info', label: 'Provide information/resources' , description:'(Simple, uncluttered design with a focus on white space)' },
    { id: 'showcase', label: 'Showcase portfolio/products', description:'(Simple, uncluttered design with a focus on white space)' },
    { id: 'service', label: 'Improve customer service', description:'(Simple, uncluttered design with a focus on white space)' },
    { id: 'engagement', label: 'Build community engagement' , description:'(Simple, uncluttered design with a focus on white space)'},
    { id: 'expertise', label: 'Establish expertise in the field', description:'(Simple, uncluttered design with a focus on white space)' },
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
    setValue('objectivesPrimaryGoals', checked 
      ? [...currentGoals, value]
      : currentGoals.filter(goal => goal !== value)
    );
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-screen-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 sm:pr-10">
          <div className="md:hidden mb-4">
            <ProgressIndicator/>
          </div>
          <h1 className="text-2xl font-inter tracking-wide mb-2 pt-12">
            {t('What are your primary goals for the website?')}
          </h1>
          <p className="text-sm text-gray-500 font-popins mb-2">
            Share with us the vision for your website—what type of site you're aiming for, who your audience is, and the key goals you'd like to achieve.
            This helps us tailor our approach to meet your specific needs.
          </p>
        </div>
        <div className="p-4">
          <div className="hidden md:block mb-4">
            <ProgressIndicator/>
          </div>
          <p className="text-sm text-gray-500 font-popins mb-8">
            We're excited to have you on board! Let's get started with your website design journey.
          </p>
          

          <div className="mb-8 text-base">
        <label htmlFor="objectivesWebsiteType" className="block font-semibold mb-2">
          Website Type:
        </label>
        <select
          id="objectivesWebsiteType"
          {...register('objectivesWebsiteType')}
          className="w-full p-2 border rounded text-gray-700 text-sm"
        >
          <option value="">Select website type</option>
          {websiteTypeOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.objectivesWebsiteType && <p className="text-red-500 text-sm mt-1">{errors.objectivesWebsiteType.message}</p>}
      </div>


          
          <div className="mb-8 text-base">
            <p className="font-semibold mb-2">What are your primary goals for the website?</p>
            {goalOptions.map(goal => (
              <div key={goal.id} className="flex items-center mb-2 text-gray-700 text-sm">
                <input
                  type="checkbox"
                  id={goal.id}
                  value={goal.id}
                  {...register('objectivesPrimaryGoals')}
                  onChange={handleGoalChange}
                  className="mr-2"
                />
                <label htmlFor={goal.id}>{goal.label} <br/><span className='text-xs font-extralight'>{goal.description}</span></label>
              </div>
            ))}
            {errors.objectivesPrimaryGoals && <p className="text-red-500 text-sm mt-1">{errors.objectivesPrimaryGoals.message}</p>}
          </div>


          <div className="mb-8 text-base">
        <label htmlFor="objectivesTargetAudience" className="block font-semibold mb-2">
          Target Audience:
        </label>
        <select
          id="objectivesTargetAudience"
          {...register('objectivesTargetAudience')}
          className="w-full p-2 border rounded text-gray-700 text-sm"
        >
          <option value="">Select target audience</option>
          {audienceOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        {errors.objectivesTargetAudience && <p className="text-red-500 text-sm mt-1">{errors.objectivesTargetAudience.message}</p>}
      </div>


          <div className="mb-4 text-base">
        <label htmlFor="objectivesAdditionalGoalNotes" className="block font-semibold mb-2">
        Share more about your vision for the website!
        </label>
        <textarea
          id="objectivesAdditionalGoalNotes"
          {...register('objectivesAdditionalGoalNotes')}
          className="w-full p-2 border rounded text-gray-700 text-sm"
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
    </form>
  );
};

export default GetGoalInfo;
