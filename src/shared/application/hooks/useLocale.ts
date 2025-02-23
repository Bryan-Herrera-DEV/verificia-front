import i18n, { dateLocales } from "@/core/config/i18n";
import dayjs from "dayjs";
import { useEffect } from "react";
import { LocaleStore } from "../stores/languageStore";

function useLocale() {
  const { currentLang: locale } = LocaleStore();

  useEffect(() => {
    const formattedLang = locale.replace(/-([a-z])/g, function (g) {
      return g[1].toUpperCase();
    });
    if (locale !== i18n.language) {
      i18n.changeLanguage(formattedLang);
    }
    dateLocales[formattedLang]().then(() => {
      dayjs.locale(formattedLang);
    });
  }, [locale]);

  return locale;
}

export default useLocale;
