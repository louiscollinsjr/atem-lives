// src/hooks/useFormData.ts
import { useState } from 'react';

export const useFormData = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    websiteGoals: '',
    designPreferences: '',
    projectScope: '',
  });

  const updateFormData = (newData: any) => {
    setFormData((prevData) => ({ ...prevData, ...newData }));
  };

  return { formData, updateFormData };
};