import { useState } from "react";

function App() {
  const LLAMAR = 0;
  const COLGAR = 1;
  const teclado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "borrar"];
  const [numeroMarcado, setNumeroMarcado] = useState("");
  const [ocultarMensaje, setOcultarMensaje] = useState(true);
  const [accionTelefono, setAccionTelefono] = useState(LLAMAR);
  const [botonLlamar, setBotonLlamar] = useState(false);
  const marcarNumero = (numero) => {
    if (numeroMarcado.length + 1 === 9) {
      setBotonLlamar(true);
    } else if (numeroMarcado.length === 9) {
      return;
    }
    setNumeroMarcado(numeroMarcado + numero);
  };
  const borrarNumero = () => {
    setNumeroMarcado("");
    setBotonLlamar(false);
  };
  const llamar = () => {
    setOcultarMensaje(false);
    setAccionTelefono(COLGAR);
    setTimeout(() => colgar(), 5000);
  };
  const colgar = () => {
    setOcultarMensaje(true);
    setAccionTelefono(LLAMAR);
    borrarNumero();
  };
  return (
    <div className="contenedor">
      {/* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */}
      <span className={`mensaje ${ocultarMensaje ? "off" : ""}`}>
        Llamando...
      </span>
      <main className="telefono">
        <div className="botones">
          <ol className="teclado">
            {teclado.map((tecla) => {
              const boton =
                tecla === "borrar" ? (
                  <button
                    className="big"
                    onClick={borrarNumero}
                    disabled={accionTelefono === COLGAR ? true : false}
                  >
                    borrar
                  </button>
                ) : (
                  <button
                    onClick={() => marcarNumero(tecla)}
                    disabled={accionTelefono === COLGAR ? true : false}
                  >
                    {tecla}
                  </button>
                );
              return <li key={tecla}>{boton}</li>;
            })}
          </ol>
        </div>
        <div className="acciones">
          <span className="numero">{numeroMarcado}</span>
          {/* <!-- El botón de llamar debe tener la clase "activo" cuando -->
                <!-- el número de teléfono tiene 9 cifras --> */}
          {accionTelefono === LLAMAR && (
            <a
              href="#"
              className={`llamar ${botonLlamar ? "activo" : ""}`}
              onClick={llamar}
            >
              Llamar
            </a>
          )}
          {/* <!-- Sólo se tiene que ver un botón u otro --> */}
          {accionTelefono === COLGAR && (
            <a href="#" className="colgar activo" onClick={colgar}>
              Colgar
            </a>
          )}
        </div>
      </main>
    </div>
  );
}

export default App;
