import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/application/components/ui/dialog";
import { PlaceholdersAndVanishInput } from "@/shared/application/components/ui/placeholders-and-vanish-input";
import { SearchingStore } from "@/shared/application/stores/searchinStore";
import { useState } from "react";
import EvaluationTable from "./TableData";

const LandingPrincipal = () => {
  const [searched, setSearched] = useState("");

  const { setSearchValue } = SearchingStore();
  const placeholders = [
    "¿Que pasa con las petroleras actuales?",
    "Caso odebrech",
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearched(e.target.value);
  };
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("submitted");

    setSearchValue(searched);
  };
  return (
    <Dialog>
      <div className="relative isolate overflow-hidden py-8">
        <div className="mx-auto max-w-2xl">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="bg-white relative rounded-full px-3 py-1 text-sm/6 text-gray-600 ring-1 ring-gray-900/10 hover:ring-gray-900/20">
              Nuestra Metodología
              <DialogTrigger className="font-semibold text-indigo-600">
                <span className="absolute inset-0" aria-hidden="true">
                  {" "}
                </span>
                Leer más <span aria-hidden="true">&rarr;</span>
              </DialogTrigger>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-5xl font-semibold tracking-tight text-balance text-gray-900 sm:text-7xl">
              La información al alcance de tus manos
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              Valida datos de forma automatizada y mantente informado con la
              verdad.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <PlaceholdersAndVanishInput
                placeholders={placeholders}
                onChange={handleChange}
                onSubmit={onSubmit}
              />
            </div>
          </div>
        </div>
      </div>

      <DialogContent>
        <DialogHeader>
          <DialogTitle>Nuestra metodoligía</DialogTitle>

          <EvaluationTable />
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default LandingPrincipal;
