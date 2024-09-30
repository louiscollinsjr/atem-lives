import { useState } from 'react';

// Define the structure of your form data
export interface FormData {
  firstName: string;
  lastName: string;
  email: string;

  goalInfo: string[]; 
  websiteType: string;     
  targetAudience: string;  
  additionalGoals?: string; 

  styleInfo: string[];
  visualInfo: string[];
  additionalDesignGoals?: string;
  
}

// Define a type for partial updates
type PartialFormData = Partial<FormData>;

export const useFormData = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    goalInfo: [],
    websiteType: '',
    targetAudience: '',
    additionalGoals: '',
    styleInfo: [],
    visualInfo: [],
    additionalDesignGoals: '',
  
  });

  const updateFormData = (newData: PartialFormData) => {
    setFormData((prevData) => ({
      ...prevData,
      ...newData,
    }));
  };

  return { formData, updateFormData };
};