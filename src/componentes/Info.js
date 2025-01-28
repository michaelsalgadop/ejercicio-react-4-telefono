export const Info = (props) => {
  const { ocultarMensaje } = props;
  {
    /* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */
  }
  return (
    <span className={`mensaje ${ocultarMensaje ? "off" : ""}`}>
      Llamando...
    </span>
  );
};
