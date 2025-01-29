export const Tecla = (props) => {
  const { accion, tecla, llamando } = props;
  return (
    <button onClick={accion} disabled={llamando}>
      {tecla}
    </button>
  );
};
