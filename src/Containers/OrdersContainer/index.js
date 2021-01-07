import React from "react";
import "./index.scss";
import { useSelector, useDispatch } from "react-redux";
import TotalPrice from "../../components/TotalPrice";
import OrderProduct from "../../components/OrderProduct";
import { actOpenDrawer } from "../../redux/actions/actionProducts";

const renderOrderProducts = (orderProducts) => {
  let result;
  if (!orderProducts.length) return;
  result = orderProducts.map((order) => (
    <OrderProduct
      id={order.id}
      img={order.img}
      name={order.name}
      price={order.price}
      key={order.id}
      count={order.count}
    />
  ));
  return result;
};

const handleTotalPrice = (products) => {
  return products.reduce(
    (accumulator, currentValue) =>
      accumulator + currentValue.price * Number(currentValue.count),
    0
  );
};

export default function OrdersContainer() {
  const dispatch = useDispatch();

  const orderProducts = useSelector((state) => state.cartProducts.products);

  return (
    <div className="orders">
      <h2 className="orders__title txt-up flex a-center j-between">
        đơn hàng
        <span
          className="orders__edit cursor"
          onClick={() => dispatch(actOpenDrawer("cart"))}
        >
          sửa
        </span>
      </h2>
      <h4 className="orders__productsHeader txt-up flex a-center j-between">
        sản phẩm
        <span>giá</span>
      </h4>
      <ul className="orders__products">{renderOrderProducts(orderProducts)}</ul>
      <TotalPrice totalPrice={handleTotalPrice(orderProducts)} />
    </div>
  );
}
