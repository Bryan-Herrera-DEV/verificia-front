import { routeMap } from "@/shared/infrastructure/route/mappedRoutes";
import { useNavigate } from "react-router-dom";

interface NavigateByKeyProps {
  routeKey: string;
  params?: Record<string, string>;
}

export const NavigateByKey: React.FC<NavigateByKeyProps> = ({
  routeKey,
  params,
}) => {
  const navigate = useNavigate();

  const handleNavigation = () => {
    const path = routeMap[routeKey];
    if (!path) {
      console.error(`No se encontró la ruta para la clave: ${routeKey}`);
      return;
    }
    const resolvedPath = params
      ? Object.keys(params).reduce(
          (acc, paramKey) => acc.replace(`:${paramKey}`, params[paramKey]),
          path
        )
      : path;

    navigate(resolvedPath);
  };

  return (
    <button onClick={handleNavigation} className="btn-navigate">
      Navegar
    </button>
  );
};
