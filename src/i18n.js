import i18n from "i18next"
import Backend from "i18next-http-backend"
import LanguageDetector from "i18next-browser-languagedetector"
import { initReactI18next } from "react-i18next"
import translationEN from "../src/locales/en/translationEN.json"
import translationFR from "../src/locales/fr/translationFR.json"

const languages = ["en", "fr"];

const resources = {
    fr: {
      translation: translationFR
    },
    en: {
      translation: translationEN
    }
  };

i18n.use(Backend).use(LanguageDetector).use(initReactI18next).init({
    resources: resources,
    whitelist: languages,
    lng: "fr",
    fallbackLng: "en",
    debug: true,
    detection: {
        order: ["navigator", "queryString", "cookie"],
        cache: ["cookie"]
    },
    interpolation: {
        escapeValue: false
    },
})

export default i18n

// lng: "fr",