import { Check, Diff, Search, Send, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import {
  SidebarContent,
  SidebarHeader,
  SidebarProvider,
  Sidebar,
  SidebarFooter,
} from "@/shared/application/components/ui/sidebar";
import { Input } from "@/shared/application/components/ui/input";
import { Button } from "@/shared/application/components/ui/button";
import { GlowingEffect } from "@/shared/application/components/ui/glowing-effect";
import { SearchingStore } from "@/shared/application/stores/searchinStore";
import { Separator } from "@/shared/application/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/shared/application/components/ui/tooltip";
import { LogoPrincipal } from "@/shared/infrastructure/images";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/application/components/ui/dialog";
import { TwitterLogoIcon } from "@radix-ui/react-icons";

type TCategory = "PERSON" | "ORGANIZATION";
type TOrigin = "PUBLIC" | "PRIVATE" | "MIXIN";
type TSource = "LOCAL" | "INTERNATIONAL";

type TConfiability = "REALIABLE" | "QUESTIONABLE" | "NOT_REALIABLE";

interface IFuente {
  category: TCategory;
  origin: TOrigin;
  source: TSource;
  name: string;
}

interface TContent {
  date: string;
  title: string;
  id: number;
  content: string;
  confiability: TConfiability;
  url?: string;

  source: IFuente;
}

const confiabilityMatching: Record<
  TConfiability,
  {
    inSpanish: string;
    icon: React.ReactNode;
    color: string;
  }
> = {
  REALIABLE: {
    inSpanish: "Confiable",
    icon: <Check className="h-4 w-4 text-black dark:text-neutral-400" />,
    color: "#A8E6A1",
  },
  QUESTIONABLE: {
    inSpanish: "Dudoso",
    icon: <Diff className="h-4 w-4 text-black dark:text-neutral-400" />,
    color: "#FFEB3B",
  },
  NOT_REALIABLE: {
    inSpanish: "Nada confiable",
    icon: <X className="h-4 w-4 text-black dark:text-neutral-400" />,
    color: "#F44336",
  },
};

export const Dashboard = () => {
  const { initSearch } = SearchingStore();

  // const { messages, input, handleInputChange, handleSubmit } = useChat()
  const messages = [
    {
      id: "1",
      role: "user",
      content:
        "Hola, he escuchado que hubo un caso importante relacionado con Odebrecht en Ecuador. ¿Podrías contarme qué pasó exactamente?",
    },
    {
      id: "2",
      role: "assistant",
      content:
        "¡Claro! Odebrecht, que es una empresa constructora brasileña, ha estado involucrada en varios proyectos de infraestructura en Ecuador desde los años 80. Sin embargo, en 2008, el Gobierno de ese entonces detectó serias deficiencias en la central hidroeléctrica San Francisco, proyecto que la compañía había construido. Esto llevó al presidente Rafael Correa a expulsar a Odebrecht del país y a rescindir todos sus contratos.",
    },
    {
      id: "3",
      role: "user",
      content:
        "¿Y qué provocó que el Gobierno llegara a tomar medidas tan drásticas contra la empresa?",
    },
    {
      id: "4",
      role: "assistant",
      content:
        "En la central San Francisco hubo fallas que, según las auditorías, podían poner en riesgo la operatividad de la obra y la seguridad energética del país. Además de la expulsión y la rescisión de contratos, se ordenó el arraigo de sus principales funcionarios en Ecuador. Odebrecht tuvo que pagar por reparaciones y la paralización de la central, sumando alrededor de 75,7 millones de dólares.",
    },
    {
      id: "5",
      role: "user",
      content:
        "Entiendo. Entonces, ¿por qué Odebrecht regresó a trabajar en Ecuador en 2010 si ya la habían expulsado?",
    },
    {
      id: "6",
      role: "assistant",
      content:
        "Luego de aceptar condiciones exigidas por el Gobierno, la empresa regresó para hacerse cargo de nuevos proyectos bajo procesos de contratación pública, como el trasvase Daule–Vinces y la central hidroeléctrica Manduriacu, entre otros. Todos estos proyectos fueron entregados o se encuentran en fase de cierre, con informes de auditoría de la Contraloría General del Estado para sus fases precontractual y contractual.",
    },
    {
      id: "7",
      role: "assistant",
      content:
        "Es importante mencionar que, después del año 2010, Odebrecht no volvió a firmar más contratos con el Gobierno central; sin embargo, mantiene un proyecto con el municipio de Quito para la fase 2 del Metro, que asciende a 1.538 millones de dólares. De esta manera, el caso Odebrecht en Ecuador ha sido vigilado de cerca por las autoridades y, según ha enfatizado el Gobierno, cualquier acto de corrupción debe ser investigado y sancionado con rigurosidad.",
    },
  ];
  const bentoData: TContent[] = [
    {
      date: "2025-02-23",
      title: "Caso Odebrecht en Ecuador: Expulsión y Regreso bajo Condiciones",
      id: 1,
      confiability: "NOT_REALIABLE",
      url: "https://web.prueba/enlace",
      content:
        "El caso Odebrecht en Ecuador comenzó con la expulsión de la empresa en 2008, luego de que se detectaran fallas en la central hidroeléctrica San Francisco. Después de aceptar las condiciones del gobierno, Odebrecht regresó en 2010 para ejecutar varios proyectos, como el trasvase Daule–Vinces y la central hidroeléctrica Manduriacu. El gobierno ha enfatizado que las auditorías en estos proyectos han sido transparentes y han sido entregados o se encuentran en fase de cierre.",
      source: {
        category: "ORGANIZATION",
        origin: "PUBLIC",
        source: "LOCAL",
        name: "Gobierno Nacional de Ecuador",
      },
    },
    {
      date: "2025-02-23",
      title:
        "El Rol de Odebrecht en Proyectos Hidroeléctricos y el Metro de Quito",
      id: 2,
      confiability: "REALIABLE",
      content:
        "Odebrecht estuvo involucrada en la construcción de importantes proyectos hidroeléctricos, como la central Manduriacu y el trasvase Daule–Vinces, así como en la fase 2 del Metro de Quito. Aunque enfrentó controversias por su historial en el país, ha ejecutado estos contratos tras un proceso de licitación abierta. El gobierno ha asegurado que las auditorías realizadas han sido completas y que los proyectos se han entregado o están en proceso de cierre.",
      source: {
        category: "ORGANIZATION",
        origin: "PUBLIC",
        source: "LOCAL",
        name: "Contraloría General del Estado",
      },
    },
    {
      date: "2025-02-23",
      title:
        "Investigación de Actos de Corrupción en Proyectos Públicos con Odebrecht",
      id: 3,
      confiability: "QUESTIONABLE",
      content:
        "El Departamento de Justicia de los Estados Unidos ha relacionado a Odebrecht con actos de corrupción en varios países, incluyendo Ecuador, entre los años 2007 y 2008. Aunque la empresa ha aceptado su culpabilidad y ha negociado con la justicia estadounidense, el gobierno ecuatoriano ha insistido en que los contratos ejecutados después de 2010 fueron transparentes. La información proveniente de las autoridades estadounidenses ha sido cuestionada por el gobierno de Ecuador, que exige una cooperación más activa en la extradición de prófugos de la justicia ecuatoriana.",
      source: {
        category: "PERSON",
        origin: "PRIVATE",
        source: "INTERNATIONAL",
        name: "Departamento de Justicia de los Estados Unidos",
      },
    },
  ];
  return (
    <SidebarProvider>
      <div className="flex h-screen bg-background">
        <main className="flex-1 overflow-y-auto p-6">
          <div className="mb-6 relative">
            <Input
              type="search"
              placeholder="Search..."
              value={initSearch ?? ""}
              className="w-full pl-10"
              disabled={true}
            />
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
          </div>
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {bentoData.map((card) => (
              <GridItem
                key={card.id}
                icon={confiabilityMatching[card.confiability].icon}
                title={card.title}
                description={card.content}
                type={card.confiability}
                source={card.source}
                url={card.url}
              />
            ))}
          </motion.div>
          <Separator className="my-4" />
          <div className="">
            <h2 className="text-xl font-semibold p-4">
              Quienes estan hablando de esto
            </h2>
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <div className="w-full mx-auto rounded-lg bg-white shadow p-5 text-gray-800 max-w-[400px]">
                <div className="w-full flex mb-4">
                  <div className="overflow-hidden rounded-full w-12 h-12">
                    <img
                      src="https://pbs.twimg.com/profile_images/1699194287706066944/0T-xsUnA_200x200.jpg"
                      alt=""
                    />
                  </div>
                  <div className="flex-grow pl-3">
                    <h6 className="font-bold text-md">Joe Blow</h6>
                    <p className="text-xs text-gray-600">@joe.blow</p>
                  </div>
                  <div className="w-12 text-right">
                    <TwitterLogoIcon className="text-blue-400 text-3xl w-10 h-10" />
                  </div>
                </div>
                <div className="w-full mb-4">
                  <p className="text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Nam obcaecati laudantium recusandae, debitis eum voluptatem
                    ad, illo voluptatibus temporibus odio provident. Laboriosam
                    accusamus necessitatibus tenetur praesentium ullam
                    voluptates nulla reprehenderit? ?
                  </p>
                </div>
                <div className="w-full">
                  <p className="text-xs text-gray-500 text-right">
                    Oct 15th 8:33pm
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </main>

        <Sidebar className="w-1/5 border-l" side="right">
          <SidebarHeader>
            <h2 className="text-xl font-semibold p-4 flex justify-start items-center">
              <img
                src={LogoPrincipal}
                alt="Logo principal VerificIA"
                className="w-10 h-10"
              />{" "}
              Verific
              <span className="text-[#0097A7]">IA</span>
            </h2>
          </SidebarHeader>
          <SidebarContent className="flex flex-col h-full">
            <AnimatePresence>
              <div className="flex-1 overflow-y-auto p-4">
                {messages.map((m) => (
                  <motion.div
                    key={m.id}
                    className={`mb-4 ${
                      m.role === "user" ? "text-right" : "text-left"
                    }`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <span
                      className={`inline-block p-2 rounded-lg ${
                        m.role === "user"
                          ? "bg-[#0097A7] text-primary-foreground "
                          : "bg-muted"
                      }`}
                    >
                      {m.content}
                    </span>
                  </motion.div>
                ))}
              </div>
            </AnimatePresence>
          </SidebarContent>
          <SidebarFooter>
            <form className="p-4 border-t">
              <div className="relative">
                <Input
                  placeholder="Type your message..."
                  className="w-full pr-10"
                />
                <Button
                  type="submit"
                  size="icon"
                  className="absolute right-1 top-1/2 transform -translate-y-1/2"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </form>
          </SidebarFooter>
        </Sidebar>
      </div>
    </SidebarProvider>
  );
};

interface GridItemProps {
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
  type: TConfiability;
  source: IFuente;
  url?: string;
}

const OriginMatch: Record<
  TOrigin,
  {
    inSpanish: string;
  }
> = {
  MIXIN: {
    inSpanish: "Mixta",
  },
  PRIVATE: {
    inSpanish: "Privada",
  },
  PUBLIC: {
    inSpanish: "Pública",
  },
};
const CategoryMatch: Record<
  TCategory,
  {
    inSpanish: string;
  }
> = {
  ORGANIZATION: {
    inSpanish: "Organización",
  },
  PERSON: {
    inSpanish: "Persona",
  },
};

const GridItem = ({
  icon,
  title,
  description,
  type,
  source,
  url,
}: GridItemProps) => {
  return (
    <Dialog>
      <DialogTrigger className="cursor-pointer relative h-full rounded-2.5xl border  p-2  md:rounded-3xl md:p-3 max-w-[400px] max-h-[350px]">
        <div className="hidden bg-[#A8E6A1]"></div>
        <div className="hidden bg-[#FFEB3B]"></div>
        <div className="hidden bg-[#F44336]"></div>
        <GlowingEffect
          blur={0}
          borderWidth={3}
          spread={80}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-0.75 p-6  dark:shadow-[0px_0px_27px_0px_#2D2D2D] md:p-6">
          <div className="relative flex flex-1 flex-col justify-start gap-3">
            <TooltipProvider>
              <Tooltip>
                <div
                  className={
                    "w-fit rounded-lg border border-gray-600 p-2 " +
                    `bg-[${confiabilityMatching[type].color}]`
                  }
                >
                  <TooltipTrigger asChild>{icon}</TooltipTrigger>
                  <TooltipContent>
                    <p>{confiabilityMatching[type].inSpanish}</p>
                  </TooltipContent>
                </div>
              </Tooltip>
            </TooltipProvider>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl/[1.375rem] font-semibold font-sans -tracking-4 md:text-2xl/[1.875rem] text-balance text-black dark:text-white">
                {title}
              </h3>
              <h2
                className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm/[1.125rem] 
              md:text-base/[1.375rem]  text-black dark:text-neutral-400 line-clamp-3"
              >
                {description}
              </h2>
            </div>
          </div>
        </div>
      </DialogTrigger>

      <DialogContent className="p-5">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <div>
            <p className="text-sm text-muted-foreground text-blue-500 hover:underline">
              {url && <a href={url}>{url}</a>}
            </p>
            <p className="text-sm text-muted-foreground text-gray-500">
              Autor: <span className="text-[#0097A7]">{source.name}</span> (
              {CategoryMatch[source.category].inSpanish})
            </p>
            <p className="text-sm text-muted-foreground text-gray-500 mb-4">
              Origen:{" "}
              <span className="text-[#2d2f30]">
                {OriginMatch[source.origin].inSpanish}
              </span>
            </p>
            <DialogDescription>{description}</DialogDescription>
          </div>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default Dashboard;
