import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NavBarC from "./components/NavbarC";
import Footer from "./components/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <NavBarC />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/login" element={<Login />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
