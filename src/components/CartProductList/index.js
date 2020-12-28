import React, { memo } from "react";
import "./index.scss";
import CartProduct from "../CartProduct";
import MyButton from "../MyButton";

const CartProductList = memo((props) => {
  const { toggleDrawer, products, handleRemoveToCart, handleQuantity } = props;

  return (
    <div className="CartsList" onClick={(e) => e.stopPropagation()}>
      {products.length ? (
        products.map((product, index) => (
          <CartProduct
            img={product.img}
            name={product.name}
            price={product.price}
            key={index}
            countParent={product.count}
            _id={product._id}
            handleRemoveToCart={handleRemoveToCart}
            handleQuantity={handleQuantity}
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
});

export default CartProductList;
