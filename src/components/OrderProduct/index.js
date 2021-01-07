import React from "react";
import Price from "../../components/Price";
import "./index.scss";

export default function OrderProduct(props) {
  const { name, img, price, count } = props;
  return (
    <li className="orders__product flex a-center ">
      <div className="orders__product__img position__relative">
        <img src={img} alt={name} />
        <span className="count__orders position__absolute">{count}</span>
      </div>
      <div className="orders__product__info">
        <h3 className="orders__product__name txt-up">{name}</h3>
        <h6 className="ordes__product__category txt-up">hamliton-32mm</h6>
      </div>
      <Price className="orders__product__price" price={price} />
    </li>
  );
}
