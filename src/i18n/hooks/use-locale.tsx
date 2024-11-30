import { useEffect, useState } from 'react';
import { getCookie, setCookie } from '../../utils';
import { i18n } from '../config';

export const useLocale = () => {
  const [locale, setCurrentLocale] = useState(i18n.language);

  const setLocale = (locale: string) => {
    setCurrentLocale(locale);
    setCookie('locale', locale);
    i18n.changeLanguage(locale);
  };

  useEffect(() => {
    const cookie = getCookie('locale');
    if (cookie) {
      setCurrentLocale(cookie);
      i18n.changeLanguage(cookie);
    }
  }, []);

  return {
    locale,
    setLocale,
  };
};
