import { Tecla } from "./Tecla";

export const Teclado = (props) => {
  const {
    numeroMarcado,
    setBotonLlamar,
    setNumeroMarcado,
    borrarNumero,
    accionTelefono,
    COLGAR,
  } = props;
  const teclado = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, "borrar"];
  const marcarNumero = (numero) => {
    if (numeroMarcado.length + 1 === 9) {
      setBotonLlamar(true);
    } else if (numeroMarcado.length === 9) {
      return;
    }
    setNumeroMarcado(numeroMarcado + numero);
  };
  return (
    <ol className="teclado">
      {teclado.map((tecla) => (
        <li key={tecla}>
          <Tecla
            tecla={tecla}
            borrarNumero={borrarNumero}
            accionTelefono={accionTelefono}
            COLGAR={COLGAR}
            marcarNumero={marcarNumero}
          ></Tecla>
        </li>
      ))}
    </ol>
  );
};
