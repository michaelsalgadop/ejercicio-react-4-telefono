import { useEffect, useRef } from "react";
import { Accion } from "./Accion";
import propTypes from "prop-types";
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

  useEffect(() => {
    if (llamando) {
      // Si se activa "llamar", inicia el timeout para colgar
      timer.current = setTimeout(() => colgar(), 5000);
    } else {
      // Si "colgar" se ejecuta, limpia el timeout
      clearTimeout(timer.current);
    }

    return () => clearTimeout(timer.current); // Limpieza en cada renderizado
  }, [llamando]);

  const llamar = (e) => {
    e.preventDefault();
    setLlamando(true);
  };

  const colgar = (e) => {
    if (e) e.preventDefault(); // Para evitar errores si se llama sin evento
    clearTimeout(timer.current); // Limpia el timeout antes de colgar
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

Acciones.propTypes = {
  setLlamando: propTypes.func.isRequired,
  setNumero: propTypes.func.isRequired,
  llamando: propTypes.bool.isRequired,
  numeroCompleto: propTypes.bool.isRequired,
};
