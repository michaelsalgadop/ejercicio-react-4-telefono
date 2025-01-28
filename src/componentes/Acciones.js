import { useRef } from "react";
import { Accion } from "./Accion";

export const Acciones = (props) => {
  const {
    setOcultarMensaje,
    setAccionTelefono,
    borrarNumero,
    LLAMAR,
    COLGAR,
    accionTelefono,
    botonLlamar,
  } = props;
  const timer = useRef(null);
  // eslint-disable-next-line no-lone-blocks
  {
    /* <!-- El botón de llamar debe tener la clase "activo" cuando -->
      <!-- el número de teléfono tiene 9 cifras --> */
    /* <!-- Sólo se tiene que ver un botón u otro --> */
  }
  const llamar = () => {
    setOcultarMensaje(false);
    setAccionTelefono(COLGAR);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => colgar(), 5000);
  };
  const colgar = () => {
    clearTimeout(timer.current);
    setOcultarMensaje(true);
    setAccionTelefono(LLAMAR);
    borrarNumero();
  };
  return (
    <>
      {accionTelefono === LLAMAR && (
        <Accion
          accion="llamar"
          classes="llamar"
          botonLlamar={botonLlamar}
          accionClick={llamar}
        ></Accion>
      )}

      {accionTelefono === COLGAR && (
        <Accion
          accion="colgar"
          classes="colgar"
          botonLlamar={botonLlamar}
          accionClick={colgar}
        ></Accion>
      )}
    </>
  );
};
