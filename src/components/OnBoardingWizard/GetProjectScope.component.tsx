// src/components/GetDesignInfo.component.tsx
import { useForm, Controller } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
//import { useFormData } from '../../hooks/useFormData.hook';
import { useWizard } from 'react-use-wizard';
import ProgressIndicator from './ProgressIndicator.component';
import { useFormData } from '../../contexts/FormDataContext';

import { doc, setDoc } from 'firebase/firestore';
import { db } from '../../config/firebase/config';



const schema = yup.object().shape({
  designMultilingualSupport: yup.string().required('Please select an option'),
  designLanguages: yup.array().when('designMultilingualSupport', {
    is: (val: string) => val === 'yes',
    then: () => yup.array().min(1, 'Please select at least one language'),
    otherwise: () => yup.array()
  }),  
  designBrandAssets: yup.array().min(1, 'Please select at least one brand asset'),
  designBrandUpdateOpenness: yup.string().required('Please select an option'),
  designContentReadiness: yup.string().required('Please select an option'),
  designContentAssistanceAreas: yup.array().min(1, 'Please select at least one content assistance area'),
  designContentStrategy: yup.string().required('Please select an option'),
});

//   designMultilingualSupport: string;
//   designlanguages?: string[];
//   designBrandAssets?: string[];
//   designBrandUpdateOpenness: string;
//   designContentReadiness: string;
//   designContentAssistanceAreas?: string[];
//   designContentStrategy: string;

interface GetProjectScope {
  designMultilingualSupport: string;
  designLanguages: string[];
  designBrandAssets?: string[];
  designBrandUpdateOpenness: string;
  designContentReadiness: string;
  designContentAssistanceAreas?: string[];
  designContentStrategy: string;
}
const GetProjectScope: React.FC = () => {
  const { formData, updateFormData } = useFormData();
  const { nextStep, previousStep } = useWizard();


  const { control, handleSubmit, watch, formState: { errors } } = useForm({
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
    <form onSubmit={handleSubmit(onSubmit)}>
     <div className='mx-auto max-w-screen-lg'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-leftp-4 p-8 md:p-12 pb-0">
             {/* Show ProgressIndicator only on screens below md breakpoint */}
         <div className="md:hidden">
            <ProgressIndicator/>
          </div>
          <h1 className="text-left text-3xl font-inter tracking-wide py-4">
            Let's talk website content!
          </h1>
          <p className="text-left text-sm text-gray-500 font-popins">
            Help us understand your content needs. Do you need a multilingual site? Are your brand assets, like logos or images, ready to go? 
          </p>
          <p className="text-left text-sm text-gray-500 font-popins pt-4">
          Share any existing materials or details that will shape your website’s content, so we can ensure everything aligns with your vision.
          </p>
        </div>
        <div className="p-8">
        <div className="hidden md:block">
            <ProgressIndicator/>
          </div>

          <p className="text-left text-sm text-gray-500 font-popins pb-6">
            We're excited to have you on board! Let's get started with your
            website design journey.
          </p>

           {/* Multilingual Requirements */}
      <section className="mb-6">
        <h3 className="text-lg font-semibold mb-2">Multilingual Requirements</h3>
        <div className="mb-4 text-sm">
          <p className="font-medium mb-2">Does your website need to support multiple designlanguages?</p>
          <Controller
            name="designMultilingualSupport"
            control={control}
            render={({ field }) => (
              <select {...field} className="w-full p-2 border rounded">
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
          <div className="mb-4">
            <p className="font-medium mb-2">Which designlanguages do you need to support? (Select all that apply)</p>
            <Controller
              name="designLanguages"
              control={control}
              render={({ field }) => (
                <>
                  {['English', 'Spanish', 'French', 'German', 'Chinese', 'Other'].map((lang) => (
                    <div key={lang} className="flex items-center mb-2">
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
                        className="mr-2"
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
      <section className="mb-6 text-sm pt-6">
        <h3 className="text-lg font-semibold mb-2">Content Readiness</h3>
        <div className="mb-4">
          <p className="font-medium mb-2">What is the current state of your website content?</p>
          <Controller
            name="designContentReadiness"
            control={control}
            render={({ field }) => (
              <select {...field} className="w-full p-2 border rounded">
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
        <div className="mb-4">
          <p className="font-medium mb-2">Which areas of content creation do you need assistance with? (Select all that apply)</p>
          <Controller
            name="designContentAssistanceAreas"
            control={control}
            render={({ field }) => (
              <>
                {['Copywriting for web pages', 'Blog post creation', 'Product descriptions', 'Image sourcing or creation', 'Video production', 'None - we have all content covered', 'Other'].map((area) => (
                  <div key={area} className="flex items-center mb-2">
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
                      className="mr-2"
                    />
                    <label htmlFor={`content-${area}`}>{area}</label>
                  </div>
                ))}
              </>
            )}
          />
          {errors.designContentAssistanceAreas && <p className="text-red-500">{errors.designContentAssistanceAreas.message}</p>}
        </div> 
        <div className="mb-4 text-sm">
          <p className="font-medium mb-2">Do you have a content strategy in place for ongoing content creation and updates?</p>
          <Controller
            name="designContentStrategy"
            control={control}
            render={({ field }) => (
              <select {...field} className="w-full p-2 border rounded">
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
           <section className='text-sm pt-6'>
        <h3 className="text-base font-semibold mb-2">Existing Brand Assets</h3>
        <div className="mb-4">
          <p className="font-medium mb-2">Which of the following brand assets do you already have? (Select all that apply)</p>
          <Controller
            name="designBrandAssets"
            control={control}
            render={({ field }) => (
              <>
                {['Logo', 'Color scheme', 'Typography/Fonts', 'Brand guidelines document', 'None of the above'].map((asset) => (
                  <div key={asset} className="flex items-center mb-2">
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
                      className="mr-2"
                    />
                    <label htmlFor={`asset-${asset}`}>{asset}</label>
                  </div>
                ))}
              </>
            )}
          />

          {errors.designBrandAssets && <p className="text-red-500">{errors.designBrandAssets.message}</p>}
        </div>
        <div className="mb-4">
          <p className="font-medium mb-2">Are you open to refining or updating your existing brand assets as part of this project?</p>
          <Controller
            name="designBrandUpdateOpenness"
            control={control}
            render={({ field }) => (
              <select {...field} className="w-full p-2 border rounded">
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
            Submit
          </button>
        </div>
        </div>
    </div>
  </form>

  
  );
};

export default GetProjectScope;