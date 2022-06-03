import i18n from 'i18next';
import backend from 'i18next-http-backend';
import Languagedetector from 'i18next-browser-languagedetector';
import { initReactI18next } from 'react-i18next';

i18n
  .use(backend)
  .use(Languagedetector)
  .use(initReactI18next)
  .init({
    backend: {
      loadPath: '/assets/languages/{{lng}}.json',
    },
    fallbackLng: 'en',
    debug: false,
    interpolation: { escapeValue: false },
  });

export default i18n;
