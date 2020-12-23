import React from "react";
import "./index.scss";
import CartProduct from "../CartProduct";
import MyButton from "../MyButton";
export default function CartProductList(props) {
  const { products } = props;
  return (
    <div className="CartProductList">
      {products.length ? (
        products.map((product) => (
          <CartProduct
            img={product.img}
            name={product.name}
            price={product.price}
            key={product._id}
          />
        ))
      ) : (
        <div className="cart__empty txt-center item-center">
          <h2 className="txt-up">
            hiện tại chưa có sản phẩm nào trong giỏ hàng của bạn
          </h2>
          <MyButton txt="tiếp tục mua sản phẩm" effect />
        </div>
      )}
    </div>
  );
}
