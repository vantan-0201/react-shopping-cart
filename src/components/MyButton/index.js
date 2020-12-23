import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

function MyButton({ txt, effect, sizeL, sizeS, fullWidth }) {
  return (
    <button
      className={`btn txt-up cursor 
      ${effect ? "btn--effect" : ""} 
      ${sizeL ? "btn--sizeL" : ""}
      ${sizeS ? "btn--sizeS" : ""}  
      ${fullWidth ? "fullWidth" : ""}
  `}
    >
      {txt}
    </button>
  );
}

MyButton.propTypes = {
  txt: PropTypes.string.isRequired,
  effect: PropTypes.string,
  sizeL: PropTypes.string,
  sizeS: PropTypes.string,
};

export default MyButton;
