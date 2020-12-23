import React from "react";
import "./index.scss";
import PropTypes from "prop-types";

import CartProductList from "../CartProductList";
import MyButton from "../MyButton";
import Price from "../Price";

import Divider from "@material-ui/core/Divider";
import CloseIcon from "@material-ui/icons/Close";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";

import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";

const products = [
  {
    img:
      "https://curnonwatch.com/media/catalog/product/cache/d96eb53c23516f6ca600411b8495131f/p/a/paul.png?auto=webp&format=png&width=2560&height=2560&fit=cover&method=fit&nocrop=true",
    name: "paul",
    price: "2.200.000",
    _id: 1,
  },
  {
    img:
      "https://curnonwatch.com/media/catalog/product/cache/d96eb53c23516f6ca600411b8495131f/p/a/paul.png?auto=webp&format=png&width=2560&height=2560&fit=cover&method=fit&nocrop=true",
    name: "paul",
    price: "2.200.000",
    _id: 2,
  },
  {
    img:
      "https://curnonwatch.com/media/catalog/product/cache/d96eb53c23516f6ca600411b8495131f/p/a/paul.png?auto=webp&format=png&width=2560&height=2560&fit=cover&method=fit&nocrop=true",
    name: "paul",
    price: "2.200.000",
    _id: 3,
  },
  {
    img:
      "https://curnonwatch.com/media/catalog/product/cache/d96eb53c23516f6ca600411b8495131f/p/a/paul.png?auto=webp&format=png&width=2560&height=2560&fit=cover&method=fit&nocrop=true",
    name: "paul",
    price: "2.200.000",
    _id: 4,
  },
];

export default function Cart(props) {
  const { isOpen } = props;

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
        <CartProductList products={products} />

        <div className="cart__totalPrice txt-center">
          <Divider />
          <div className="cart__totalPrice__title flex a-center j-between">
            <h3 className="txt-up">thành tiền</h3>
            <Price price={2000000} />
          </div>
          <div>
            <MyButton fullWidth effect className="" txt="thanh toán"></MyButton>
          </div>
        </div>
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
