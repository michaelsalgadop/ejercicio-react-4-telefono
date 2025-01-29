import { useRef } from "react";
import { Accion } from "./Accion";

// eslint-disable-next-line no-lone-blocks
{
  /* <!-- El botón de llamar debe tener la clase "activo" cuando -->
<!-- el número de teléfono tiene 9 cifras --> 
<!-- Sólo se tiene que ver un botón u otro -->
*/
}
export const Acciones = (props) => {
  const { setLlamando, setNumero, llamando, numeroCompleto } = props;
  const timer = useRef(null);

  const llamar = (e) => {
    e.preventDefault();
    setLlamando(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => colgar(e), 5000);
  };
  const colgar = (e) => {
    e.preventDefault();
    clearTimeout(timer.current);
    setLlamando(false);
    setNumero("");
  };
  return (
    <>
      {!llamando ? (
        <Accion
          accion="llamar"
          numeroCompleto={numeroCompleto}
          callbackClick={llamar}
        ></Accion>
      ) : (
        <Accion
          accion="colgar"
          numeroCompleto={numeroCompleto}
          callbackClick={colgar}
        ></Accion>
      )}
    </>
  );
};
