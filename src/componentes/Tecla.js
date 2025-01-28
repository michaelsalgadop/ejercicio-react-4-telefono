export const Tecla = (props) => {
  const { tecla, borrarNumero, accionTelefono, COLGAR, marcarNumero } = props;
  return (
    <>
      {tecla === "borrar" && (
        <button
          className="big"
          onClick={borrarNumero}
          disabled={accionTelefono === COLGAR ? true : false}
        >
          borrar
        </button>
      )}
      {tecla !== "borrar" && (
        <button
          onClick={() => marcarNumero(tecla)}
          disabled={accionTelefono === COLGAR ? true : false}
        >
          {tecla}
        </button>
      )}
    </>
  );
};
