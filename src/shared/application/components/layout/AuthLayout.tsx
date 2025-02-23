import { PrincipalViews } from "../views/PrincipalView";

const AuthLayout = () => {
  return (
    <div className="flex flex-auto flex-col h-[100vh] w-[100vw]">
      <PrincipalViews />
    </div>
  );
};
export default AuthLayout;
