import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import * as csLocale from "../assets/locales/cs/translation.json";
import * as enLocale from "../assets/locales/en/translation.json";

export const fallbackLocale = "cs";
export const supportedLocales = ["cs", "en"];

i18n
  // i18next-http-backend
  // loads translations from your server
  // https://github.com/i18next/i18next-http-backend
  //   .use(Backend)
  // detect user language
  // learn more: https://github.com/i18next/i18next-browser-languageDetector
  .use(LanguageDetector)
  // pass the i18n instance to react-i18next.
  .use(initReactI18next)
  // init i18next
  // for all options read: https://www.i18next.com/overview/configuration-options
  .init({
    // lng: "cs", // can not be set for lang detector
    debug: false,
    fallbackLng: fallbackLocale,
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    detection: {
      order: ["path"],
      caches: [],
    },
    resources: {
      cs: {
        translation: csLocale,
      },
      en: {
        translation: enLocale,
      },
    },
  });

export default i18n;
