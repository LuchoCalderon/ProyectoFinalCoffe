import {  Routes, Route } from "react-router-dom";
import Navbar from './NavBar.jsx'
import Bebidas from "../views/Bebidas.jsx";
import Contacto from "../views/Contacto.jsx";
import CrearBebida from "./CrearBebida.jsx";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Bebidas />} />
        <Route path="/crear-bebida" element={<CrearBebida/>}></Route>
        <Route path="contacto" element={<Contacto />} />
        {/* pagina 404 */}
        <Route path="*" element={<h3> Page not found 404 </h3>} />
      </Routes>
    </>
  );
}

export default App;