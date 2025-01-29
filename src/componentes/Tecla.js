import propTypes from "prop-types";
export const Tecla = (props) => {
  const { accion, tecla, llamando } = props;
  return (
    <button onClick={accion} disabled={llamando}>
      {tecla}
    </button>
  );
};
Tecla.propTypes = {
  accion: propTypes.func.isRequired,
  tecla: propTypes.string.isRequired,
  llamando: propTypes.bool.isRequired,
};
