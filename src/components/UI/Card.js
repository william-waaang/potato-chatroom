import PropTypes from "prop-types";
import classes from "./Card.module.css";

const Card = (props) => {
  return (
    <div className={`${classes.card} + ${props.className}`}>
      {props.children}
    </div>
  );
};

Card.propTypes = {
  children: PropTypes.array,
  className: PropTypes.string,
};

export default Card;
