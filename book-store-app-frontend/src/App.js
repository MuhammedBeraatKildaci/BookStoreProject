import { useRoutes } from "react-router-dom";
import routePages from "./routes/routePages"

function App() {
  return (
    <>
    {useRoutes(routePages)}
    </>
  );
}

export default App;
