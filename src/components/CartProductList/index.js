import React from "react";
import "./index.scss";
import CartProduct from "../CartProduct";
import MyButton from "../MyButton";

import { formatCurrency } from "../../util";

import { useDispatch } from "react-redux";

import { actRemoveToCart } from "../../redux/actions/actionProducts";

export default function CartProductList(props) {
  const { products, toggleDrawer } = props;
  const dispatch = useDispatch();

  const handleCount = (e) => {
    // console.log(e);
  };

  const handleRemoveToCart = (_id) => {
    dispatch(actRemoveToCart(_id));
  };

  return (
    <div className="CartsList">
      {products.length ? (
        products.map((product, index) => (
          <CartProduct
            img={product.img}
            name={product.name}
            price={formatCurrency(product.price)}
            key={index}
            count={1}
            _id={index}
            handleCount={handleCount}
            handleRemoveToCart={handleRemoveToCart}
          />
        ))
      ) : (
        <div className="cart__empty txt-center item-center">
          <h2 className="txt-up">
            hiện tại chưa có sản phẩm nào trong giỏ hàng của bạn
          </h2>
          <div onClick={(e) => toggleDrawer("cart", false, e)}>
            <MyButton txt="tiếp tục mua sản phẩm" effect />
          </div>
        </div>
      )}
    </div>
  );
}
