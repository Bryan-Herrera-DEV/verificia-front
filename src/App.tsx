import { ConfigContainer } from "./core/config/ConfigContainer";
import { PrincipalLayout } from "./shared/application/components/layout/PrincipalLayout";

function App() {
  return (
    <ConfigContainer>
      <PrincipalLayout />
    </ConfigContainer>
  );
}

export default App;
