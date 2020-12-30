import React from "react";
import "./index.scss";
import CartProduct from "../CartProduct";
import MyButton from "../MyButton";

const CartProductList = (props) => {
  const {
    handleRemoveToCart,
    products,
    handleChangeCount,
    handleCloseCart,
    handleQuantity,
  } = props;

  console.log("cart list");

  return (
    <div className="CartsList" onClick={(e) => e.stopPropagation()}>
      {products.length ? (
        products.map((product, index) => (
          <CartProduct
            key={index}
            product={product}
            handleRemoveToCart={handleRemoveToCart}
            handleQuantity={handleQuantity}
            handleChangeCount={handleChangeCount}
            // handleKeyDown={handleKeyDown}
          />
        ))
      ) : (
        <div className="cart__empty txt-center item-center">
          <h2 className="txt-up">
            hiện tại chưa có sản phẩm nào trong giỏ hàng của bạn
          </h2>
          <div onClick={(e) => handleCloseCart("cart", e)}>
            <MyButton txt="tiếp tục mua sản phẩm" effect />
          </div>
        </div>
      )}
    </div>
  );
};

export default CartProductList;
