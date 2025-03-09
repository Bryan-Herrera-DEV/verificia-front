import React, { useCallback, useState } from "react";
import {
  Form,
  Formity,
  OnReturn,
  Return,
  ReturnOutput,
  Schema,
} from "@formity/react";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";

import { Step, Layout, NextButton, Listbox } from "./components";
import { MultiStep } from "./multi-step";
import BackButton from "./components/navigation/back-button";
import { Button } from "@/shared/application/components/ui/button";
export type Values = [
  Form<{}>,
  Form<{ goal: string }>,
  Form<{ incomeSource: string }>,
  Form<{ moneyManagement: string }>,
  Form<{}>,
  Form<{ financeLearning: string }>,
  Form<{ financeImpact: string }>,
  Return<{
    goal: string;
    incomeSource: string;
    moneyManagement: string;
    financeLearning: string;
    financeImpact: string;
  }>
];

export const schema: Schema<Values> = [
  {
    form: {
      values: () => ({ info: ["", []] }),
      render: ({ values, onNext, onBack, getState, setState }) => (
        <MultiStep
          step="info"
          onNext={onNext}
          onBack={onBack}
          getState={getState}
          setState={setState}
        >
          <Step
            defaultValues={values}
            resolver={zodResolver(z.object({ info: z.string() }))}
          >
            <Layout
              current={1}
              total={7}
              heading="Welcome!"
              fields={[]}
              description="¡Vamos a conocerte mejor!  Comienza tu viaje financiero"
              button={
                <Button
                  className="w-full rounded-xl font-semibold"
                  variant={"minoGradient"}
                >
                  Continuar
                </Button>
              }
            />
          </Step>
        </MultiStep>
      ),
    },
  },
  {
    form: {
      values: () => ({ choice: ["", []] }),
      render: ({ values, onNext, onBack, getState, setState }) => (
        <MultiStep
          step="selection"
          onNext={onNext}
          onBack={onBack}
          getState={getState}
          setState={setState}
        >
          <Step
            defaultValues={values}
            resolver={zodResolver(
              z.object({
                choice: z.string().min(1, "Please select an option"),
              })
            )}
          >
            <Layout
              current={1}
              total={7}
              heading="¿Cuál es tu fuente de ingresos?"
              description="Selecciona tu principal fuente de ingresos."
              fields={[
                <Listbox
                  key="choice"
                  name="choice"
                  label="Options"
                  options={[
                    { value: "ventas", label: "Ventas" },
                    { value: "padres", label: "Mis padres" },
                    { value: "ninguno", label: "No recibo ingresos" },
                  ]}
                />,
              ]}
              button={<NextButton>Submit</NextButton>}
              back={<BackButton />}
            />
          </Step>
        </MultiStep>
      ),
    },
  },
  {
    form: {
      values: () => ({ choice: ["", []] }),
      render: ({ values, onNext, onBack, getState, setState }) => (
        <MultiStep
          step="selection"
          onNext={onNext}
          onBack={onBack}
          getState={getState}
          setState={setState}
        >
          <Step
            defaultValues={values}
            resolver={zodResolver(
              z.object({
                choice: z.string().min(1, "Please select an option"),
              })
            )}
          >
            <Layout
              current={2}
              total={7}
              heading="¿Cuál es tu meta?"
              description="Elige una opción que represente tu objetivo financiero."
              fields={[
                <Listbox
                  key="choice"
                  name="choice"
                  label="Options"
                  options={[
                    { value: "invertir", label: "Invertir mi dinero" },
                    { value: "ahorrar", label: "Ahorrar más, gastar menos" },
                    { value: "curiosidad", label: "Solo curiosidad" },
                  ]}
                />,
              ]}
              button={<NextButton>Submit</NextButton>}
              back={<BackButton />}
            />
          </Step>
        </MultiStep>
      ),
    },
  },
  {
    form: {
      values: () => ({ choice: ["", []] }),
      render: ({ values, onNext, onBack, getState, setState }) => (
        <MultiStep
          step="selection"
          onNext={onNext}
          onBack={onBack}
          getState={getState}
          setState={setState}
        >
          <Step
            defaultValues={values}
            resolver={zodResolver(
              z.object({
                choice: z.string().min(1, "Please select an option"),
              })
            )}
          >
            <Layout
              current={3}
              total={7}
             heading="¿Cuál es tu fuente de ingresos?"
              description="Selecciona tu principal fuente de ingresos."
              fields={[
                <Listbox
                  key="choice"
                  name="choice"
                  label="Options"
                  options={[
                    { value: "ventas", label: "Ventas" },
                    { value: "padres", label: "Mis padres" },
                    { value: "ninguno", label: "No recibo ingresos" },
                  ]}
                />,
              ]}
              button={<NextButton>Submit</NextButton>}
              back={<BackButton />}
            />
          </Step>
        </MultiStep>
      ),
    },
  },
  {
    form: {
      values: () => ({ info: ["", []] }),
      render: ({ values, onNext, onBack, getState, setState }) => (
        <MultiStep
          step="info"
          onNext={onNext}
          onBack={onBack}
          getState={getState}
          setState={setState}
        >
          <Step
            defaultValues={values}
            resolver={zodResolver(z.object({ info: z.string() }))}
          >
            <Layout
              current={4}
              total={7}
              heading="Información"
              fields={[]}
              description="Empezar joven te da una gran ventaja. Cuanto antes aprendas sobre dinero, mejor preparado estarás para el futuro."
              button={
                <Button
                  className="w-full rounded-xl font-semibold"
                  variant={"minoGradient"}
                >
                  Continuar
                </Button>
              }
            />
          </Step>
        </MultiStep>
      ),
    },
  },
  {
    form: {
      values: () => ({ choice: ["", []] }),
      render: ({ values, onNext, onBack, getState, setState }) => (
        <MultiStep
          step="selection"
          onNext={onNext}
          onBack={onBack}
          getState={getState}
          setState={setState}
        >
          <Step
            defaultValues={values}
            resolver={zodResolver(
              z.object({
                choice: z.string().min(1, "Please select an option"),
              })
            )}
          >
            <Layout
              current={5}
              total={7}
             heading="¿Cómo te sientes manejando dinero?"
              description="Selecciona tu principal fuente de ingresos."
              fields={[
                <Listbox
                  key="choice"
                  name="choice"
                  label="Options"
                  options={[
                    { value: "seguro", label: "Control total 💰✅" },
                    { value: "medio", label: "Voy mejorando 📈" },
                    { value: "poco", label: "Algo inestable 🤷‍♂️" },
                    { value: "inseguro", label: "Necesito ayuda ⚠️" },
                  ]}
                />,
              ]}
              button={<NextButton>Submit</NextButton>}
              back={<BackButton />}
            />
          </Step>
        </MultiStep>
      ),
    },
  },
  {
    form: {
      values: () => ({ info: ["", []] }),
      render: ({ values, onNext, onBack, getState, setState }) => (
        <MultiStep
          step="info"
          onNext={onNext}
          onBack={onBack}
          getState={getState}
          setState={setState}
        >
          <Step
            defaultValues={values}
            resolver={zodResolver(z.object({ info: z.string() }))}
          >
            <Layout
              current={6}
              total={7}
              heading="Información"
              fields={[]}
              description="Empezar joven te da una gran ventaja. Cuanto antes aprendas sobre dinero, mejor preparado estarás para el futuro."
              button={
                <Button
                  className="w-full rounded-xl font-semibold"
                  variant={"minoGradient"}
                >
                  Continuar
                </Button>
              }
            />
          </Step>
        </MultiStep>
      ),
    },
  },
  {
    return: ({ choice }) => ({ choice }),
  },
];
const Register = () => {
  const [values, setValues] = useState<ReturnOutput<Values> | null>(null);

  const onReturn = useCallback<OnReturn<Values>>((values) => {
    setValues(values);
  }, []);

  if (values) {
    return (
      <div>
        <h2>Form Submitted!</h2>
        <p>Your choice: {values.choice}</p>
        <button onClick={() => setValues(null)}>Restart</button>
      </div>
    );
  }

  return <Formity<Values> schema={schema} onReturn={onReturn} />;
};

export default Register;
