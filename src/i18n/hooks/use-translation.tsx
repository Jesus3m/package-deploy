import { useTranslation as useI18nTranslation } from 'react-i18next';
import { resources } from '../resources';

type TranslationKeys<T, P extends string = ''> = {
  [K in keyof T]: T[K] extends Record<string, any>
    ? // @ts-ignore
      TranslationKeys<T[K], `${P}${K}.`>
    : `${P}${K & string}`;
}[keyof T];

export type TranslationSchema = TranslationKeys<
  (typeof resources)['en']['translation']
>;
export const useTranslation = () => {
  const { t: translate } = useI18nTranslation();

  const t = (
    key: TranslationKeys<(typeof resources)['en']['translation']>,
    options?: any,
  ) => {
    return translate(key, options) as string;
  };

  return {
    t,
  };
};
