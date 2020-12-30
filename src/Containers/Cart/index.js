import React from "react";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";

import CartProductList from "../../components/CartProductList";

import Divider from "@material-ui/core/Divider";
import CloseIcon from "@material-ui/icons/Close";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import CartTotalPrice from "../../components/CartTotalPrice";

import {
  actRemoveToCart,
  actAddToCart,
  actRemoveToOneCart,
  actChangeCountCart,
  actCloseDrawer,
  actRemoveCountCart,
} from "../../redux/actions/actionProducts";

function Cart() {
  const dispatch = useDispatch();

  const isOpenCart = useSelector((state) => state.isOpenDrawer.cart);
  const products = useSelector((state) => state.cartProducts.products);

  const handleCloseCart = (element, e) => {
    e.stopPropagation();
    dispatch(actCloseDrawer(element));
  };

  const handleChangeCount = (_id, e) => {
    if (!Number(e.target.value)) return;
    const product = products.filter((product) => product._id === _id);
    dispatch(actChangeCountCart(...product, Number(e.target.value)));
  };

  const handleRemoveToCart = (_id) => {
    dispatch(actRemoveToCart(_id));
  };

  const handleQuantity = (_id, count) => {
    const product = products.filter((product) => product._id === _id);
    count && dispatch(actAddToCart(...product));
    !count && dispatch(actRemoveToOneCart(...product));
  };

  const handleTotalPrice = (products) => {
    return products.reduce(
      (accumulator, currentValue) =>
        accumulator + currentValue.price * Number(currentValue.count),
      0
    );
  };
  const handleKeyUp = (_id, e) => {
    if (!Number(e.target.value)) return;
    if (e.which !== 8) return;
    const product = products.filter((product) => product._id === _id);
    dispatch(actRemoveCountCart(...product));
    if (!product[0].count) {
      setTimeout(() => {
        dispatch(actRemoveToCart(_id));
      }, 3000);
    }
  };
  // console.log("cart");

  return (
    <Drawer
      anchor="right"
      open={isOpenCart}
      onClose={(e) => handleCloseCart("cart", e)}
    >
      <div className="cart" id="cart" onClick={(e) => e.stopPropagation()}>
        <div className="cartHeader">
          <h2 className="cartHeader__title txt-up">giỏ hàng của bạn</h2>
          <IconButton
            onClick={(e) => handleCloseCart("cart", e)}
            style={{ justifyContent: "flex-end" }}
            className="cart__icon"
          >
            <CloseIcon fontSize="large" />
          </IconButton>
          <Divider className="divider" />
        </div>

        <div className="cart__content position__relative flex a-center j-between">
          <CartProductList
            handleCloseCart={handleCloseCart}
            handleRemoveToCart={handleRemoveToCart}
            handleQuantity={handleQuantity}
            handleChangeCount={handleChangeCount}
            products={products}
            handleKeyUp={handleKeyUp}
          />

          <CartTotalPrice
            handleCloseCart={handleCloseCart}
            products={handleTotalPrice(products)}
          />
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
    </Drawer>
  );
}

export default Cart;
