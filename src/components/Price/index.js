import React from "react";
import PropTypes from "prop-types";
import "./index.scss";

function Price(props) {
  const { price } = props;
  const formatPrice = price.toLocaleString("vi", {
    style: "currency",
    currency: "VND",
  });
  return price ? <span>{formatPrice}</span> : "";
}

Price.propTypes = {
  price: PropTypes.any.isRequired,
};

export default Price;
