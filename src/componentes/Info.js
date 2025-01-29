export const Info = (props) => {
  const { llamando } = props;
  {
    /* <!-- El siguiente elemento se oculta añadiéndole la clase "off" --> */
  }
  return (
    <span className={`mensaje ${!llamando ? "off" : ""}`}>Llamando...</span>
  );
};
