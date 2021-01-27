import React from "react";

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

export default Price;
