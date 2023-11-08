import { useTheme } from "@utils/hooks/useTheme";
import Routing from "../../../../router-service-public";

function PublicLayout() {
  const theme = useTheme();
  return (
    <div className={theme}>
      <Routing />
    </div>
  );
}

export default PublicLayout;
