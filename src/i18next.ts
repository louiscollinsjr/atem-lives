import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector'; 
import translationEN from './locales/en/translation.json'; 
import translationRO from './locales/ro/translation.json'; 

i18n
  .use(LanguageDetector) 
  .use(initReactI18next) 
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      ro: {
        translation: translationRO,
      },
    },
    fallbackLng: 'en', 
    detection: {
      order: ['navigator', 'htmlTag', 'path', 'subdomain'], 
      caches: ['localStorage', 'cookie'], 
    },
    interpolation: {
      escapeValue: false, 
    },
  });

export default i18n;