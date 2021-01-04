import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import { formatCurrency } from "../../util";

function Price(props) {
  const { price, className } = props;

  return (
    <span className={className ? className : ""}>
      {price && formatCurrency(price)}
    </span>
  );
}

Price.propTypes = {
  price: PropTypes.any.isRequired,
};

export default Price;
