import React, {useEffect} from 'react';
import { useForm,   } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// import { useFormData } from '../../hooks/useFormData.hook';
import { useWizard } from 'react-use-wizard';
import ProgressIndicator from './ProgressIndicator.component';
import { useFormData } from '../../contexts/FormDataContext';
import StepWithNavigation from './StepWithNavigation.component';
import { useTranslation } from 'react-i18next';

const schema = yup.object().shape({
  designStyleOptions: yup.array().of(yup.string()).min(1, 'Please select at least one goal'),
  designVisualOptions: yup.array().of(yup.string()).min(1, 'Please select at least one goal'),
  designAdditionalNotes: yup.string().optional(),
});

// designStyleOptions: string[];
// designVisualOptions: string[];
// designAdditionalNotes?: string;

interface GetDesignInfo {
  designStyleOptions?: (string | undefined)[];
  designVisualOptions?: (string | undefined)[];
  designAdditionalNotes?: string;
}

const GetDesignInfo: React.FC = () => {
  const { t } = useTranslation();
  //const { updateFormData } = useFormData();
  const { formData, updateFormData } = useFormData();
  const { nextStep, previousStep } = useWizard();

  useEffect(() => {
    // Scroll to the top on step change
    console.log('Step changed');
    window.scrollTo(0, 0);
  },[nextStep, previousStep]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      designStyleOptions: formData.designStyleOptions || [],
      designVisualOptions: formData.designVisualOptions || [],
      designAdditionalNotes: formData?.designAdditionalNotes || '',
    },
  });

  const onSubmit = (data: GetDesignInfo) => {
    const filteredData = {
      ...data,
      designStyleOptions: data.designStyleOptions?.filter((option): option is string => option !== undefined) || [],
      designVisualOptions: data.designVisualOptions?.filter((option): option is string => option !== undefined) || [],
    };
    updateFormData(filteredData);
    nextStep();
  };

  const designStyleOptions = [
    { id: 'brand', label: 'Clean and Minimalistic', description:'Simple, uncluttered design with a focus on white space' },
    { id: 'leads', label: 'Bold and Colorful', description:'Vibrant, attention-grabbing colors with strong visual impact' },
    { id: 'info', label: 'Modern and Sleek', description:' Cutting-edge design with a polished, futuristic feel' },
    { id: 'showcase', label: 'Classic and Timeless', description:' Traditional elements that never go out of style' },
    { id: 'service', label: 'Playful and Fun', description:'Lively, engaging design with a sense of creativity and energy' },
    { id: 'engagement', label: 'Professional and Corporate', description:'Sophisticated, business-oriented with a formal tone' },
  ];

  const visualFocusOptions = [
    { id: 'brand', label: 'Heavy on Imagery', description:'Bold visuals, minimal text' },
    { id: 'leads', label: 'Focus on Text Content', description:'Text-driven with minimal imagery' },
    { id: 'info', label: 'Balanced Visual and Text', description:'Equal emphasis on both' },
    { id: 'showcase', label: 'Interactive Elements', description:'Interactive features are the priority' },
  ];


  const handleDesignStyleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const currentGoals = watch('designStyleOptions') as string[];
    setValue('designStyleOptions', checked 
      ? [...currentGoals, value]
      : currentGoals.filter(goal => goal !== value)
    );
  };

  const handleVisualStyleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { value, checked } = event.target;
    const currentGoals = watch('designVisualOptions') as string[];
    setValue('designVisualOptions', checked 
      ? [...currentGoals, value]
      : currentGoals.filter(goal => goal !== value)
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
                  {t("What is your")} {' '}
                  <span className="bg-gradient-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
                    {' '}
                    {t("design style?")}
                  </span>
                </h1>
                <p className="text-left text-gray-800 font-light sm:w-[32rem] text-base pt-2 sm:pt-4 px-1">
                {t("Let your creativity shine! Share your design preferences—colors, styles, or inspirations that reflect your vision. Whether you love a modern, minimalist look or something more bold and vibrant, your input will help us craft a design that feels uniquely yours.")}</p>
              </div>
              </div>
              <div className="">
                <div className="hidden md:block mb-4">
                  <ProgressIndicator />
                </div>

                <div className="mb-8 text-base">
        <p className="font-semibold mb-6">{t("What design style best fits your vision?")}</p>
        {designStyleOptions.map(goal => (
          <div key={goal.id} className="flex items-start space-x-3 mb-4">
            <input
              type="checkbox"
              id={goal.id}
              value={goal.id}
                {...register('designStyleOptions')}
              onChange={handleDesignStyleChange}
              className=" mt w-6 h-6 cursor-pointer form-checkbox text-blue-600 rounded-md border-gray-300 focus:ring-blue-500 transition duration-150 ease-in-out"
            />
            <label htmlFor={goal.id}>{t(`${goal.label}`)} {' '} <span className='text-xs font-extralight inline'>({t(`${goal.description}`)})</span></label>
          </div>
        ))}
        {errors.designStyleOptions && <p className="text-red-500 text-sm mt-1">{t(`${errors.designStyleOptions.message}`)}</p>}
      </div>

      <div className="mb-8 text-base">
        <p className="font-semibold mb-6">{t("What kind of visual focus do you prefer for your website?")}</p>
        {visualFocusOptions.map(goal => (
          <div key={goal.id} className="flex items-start space-x-3 mb-4">
            <input
              type="checkbox"
              id={goal.id}
              value={goal.id}
              {...register('designVisualOptions')}
              onChange={handleVisualStyleChange}
               className=" mt w-6 h-6 cursor-pointer form-checkbox text-blue-600 rounded-md border-gray-300 focus:ring-blue-500 transition duration-150 ease-in-out"
            />
            <label htmlFor={goal.id}>{t(`${goal.label}`)} {' '}<span className='text-xs font-extralight'>({t(`${goal.description}`)})</span></label>
          </div>
        ))}
        {errors.designVisualOptions && <p className="text-red-500 text-sm mt-1">{t(`${errors.designVisualOptions.message}`)}</p>}
      </div>



      <div className="mb-4">
    <label htmlFor="designAdditionalNotes" className="block font-semibold mb-6 text-base">
    {t("Which websites inspire your vision? Share examples!")}
    </label>
    <textarea
      id="designAdditionalNotes"
      {...register('designAdditionalNotes')}
       className="w-full p-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none"
      rows={4}
    />
  </div>
              </div>
              {/* <div className="col-span-1 md:col-span-2 flex justify-between px-4">
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
              </div> */}
              <StepWithNavigation />
            </div>
          </div>
      </form>
    </section>
  );
};

export default GetDesignInfo;