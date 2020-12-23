import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

function TitleNav({ text, icon, sizeM }) {
  return (
    <h3 className={`titleNav ${sizeM ? "titleNav--sizeM" : ""}`}>
      {text && text}
      {icon && icon}
    </h3>
  );
}

TitleNav.propTypes = {
  text: PropTypes.string.isRequired,
};

export default TitleNav;
