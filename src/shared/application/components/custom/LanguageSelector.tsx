import { dateLocales } from "@/core/config/i18n";
import dayjs from "dayjs";
import i18next from "i18next";
import { Check, ChevronDown, Globe } from "lucide-react";
import { useState } from "react";
import { useTranslation } from "react-i18next";
import { LocaleStore } from "../../stores/languageStore";
import { Avatar, AvatarImage } from "../ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";

export function LanguageSelector() {
  const { t } = useTranslation();
  const languageList = [
    {
      label: t("commonSystemKeys.language.en"),

      value: "en",
      flag: "us",
    },
    { label: t("commonSystemKeys.language.es"), value: "es", flag: "sp" },
  ];
  const [loading, setLoading] = useState(false);
  const { currentLang: locale } = LocaleStore();
  const setLang = LocaleStore((state) => state.setLang);

  // const selectLangFlag = useMemo(() => {
  //   return languageList.find((lang) => lang.value === locale)?.flag;
  // }, [locale]);

  const onLanguageSelect = async (lang: string) => {
    const formattedLang = lang.replace(/-([a-z])/g, (g) => g[1].toUpperCase());

    setLoading(true);

    const dispatchLang = () => {
      i18next.changeLanguage(formattedLang);
      setLang(lang);
      setLoading(false);
    };

    try {
      await dateLocales[formattedLang]();
      dayjs.locale(formattedLang);
      dispatchLang();
    } catch (error) {
      console.error("Error loading language:", error);
      dispatchLang();
    }
  };

  return (
    <div className="w-auto z-50">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          {loading ? (
            <div className="h-5 w-5 animate-spin rounded-full border-2 border-gray-300 border-t-gray-600" />
          ) : (
            <div className="flex items-center justify-start gap-3 text-sm z-50">
              <Globe width={"20px"} />
              <p>{languageList.find((lang) => lang.value === locale)?.label}</p>
              <ChevronDown />
            </div>
          )}
        </DropdownMenuTrigger>
        <DropdownMenuContent
          align="end"
          className="bg-black-Eerie border-none text-white !text-md"
        >
          {languageList.map((lang) => (
            <DropdownMenuItem
              key={lang.value}
              onClick={() => onLanguageSelect(lang.value)}
              className="bg-black-Eerie hover:bg-black-Onyx"
            >
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center">
                  <Avatar className="h-5 w-5 mr-2">
                    <AvatarImage
                      src={`/img/countries/${lang.flag}.png`}
                      alt={lang.label}
                    />
                  </Avatar>
                  <span>{lang.label}</span>
                </div>
                {locale === lang.value && (
                  <Check className="h-4 w-4 text-emerald-500" />
                )}
              </div>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
