import { Tecla } from "./Tecla";

export const Teclado = (props) => {
  const { llamando, numeroCompleto, numero, setNumero } = props;
  const teclas = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
  const marcarNumero = (numeroTecleado) =>
    !numeroCompleto && setNumero(numero + numeroTecleado);
  return (
    <ol className="teclado">
      {teclas.map((tecla) => (
        <li key={tecla}>
          <Tecla
            accion={() => marcarNumero(tecla)}
            tecla={tecla}
            llamando={llamando}
          ></Tecla>
        </li>
      ))}
      <li>
        <button
          className="big"
          onClick={() => setNumero("")}
          disabled={llamando}
        >
          borrar
        </button>
      </li>
    </ol>
  );
};
