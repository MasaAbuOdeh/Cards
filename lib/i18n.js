import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// استيراد ملفات الترجمة
import en from "../locals/en/common.json";
import ar from "../locals/ar/common.json";

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en: { common: en },
      ar: { common: ar }
    },
    lng: "ar", // اللغة الافتراضية
    fallbackLng: "en",
    interpolation: { escapeValue: false }
  });

export default i18n;
