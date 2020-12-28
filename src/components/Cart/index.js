import React from "react";
import "./index.scss";
import PropTypes from "prop-types";
import { useSelector, useDispatch } from "react-redux";

import {
  actRemoveToCart,
  actAddToCart,
  actRemoveToOneCart,
} from "../../redux/actions/actionProducts";

import CartProductList from "../CartProductList";
import MyButton from "../MyButton";
import Price from "../Price";

import Divider from "@material-ui/core/Divider";
import CloseIcon from "@material-ui/icons/Close";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";

export default function Cart(props) {
  const { isOpen } = props;
  const dispatch = useDispatch();

  const cartProducts = useSelector((state) => state.cartProducts.products);

  const handleTotalPrice = (products) => {
    return products.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * currentValue.count,
      0
    );
  };

  const handleRemoveToCart = (_id) => {
    dispatch(actRemoveToCart(_id));
  };

  const handleQuantity = (_id, count) => {
    const product = cartProducts.filter((product) => product._id === _id);
    if (count) {
      dispatch(actAddToCart(...product));
    }
    if (!count) {
      dispatch(actRemoveToOneCart(...product));
    }
  };

  const toggleDrawer = (element, open, e) => {
    e.stopPropagation();
    props.toggleDrawer && props.toggleDrawer(element, open, e);
  };

  const CartContent = () => (
    <div className="cart" id="cart">
      <div className="cartHeader">
        <h2 className="cartHeader__title txt-up">giỏ hàng của bạn</h2>
        <IconButton
          onClick={(e) => toggleDrawer("cart", false, e)}
          style={{ justifyContent: "flex-end" }}
          className="cart__icon"
        >
          <CloseIcon fontSize="large" />
        </IconButton>
        <Divider className="divider" />
      </div>

      <div className="cart__content position__relative flex a-center j-between">
        <CartProductList
          products={cartProducts}
          toggleDrawer={toggleDrawer}
          handleRemoveToCart={handleRemoveToCart}
          handleQuantity={handleQuantity}
        />

        {cartProducts.length ? (
          <div className="cart__totalPrice txt-center">
            <Divider />
            <div className="cart__totalPrice__title flex a-center j-between">
              <h3 className="txt-up">thành tiền</h3>
              <Price price={handleTotalPrice(cartProducts)} />
            </div>
            <div>
              <MyButton
                fullWidth
                effect
                className=""
                txt="thanh toán"
              ></MyButton>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>

      <div className="cart__footer flex j-between">
        <div className="cart__service flex a-center">
          <span className="service__icon">
            <VerifiedUserIcon />
          </span>
          <h3 className="service__text txt-up">
            Bảo hành 10 năm lỗi nhà sản xuất
          </h3>
        </div>
        <div className="cart__service flex a-center">
          <span className="service__icon">
            <LocalShippingIcon />
          </span>
          <h3 className="service__text txt-up">
            Bảo hành 10 năm lỗi nhà sản xuất
          </h3>
        </div>
      </div>
    </div>
  );

  Cart.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    toggleDrawer: PropTypes.func.isRequired,
  };

  return (
    <Drawer
      anchor="right"
      open={isOpen}
      onClose={(e) => toggleDrawer("cart", false, e)}
    >
      <CartContent />
    </Drawer>
  );
}
