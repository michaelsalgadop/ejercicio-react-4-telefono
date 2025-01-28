import { useState } from "react";
import { Info } from "./componentes/Info";
import { Display } from "./componentes/Display";
import { Acciones } from "./componentes/Acciones";
import { Teclado } from "./componentes/Teclado";

function App() {
  const LLAMAR = 0;
  const COLGAR = 1;
  const [numeroMarcado, setNumeroMarcado] = useState("");
  const [ocultarMensaje, setOcultarMensaje] = useState(true);
  const [accionTelefono, setAccionTelefono] = useState(LLAMAR);
  const [botonLlamar, setBotonLlamar] = useState(false);
  const borrarNumero = () => {
    setNumeroMarcado("");
    setBotonLlamar(false);
  };
  return (
    <div className="contenedor">
      <Info ocultarMensaje={ocultarMensaje}></Info>
      <main className="telefono">
        <div className="botones">
          <Teclado
            numeroMarcado={numeroMarcado}
            setBotonLlamar={setBotonLlamar}
            setNumeroMarcado={setNumeroMarcado}
            borrarNumero={borrarNumero}
            accionTelefono={accionTelefono}
            COLGAR={COLGAR}
          ></Teclado>
        </div>
        <div className="acciones">
          <Display numeroMarcado={numeroMarcado}></Display>
          <Acciones
            setOcultarMensaje={setOcultarMensaje}
            setAccionTelefono={setAccionTelefono}
            borrarNumero={borrarNumero}
            LLAMAR={LLAMAR}
            COLGAR={COLGAR}
            accionTelefono={accionTelefono}
            botonLlamar={botonLlamar}
          ></Acciones>
        </div>
      </main>
    </div>
  );
}

export default App;
