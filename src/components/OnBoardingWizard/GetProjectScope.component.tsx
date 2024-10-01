// src/components/GetDesignInfo.component.tsx
import React, {useEffect} from 'react';
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
//import { useFormData } from '../../hooks/useFormData.hook';
import { useWizard } from 'react-use-wizard';
import ProgressIndicator from './ProgressIndicator.component';
import { useFormData } from '../../contexts/FormDataContext';
import StepWithNavigation from './StepWithNavigation.component';

import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../config/firebase/config';

const schema: yup.ObjectSchema<GetProjectScope> = yup.object().shape({
  designMultilingualSupport: yup.string().required('Please select an option'),
  designLanguages: yup.array().of(yup.string().required()).defined(),
  designBrandAssets: yup.array().of(yup.string().required()).defined(),
  designBrandUpdateOpenness: yup.string().required('Please select an option'),
  designContentReadiness: yup.string().required('Please select an option'),
  designContentAssistanceAreas: yup
    .array()
    .of(yup.string().required())
    .defined(),
  designContentStrategy: yup.string().required('Please select an option'),
});

interface GetProjectScope {
  designMultilingualSupport: string;
  designLanguages: string[];
  designBrandAssets: string[];
  designBrandUpdateOpenness: string;
  designContentReadiness: string;
  designContentAssistanceAreas: string[];
  designContentStrategy: string;
}

