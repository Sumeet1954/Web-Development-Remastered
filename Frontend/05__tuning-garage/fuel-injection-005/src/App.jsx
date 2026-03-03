import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import { GlobalProvider } from "./context/GlobalContext";
const App = () => {
  return (
    <GlobalProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </GlobalProvider>
  );
};

export default App;
