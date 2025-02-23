import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import Backend from "i18next-http-backend";
import { initReactI18next } from "react-i18next";

import en from "./../lang/en.json";
import es from "./../lang/es.json";
import appConfig from "./app.config";

export enum Language {
  En = "en",
  Es = "es",
}

const resources = {
  [Language.En]: {
    translation: en,
  },
  [Language.Es]: {
    translation: es,
  },
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .use(Backend)
  .init({
    resources,
    lng: appConfig.locale,
    fallbackLng: appConfig.locale,
    returnObjects: true,
    preload: [Language.En, Language.Es],
    ns: ["translation"],
    defaultNS: "translation",
    interpolation: {
      escapeValue: false,
    },
  });

export const dateLocales: {
  [key: string]: () => Promise<ILocale>;
} = {
  en: () => import("dayjs/locale/en"),
  es: () => import("dayjs/locale/es"),
};

export const defaultNS = "translation";

export default i18n;
