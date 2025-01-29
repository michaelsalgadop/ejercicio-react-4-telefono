import propTypes from "prop-types";

export const Accion = (props) => {
  const { accion, numeroCompleto, callbackClick } = props;
  return (
    <a
      href={accion}
      className={`${accion} ${numeroCompleto && "activo"}`}
      onClick={callbackClick}
    >
      {accion.charAt(0).toUpperCase() + accion.slice(1)}
    </a>
  );
};
Accion.propTypes = {
  accion: propTypes.string.isRequired,
  numeroCompleto: propTypes.bool.isRequired,
  callbackClick: propTypes.func.isRequired,
};
