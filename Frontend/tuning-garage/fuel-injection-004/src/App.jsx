import Nav from "./components/Nav.jsx";
import AppRoutes from "./routes/AppRoutes.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <>
      <Nav />
      <AppRoutes />
    </>
  );
};

export default App;
