import { Link } from "react-router-dom";

function App() {
  return (
    <>
      <nav>
        <h3>Cofee Shop</h3>
        <Link className="boton" to="/">Principal</Link>
        <Link className="boton" to="contacto">Contacto</Link>
      </nav>
    </>
  );
}

export default App;
