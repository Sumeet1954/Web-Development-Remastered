import "./App.css";
import Nav from "./assets/components/Nav.jsx";
import Home from "./assets/components/Home.jsx";
import Footer from "./assets/components/Footer.jsx";
function App() {
  return (
    <>
      <div id="main">
        <Nav />
        <Home />
        <Footer/>
      </div>
    </>
  );
}

export default App;
