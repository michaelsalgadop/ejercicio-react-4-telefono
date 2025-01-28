export const Accion = (props) => {
  const { accion, botonLlamar, accionClick, classes } = props;
  return (
    <a
      href="#"
      className={`${classes} ${botonLlamar ? "activo" : ""}`}
      onClick={accionClick}
    >
      {accion.charAt(0).toUpperCase() + accion.slice(1).toLowerCase()}
    </a>
  );
};
