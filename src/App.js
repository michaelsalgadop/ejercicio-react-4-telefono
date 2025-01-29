import { useState } from "react";
import { Info } from "./componentes/Info";
import { Teclado } from "./componentes/Teclado";
import { Display } from "./componentes/Display";
import { Acciones } from "./componentes/Acciones";

function App() {
  const [numero, setNumero] = useState("");
  const [llamando, setLlamando] = useState(false);
  const numeroCompleto = numero.length === 9;
  return (
    <div className="contenedor">
      <Info llamando={llamando}></Info>
      <main className="telefono">
        <div className="botones">
          <Teclado
            llamando={llamando}
            numeroCompleto={numeroCompleto}
            numero={numero}
            setNumero={setNumero}
          ></Teclado>
        </div>
        <div className="acciones">
          <Display numero={numero}></Display>
          <Acciones
            setLlamando={setLlamando}
            setNumero={setNumero}
            llamando={llamando}
            numeroCompleto={numeroCompleto}
          ></Acciones>
        </div>
      </main>
    </div>
  );
}

export default App;
