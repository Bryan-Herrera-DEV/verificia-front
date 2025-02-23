/// <reference types="vite/client" />

import "react-i18next";
import { defaultNS } from "./core/config/i18n";
import dictionary from "./core/lang/en.json";

declare module "dayjs/locale/*" {
  namespace locale {
    declare interface ILocale {
      name: string;
      weekdays?: string[];
      months?: string[];
      weekStart?: number;
      weekdaysShort?: string[];
      monthsShort?: string[];
      weekdaysMin?: string[];
      ordinal?: (n: number) => number | string;
      formats: Partial<{
        LT: string;
        LTS: string;
        L: string;
        LL: string;
        LLL: string;
        LLLL: string;
      }>;
      relativeTime: Partial<{
        future: string;
        past: string;
        s: string;
        m: string;
        mm: string;
        h: string;
        hh: string;
        d: string;
        dd: string;
        M: string;
        MM: string;
        y: string;
        yy: string;
      }>;
    }

    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface Locale extends ILocale {}
  }

  const locale: locale.Locale;

  export = locale;
}
declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: typeof defaultNS;
    resources: {
      [key: string]: typeof dictionary;
    };
  }
}
