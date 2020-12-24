import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

function MyButton({ txt, effect, sizeL, sizeS, fullWidth, icon }) {
  return (
    <button
      className={`btn txt-up cursor 
      ${effect ? "btn--effect" : ""} 
      ${sizeL ? "btn--sizeL" : ""}
      ${sizeS ? "btn--sizeS" : ""}  
      ${fullWidth ? "fullWidth" : ""}
  `}
    >
      <span className="icon">{icon && icon}</span>
      {txt}
    </button>
  );
}

MyButton.propTypes = {
  txt: PropTypes.string.isRequired,
  effect: PropTypes.bool,
  sizeL: PropTypes.string,
  sizeS: PropTypes.string,
};

export default MyButton;
