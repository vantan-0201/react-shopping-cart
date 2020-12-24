import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

function Price(props) {
  const { price } = props;

  return <span>{price}</span>;
}

Price.propTypes = {
  price: PropTypes.any.isRequired,
};

export default Price;
