import React, { createContext, useState, useContext } from 'react';

interface FormData {
  clientFirstName: string;
  clientLastName: string;
  clientEmail: string;

  objectivesWebsiteType: string;
  objectivesPrimaryGoals: string[];
  objectivesTargetAudience: string;
  objectivesAdditionalGoalNotes?: string;

  designStyleOptions: string[];
  designVisualOptions: string[];
  designAdditionalNotes?: string;

  designMultilingualSupport: string;
  designlanguages?: string[];
  designBrandAssets?: string[];
  designBrandUpdateOpenness: string;
  designContentReadiness: string;
  designContentAssistanceAreas?: string[];
  designContentStrategy: string;
}

interface FormDataContextType {
  formData: FormData;
  updateFormData: (newData: Partial<FormData>) => void;
}

const FormDataContext = createContext<FormDataContextType | undefined>(undefined);

export const FormDataProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [formData, setFormData] = useState<FormData>({
    clientFirstName: '',
    clientLastName: '',
    clientEmail: '',
    objectivesPrimaryGoals: [],
    objectivesWebsiteType: '',
    objectivesTargetAudience: '',
    objectivesAdditionalGoalNotes: '',

    designStyleOptions: [],
    designVisualOptions: [],
    designAdditionalNotes: '',
    
    designMultilingualSupport: '',
    designlanguages: [],
    designBrandAssets: [],
    designBrandUpdateOpenness: '',
    designContentReadiness: '',
    designContentAssistanceAreas: [],
    designContentStrategy: '',
  });

  const updateFormData = (newData: Partial<FormData>) => {
    setFormData(prevData => ({ ...prevData, ...newData }));
  };

  return (
    <FormDataContext.Provider value={{ formData, updateFormData }}>
      {children}
    </FormDataContext.Provider>
  );
};

export const useFormData = () => {
  const context = useContext(FormDataContext);
  if (context === undefined) {
    throw new Error('useFormData must be used within a FormDataProvider');
  }
  return context;
};
