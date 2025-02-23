import {
    Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/shared/application/components/ui/table";


export default function EvaluationTable() {
  return (
    <div className="container mx-auto p-4">
      <Table>
        <TableHeader>
          <TableRow className="bg-gray-100">
            <TableHead className="font-semibold">Criterio</TableHead>
            <TableHead className="font-semibold">Fuente Confiable</TableHead>
            <TableHead className="font-semibold">Fuente Dudosa</TableHead>
            <TableHead className="font-semibold">Fuente No Confiable</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {criteria.map((criterion, index) => (
            <TableRow
              key={index}
              className={index % 2 === 0 ? "bg-gray-50" : ""}
            >
              <TableCell className="font-medium">{criterion.name}</TableCell>
              <TableCell className="border-l-4 border-green-200">
                {criterion.reliable}
              </TableCell>
              <TableCell className="border-l-4 border-yellow-200">
                {criterion.questionable}
              </TableCell>
              <TableCell className="border-l-4 border-red-200">
                {criterion.unreliable}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

const criteria = [
  {
    name: "Autenticidad de la Fuente",
    reliable: "Autor o institución reconocida, trayectoria sólida.",
    questionable: "Autor o institución poco conocida, información incompleta.",
    unreliable: "Sin autor identificado o instituciones cuestionadas.",
  },
  {
    name: "Transparencia en la Información",
    reliable: "Detalles claros sobre el proceso de obtención de información.",
    questionable:
      "Información parcial o sin suficiente detalle sobre la obtención de datos.",
    unreliable:
      "No se mencionan fuentes o procesos de obtención de información.",
  },
  {
    name: "Verificabilidad",
    reliable:
      "La información puede ser contrastada con otras fuentes confiables.",
    questionable:
      "La información no puede ser verificada fácilmente, falta de referencias.",
    unreliable: "Información sin respaldo o datos no verificables.",
  },
  {
    name: "Neutralidad y Objetividad",
    reliable: "Presenta información imparcial, sin sesgos evidentes.",
    questionable: "Contiene indicios de sesgo o manipulación.",
    unreliable: "Información sesgada, agenda política o comercial evidente.",
  },
  {
    name: "Actualización y Relevancia",
    reliable: "Información reciente y relevante para el tema tratado.",
    questionable: "Información desactualizada o con poco contexto.",
    unreliable: "Información antigua o irrelevante para el tema actual.",
  },
  {
    name: "Reputación y Trayectoria",
    reliable: "Fuente con buena reputación y antecedentes verificables.",
    questionable: "Fuente con antecedentes dudosos o desconocidos.",
    unreliable: "Fuente con antecedentes de desinformación o mala práctica.",
  },
  {
    name: "Consistencia con otras Fuentes",
    reliable: "Información consistente con múltiples fuentes verificables.",
    questionable: "Contradicciones o inconsistencias con fuentes confiables.",
    unreliable:
      "Información incompatible o contradictoria con fuentes confiables.",
  },
];
