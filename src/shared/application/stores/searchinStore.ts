import { useZustandFunctions as zustadFunctions } from "@/shared/application/state/useZustandFunctions";
import { create } from "zustand";

enum SearchingStoreProps {
  InitSearch = "initSearch",
}

interface SearchingState {
  [SearchingStoreProps.InitSearch]: string | null;
}

const initialState: SearchingState = {
  [SearchingStoreProps.InitSearch]: "",
};

interface SearchingActions extends SearchingState {
  setSearchValue: (value: string) => void;
}

const { setValue } = zustadFunctions<SearchingActions, SearchingState>();

type LocaleStoreType = SearchingState & SearchingActions;

export const SearchingStore = create<LocaleStoreType>((set, get) => ({
  ...initialState,
  setSearchValue: setValue<string>(SearchingStoreProps.InitSearch)(set, get),
}));
