import { GradienteVector } from "@/shared/infrastructure/images";
import { PrincipalViews } from "../views/PrincipalView";

const PublicLayout = () => {
  return (
    <div className="flex flex-auto flex-col justify-center h-[100vh] w-[100vw] !overflow-hidden relative">
      <img
        alt=""
        src={GradienteVector}
        className="absolute !w-[800px] !h-[500px] top-[-180px] max-w-none left-1/2 transform -translate-x-1/2"
      />

      <div className="w-full !h-full z-30">
        <PrincipalViews />
      </div>

      {/* Un absolute centrado que diga Copyright */}
    </div>
  );
};

export default PublicLayout;

/* <DotPattern
  className={cn(
    "[mask-image:radial-gradient(550px_circle_at_center,white,transparent)]",
    "fill-orange-600/80"
  )}
/> */
