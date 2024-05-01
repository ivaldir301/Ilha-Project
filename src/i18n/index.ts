import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import translationsInEng from '../translations/en/translation.json';
import translationsInGerman from '../translations/al/translation.json';
import translationsInItalian from '../translations/it/translation.json';
import translationsInPortuguese from '../translations/pt/translation.json';
import translationsInFrench from '../translations/fr/translation.json';

// the translations
const resources = {
  en: {
    translation: translationsInEng
  },
  de: {
    translation: translationsInGerman
  },
  it: {
    translation: translationsInItalian
  },
  fr: {
    translation: translationsInFrench
  },
  pt: {
    translation: translationsInPortuguese
  },
};

i18n
  .use(initReactI18next) // passes i18n down to react-i18next
  .init({
    resources, // resources are important to load translations for the languages.
    lng: String(localStorage.getItem("language")) || "pt", // It acts as default language. When the site loads, content is shown in this language.  
    debug: true,
    fallbackLng: "en", // use de if selected language is not available
    interpolation: {
      escapeValue: false
    },
    ns: "translation", // namespaces help to divide huge translations into multiple small files.
    defaultNS: "translation"
  });

export default i18n;