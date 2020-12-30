import React from "react";
import PropTypes from "prop-types";
import "./index.scss";
import MyButton from "../MyButton";
import Price from "../Price";
import { Link } from "react-router-dom";
import { Divider } from "@material-ui/core";

function CartTotalPrice(props) {
  const { handleCloseCart, products } = props;

  return products ? (
    <div className="cart__totalPrice txt-center">
      <Divider />
      <div className="cart__totalPrice__title flex a-center j-between">
        <h3 className="txt-up">thành tiền</h3>
        <Price price={products} />
      </div>
      <div>
        <Link to="/checkout" onClick={(e) => handleCloseCart("cart", e)}>
          <MyButton fullWidth effect className="" txt="thanh toán" />
        </Link>
      </div>
    </div>
  ) : (
    ""
  );
}

CartTotalPrice.propTypes = {
  toggleDrawer: PropTypes.func,
};

export default CartTotalPrice;
