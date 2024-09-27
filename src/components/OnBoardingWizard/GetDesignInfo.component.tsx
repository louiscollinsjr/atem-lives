import React from 'react';
import { useForm,   } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
// import { useFormData } from '../../hooks/useFormData.hook';
import { useWizard } from 'react-use-wizard';
import ProgressIndicator from './ProgressIndicator.component';
import { useFormData } from '../../contexts/FormDataContext';

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
  //const { updateFormData } = useFormData();
  const { formData, updateFormData } = useFormData();
  const { nextStep, previousStep } = useWizard();

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
    { id: 'brand', label: 'Clean and Minimalistic', description:'(Simple, uncluttered design with a focus on white space)' },
    { id: 'leads', label: 'Bold and Colorful', description:'(Vibrant, attention-grabbing colors with strong visual impact)' },
    { id: 'info', label: 'Modern and Sleek', description:' (Cutting-edge design with a polished, futuristic feel)' },
    { id: 'showcase', label: 'Classic and Timeless', description:' (Traditional elements that never go out of style)' },
    { id: 'service', label: 'Playful and Fun', description:'(Lively, engaging design with a sense of creativity and energy)' },
    { id: 'engagement', label: 'Professional and Corporate', description:'(Sophisticated, business-oriented with a formal tone)' },
  ];

  const visualFocusOptions = [
    { id: 'brand', label: 'Heavy on Imagery', description:'(Bold visuals, minimal text)' },
    { id: 'leads', label: 'Focus on Text Content', description:'(Text-driven with minimal imagery)' },
    { id: 'info', label: 'Balanced Visual and Text', description:'(Equal emphasis on both)' },
    { id: 'showcase', label: 'Interactive Elements', description:'(Interactive features are the priority)' },
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
    <form onSubmit={handleSubmit(onSubmit)} className="mx-auto max-w-screen-lg">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="p-4 sm:pr-10">
        
          <div className="md:hidden mb-4">
            <ProgressIndicator/>
          </div>
          <h1 className="text-2xl font-inter tracking-wide mb-2  pt-12">
          What are your design preferences?
          </h1>
          <p className="text-sm text-gray-500 font-popins mb-2">
          Let your creativity shine! Share your design preferences—colors, styles, or inspirations that reflect your vision.</p>
          
          <p className="text-sm text-gray-500 font-popins mb-2 pt-4"> Whether you love a modern, minimalist look or something more bold and vibrant, your input will help us craft a design that feels uniquely yours.
          </p>
          
        </div>
        <div className="p-4">
          <div className="hidden md:block mb-4">
            <ProgressIndicator/>
          </div>
          <p className="text-sm text-gray-500 font-popins mb-4">
            
          </p>
          
          
          <div className="mb-4 text-sm">
            <p className="font-semibold mb-2">What design style best fits your vision?</p>
            {designStyleOptions.map(goal => (
              <div key={goal.id} className="flex items-center mb-2 text-gray-700">
                <input
                  type="checkbox"
                  id={goal.id}
                  value={goal.id}
                    {...register('designStyleOptions')}
                  onChange={handleDesignStyleChange}
                  className="mr-2"
                />
                <label htmlFor={goal.id}>{goal.label} <br/><span className='text-xs font-extralight'>{goal.description}</span></label>
              </div>
            ))}
            {errors.designStyleOptions && <p className="text-red-500 text-sm mt-1">{errors.designStyleOptions.message}</p>}
          </div>

          <div className="mb-4 text-sm">
            <p className="font-semibold mb-2">What kind of visual focus do you prefer for your website?</p>
            {visualFocusOptions.map(goal => (
              <div key={goal.id} className="flex items-center mb-2 text-gray-700">
                <input
                  type="checkbox"
                  id={goal.id}
                  value={goal.id}
                  {...register('designVisualOptions')}
                  onChange={handleVisualStyleChange}
                  className="mr-2"
                />
                <label htmlFor={goal.id}>{goal.label}<br/><span className='text-xs font-extralight'>{goal.description}</span></label>
              </div>
            ))}
            {errors.designVisualOptions && <p className="text-red-500 text-sm mt-1">{errors.designVisualOptions.message}</p>}
          </div>




          <div className="mb-4">
        <label htmlFor="designAdditionalNotes" className="block font-semibold mb-2 text-sm">
        Which websites inspire your vision? Share examples!
        </label>
        <textarea
          id="designAdditionalNotes"
          {...register('designAdditionalNotes')}
          className="w-full p-2 border rounded text-gray-700 text-sm"
          rows={4}
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

export default GetDesignInfo;