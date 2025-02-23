import { useTranslation } from "react-i18next";
import { HeroHighlight } from "../ui/hero-highlight";
import { PrincipalViews } from "../views/PrincipalView";
import { LogoPrincipal } from "@/shared/infrastructure/images";

const PublicLayout = () => {
  const currentYear = new Date().getFullYear();
  const { t } = useTranslation();
  return (
    <div className="flex flex-auto flex-col  justify-center h-[100vh] w-[100vw]">
      <div className="absolute top-[25px] right-[25px] z-50 cursor-pointer">
        <img src={LogoPrincipal} className="w-14 h-14" />
      </div>
      <HeroHighlight className="w-full !h-full z-30">
        <PrincipalViews />
      </HeroHighlight>

      {/* Un absolute centrado que diga Copyright */}
      <div className="absolute bottom-[25px] w-full text-center text-xs">
        <span className="text-gray-300">
          © {currentYear} - {t("commonSystemKeys.copyrigth")}
        </span>{" "}
        <span className="text-gray-400">| VerificIA</span>
      </div>
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
