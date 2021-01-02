import React from "react";
import "./index.scss";

import Input from "@material-ui/core/Input";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Price from "../Price";

const CartProduct = (props) => {
  const {
    product,
    handleRemoveToCart,
    handleQuantity,
    handleChangeCount,
    handleKeyUp,
  } = props;

  const { img, name, price, count, id } = product;

  // console.log("cart product");

  return (
    <div
      className="cartProduct flex a-center"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="cartProduct__img">
        <img src={img} alt={name} />
      </div>
      <div className="cartProduct__info">
        <h3 className="cartProduct__name">{name}</h3>
        <div className="cartProduct__quantity flex a-center">
          <div
            style={{
              display: "flex",
              border: "1px solid rgba(0, 0, 0, 0.8)",
              height: "40px",
            }}
          >
            <Input
              className="cartProduct__amount"
              type="text"
              value={count}
              onChange={(e) => handleChangeCount(id, e)}
              onKeyDown={(e) => handleKeyUp(id, e)}
              disableUnderline
              fullWidth
              style={{ border: "none", fontSize: "14px", width: "34px" }}
            />
            <div className="cartProduct__control flex j-between">
              <button
                className="cursor"
                onClick={() => handleQuantity(id, true)}
              >
                <ArrowDropUpIcon />
              </button>
              <button
                className="cursor"
                onClick={() => handleQuantity(id, false)}
              >
                <ArrowDropDownIcon />
              </button>
            </div>
          </div>

          <Price price={price} className="cartProduct__price" />
        </div>
      </div>
      <span
        className="cartProduct__delete cursor"
        onClick={(e) => handleRemoveToCart(id, e)}
      >
        <DeleteOutlineIcon fontSize="large" />
      </span>
    </div>
  );
};

export default CartProduct;
