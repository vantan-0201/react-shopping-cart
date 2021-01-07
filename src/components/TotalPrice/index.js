import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import Price from "../Price";

function TotalPrice(props) {
  const { totalPrice } = props;

  return totalPrice ? (
    <div className="totalPrice txt-center">
      <div className="totalPrice__title flex a-center j-between">
        <h3 className="txt-up">thành tiền</h3>
        <Price price={totalPrice} />
      </div>
    </div>
  ) : (
    ""
  );
}

TotalPrice.propTypes = {
  totalPrice: PropTypes.number,
};

export default TotalPrice;
