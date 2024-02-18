import { string, func, array } from "prop-types";

import "./button.scss";

const Button = ({ text, onClick, style }) => {
  return (
    <button style={{...style}} onClick={onClick} className="button">
      {text}
    </button>
  );
};

Button.propTypes = {
  text: string,
  onClick: func,
  style: array,
};
export default Button;
