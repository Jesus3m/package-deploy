import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { resources } from './resources';

export enum LocaleSupport {
  'English' = 'en',
  'Spanish' = 'es',
}

i18n.use(initReactI18next).init({
  resources,
  lng: LocaleSupport.English,
  fallbackLng: LocaleSupport.English,
  interpolation: {
    escapeValue: false,
  },
});

export { i18n };
