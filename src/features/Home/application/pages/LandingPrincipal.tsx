import { Button } from "@/shared/application/components/ui/button";
import { useNavigate } from "react-router-dom";

const LandingPrincipal = () => {
  const navigate = useNavigate();

  const redirectTo = () => {
    navigate("/auth/register");
  };
  return (
    <div className="relative isolate overflow-hidden py-8 h-full flex flex-col justify-end items-center">
      <div className="mx-auto max-w-2xl">
        <div className="text-center space-y-32">
          <h1 className="!font-filonsoft text-5xl font-bold tracking-tight text-balance text-[#00BECD] sm:text-7xl">
            Arendes,
            <br /> Ganas
          </h1>
          <p className="mt-36 text-sm font-medium text-pretty text-[#000]">
            Tu escuela no lo enseña, pero aquí sí 💵📚. <br />
            Domina el dinero y gana de verdad!
          </p>

          <div className="w-full">
            <Button onClick={redirectTo} className="w-full rounded-xl font-semibold" variant={'minoGradient'}>¡Empecemos!</Button>
            <p className="text-gray-400 font-light">Si ya tienes cuenta {" "} <a href="/auth/register" className="cursor-pointer text-[#00BECD] hover:underline">Inicia Sesión</a></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPrincipal;
