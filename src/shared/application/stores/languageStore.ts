import appConfig from "@/core/config/app.config";
import { useZustandFunctions as zustadFunctions } from "@/shared/application/state/useZustandFunctions";
import { create } from "zustand";
import { persist } from "zustand/middleware";

enum LocaleStoreProps {
  CurrentLang = "currentLang",
}

interface LocaleState {
  [LocaleStoreProps.CurrentLang]: string;
}

const initialState: LocaleState = {
  [LocaleStoreProps.CurrentLang]: appConfig.locale,
};

interface LocaleActions extends LocaleState {
  setLang: (value: string) => void;
}

const { setValue } = zustadFunctions<LocaleActions, LocaleState>();

type LocaleStoreType = LocaleState & LocaleActions;

const persistedStore = persist<LocaleStoreType>(
  (set, get) => ({
    ...initialState,
    setLang: setValue<string>(LocaleStoreProps.CurrentLang)(set, get),
  }),
  {
    name: "LocaleStore",
  }
);

export const LocaleStore = create(persistedStore);
