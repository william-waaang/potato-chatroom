import classes from "./Button.module.css";
import PropTypes from "prop-types";

const Button = (props) => {
  return (
    <button
      onClick={props.onClick}
      className={`${classes.button} + ${props.className}`}
    >
      {props.children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.string,
  onClick: PropTypes.func,
  className: PropTypes.string,
};

export default Button;