const GetProjectScope: React.FC = () => {
  const { formData, updateFormData } = useFormData();
  const { nextStep, previousStep } = useWizard();

  useEffect(() => {
    // Scroll to the top on step change
    console.log('Step changed');
    window.scrollTo(0, 0);
  },[nextStep, previousStep]);

  const {
    control,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<GetProjectScope>({
    resolver: yupResolver(schema),
    defaultValues: {
      designMultilingualSupport: '',
      designLanguages: [],
      designBrandAssets: [],
      designBrandUpdateOpenness: '',
      designContentReadiness: '',
      designContentAssistanceAreas: [],
      designContentStrategy: '',
    },
  });

  const designMultilingualSupport = watch('designMultilingualSupport');

  const onSubmit = async (data: GetProjectScope) => {
    try {
      // Combine the new data with existing form data
      const combinedData = { ...formData, ...data };

      // Update the form data in the context
      updateFormData(combinedData);

      // Generate a unique document ID (you can use a custom ID if preferred)
      const docId = `onboarding_${Date.now()}`;

      // Submit the data to Firebase
      await setDoc(doc(db, 'onboarding', docId), combinedData);

      console.log('Updated goal information:', combinedData);
      console.log('Form data submitted successfully');

      // Proceed to the next step (confirmation page)
      nextStep();
    } catch (error) {
      console.error('Error submitting form data:', error);
      // Handle the error (e.g., show an error message to the user)
    }
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
                Let's bring your
                  <span className="bg-gradient-to-r from-purple-800 via-blue-700 to-teal-500 bg-clip-text text-transparent">
                    {' '}
                    website to life!
                  </span>
                </h1>
                <p className="text-left text-gray-800 font-light sm:w-[32rem] text-base pt-2 sm:pt-4 px-1">
                We're excited to dive into your website's content. This is where your digital story takes shape, and we want to capture every important detail. From your brand's voice to the visuals that represent you, we'll work together to create a site that truly speaks to your audience.
                </p>
              </div>
            </div>

            <div className="">
              <div className="hidden md:block mb-4">
                <ProgressIndicator />
              </div>
                  {/* Multilingual Requirements */}
   <section className="mb-6">
     <h3 className="text-lg font-semibold mb-2">Multilingual Requirements</h3>
     <div className="mb-8 text-base">
       <p className="font-medium mb-6">Does your website need to support multiple languages?</p>
       <Controller
         name="designMultilingualSupport"
         control={control}
         render={({ field }) => (
           <select {...field} className="w-full p-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none">
             <option value="">Select an option</option>
             <option value="yes">Yes</option>
             <option value="no">No</option>
             <option value="not-sure">Not sure</option>
           </select>
         )}
       />
       {errors.designMultilingualSupport && <p className="text-red-500">{errors.designMultilingualSupport.message}</p>}
     </div>
     {designMultilingualSupport === 'yes' && (
       <div className="mb-8">
         <p className="font-medium mb-6">Which designlanguages do you need to support? (Select all that apply)</p>
         <Controller
           name="designLanguages"
           control={control}
           render={({ field }) => (
             <>
               {['English', 'Spanish', 'French', 'German', 'Chinese', 'Other'].map((lang) => (
                 <div key={lang}  className="flex items-start space-x-3 mb-4">
                   <input
                     type="checkbox"
                     id={`lang-${lang}`}
                     value={lang}
                     checked={field.value.includes(lang)}
                     onChange={(e) => {
                       const updatedLanguages = e.target.checked
                         ? [...field.value, lang]
                         : field.value.filter((l: string) => l !== lang);
                       field.onChange(updatedLanguages);
                     }}
                     className="mt w-6 h-6 cursor-pointer form-checkbox text-blue-600 rounded-md border-gray-300 focus:ring-blue-500 transition duration-150 ease-in-out"
                   />
                   <label htmlFor={`lang-${lang}`}>{lang}</label>
                 </div>
               ))}
             </>
           )}
         />
         {errors.designLanguages && <p className="text-red-500">{errors.designLanguages.message}</p>}
       </div>
     )}
   </section>

 {/* Content Readiness */}
 <section className="mb-6 text-base">
     <h3 className="text-lg font-semibold mb-2">Content Readiness</h3>
     <div className="mb-8">
       <p className="font-medium mb-6">Do you have a strategy for maintaining and updating your website’s content?</p>
       <Controller
         name="designContentReadiness"
         control={control}
         render={({ field }) => (
           <select {...field} className="w-full p-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none">
             <option value="">Select an option</option>
             <option value="all-ready">We have all content prepared and ready</option>
             <option value="partial">We have some content ready, but need help with the rest</option>
             <option value="need-assistance">We need assistance creating all of our content</option>
             <option value="not-sure">We're not sure what content we need</option>
           </select>
         )}
       />
       {errors.designContentReadiness && <p className="text-red-500">{errors.designContentReadiness.message}</p>}
     </div>

     <div className="mb-8">
       <p className="font-medium mb-6">Which aspects of content creation would you like help with? (Select all that apply)</p>
       <Controller
         name="designContentAssistanceAreas"
         control={control}
         render={({ field }) => (
           <>
             {['Copywriting for web pages', 'Blog post creation', 'Product descriptions', 'Image sourcing or creation', 'Video production', 'None - we have all content covered', 'Other'].map((area) => (
               <div key={area} className="flex items-start space-x-3 mb-4">
                 <input
                   type="checkbox"
                   id={`content-${area}`}
                   value={area}
                   checked={field.value.includes(area)}
                   onChange={(e) => {
                     const updatedAreas = e.target.checked
                       ? [...field.value, area]
                       : field.value.filter((a: string) => a !== area);
                     field.onChange(updatedAreas);
                   }}
                    className="mt w-6 h-6 cursor-pointer form-checkbox text-blue-600 rounded-md border-gray-300 focus:ring-blue-500 transition duration-150 ease-in-out"
                 />
                 <label htmlFor={`content-${area}`}>{area}</label>
               </div>
             ))}
           </>
         )}
       />
       {errors.designContentAssistanceAreas && <p className="text-red-500">{errors.designContentAssistanceAreas.message}</p>}
     </div> 
     <div className="mb-4 text-base">
       <p className="font-medium mb-6">Do you have a content strategy in place for ongoing content creation and updates?</p>
       <Controller
         name="designContentStrategy"
         control={control}
         render={({ field }) => (
           <select {...field} className="w-full p-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none">
             <option value="">Select an option</option>
             <option value="have-strategy">Yes, we have a strategy</option>
             <option value="need-help">No, we need help developing a strategy</option>
             <option value="no-updates">We're not planning on regular content updates</option>
           </select>
         )}
       />
       {errors.designContentStrategy && <p className="text-red-500">{errors.designContentStrategy.message}</p>}
     </div>
   </section>

  {/* Existing Brand Assets */}
  <section className='text-base'>
     <h3 className="text-base font-semibold mb-2">Existing Brand Assets</h3>
     <div className="mb-8">
       <p className="font-medium mb-6">Which brand assets do you already have prepared? (Select all that apply)</p>
       <Controller
         name="designBrandAssets"
         control={control}
         render={({ field }) => (
           <>
             {['Logo', 'Color scheme', 'Typography/Fonts', 'Brand guidelines document', 'None of the above'].map((asset) => (
               <div key={asset} className="flex items-start space-x-3 mb-4">
                 <input
                   type="checkbox"
                   id={`asset-${asset}`}
                   value={asset}
                   checked={field.value.includes(asset)}
                   onChange={(e) => {
                     const updatedAssets = e.target.checked
                       ? [...field.value, asset]
                       : field.value.filter((a: string) => a !== asset);
                     field.onChange(updatedAssets);
                   }}
                   className="mt w-6 h-6 cursor-pointer form-checkbox text-blue-600 rounded-md border-gray-300 focus:ring-blue-500 transition duration-150 ease-in-out"
                 />
                 <label htmlFor={`asset-${asset}`}>{asset}</label>
               </div>
             ))}
           </>
         )}
       />

       {errors.designBrandAssets && <p className="text-red-500">{errors.designBrandAssets.message}</p>}
     </div>
     <div className="mb-8">
       <p className="font-medium mb-2">Are you open to refining or updating your existing brand assets during this project?</p>
       <Controller
         name="designBrandUpdateOpenness"
         control={control}
         render={({ field }) => (
           <select {...field} className="w-full p-3 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 appearance-none">
             <option value="">Select an option</option>
             <option value="open">Yes, we're open to updates</option>
             <option value="keep-current">No, we want to keep our current branding</option>
             <option value="discuss">We'd like to discuss options</option>
           </select>
         )}
       />
       {errors.designBrandUpdateOpenness && <p className="text-red-500">{errors.designBrandUpdateOpenness.message}</p>}
     </div>
   </section>

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
         Submit
       </button>
     </div> */}
     <StepWithNavigation />
          </div>
        </div>
      </form>
    </section>
  );
};

export default GetProjectScope;
