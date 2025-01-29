import propTypes from "prop-types";
export const Display = (props) => {
  const { numero } = props;

  return <span className="numero">{numero}</span>;
};
Display.propTypes = {
  numero: propTypes.string.isRequired,
};
