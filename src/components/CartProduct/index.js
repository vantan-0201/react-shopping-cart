import React from "react";
import "./index.scss";
import Input from "@material-ui/core/Input";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
export default function CartProduct(props) {
  const { img, name, price } = props;
  return (
    <div className="cartProduct flex a-center j-between">
      <div className="cartProduct__img">
        <img src={img} alt={name} />
      </div>
      <div className="cartProduct__info">
        <h3 className="cartProduct__name">{name}</h3>
        <div className="cartProduct__control">
          <Input
            type="number"
            className="cartProduct__amount"
            disableUnderline
          />
          <span className="cartProduct__price">
            {price}
            <strong>đ</strong>
          </span>
        </div>
      </div>
      <span className="cartProduct__delete cursor">
        <DeleteOutlineIcon fontSize="large" />
      </span>
    </div>
  );
}
