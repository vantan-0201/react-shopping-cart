import React, { memo } from "react";
import "./index.scss";

import Input from "@material-ui/core/Input";
import DeleteOutlineIcon from "@material-ui/icons/DeleteOutline";
import ArrowDropUpIcon from "@material-ui/icons/ArrowDropUp";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import Price from "../Price";

const CartProduct = memo((props) => {
  const {
    img,
    name,
    price,
    _id,
    countParent,
    handleRemoveToCart,
    handleQuantity,
  } = props;

  const [count, setCount] = React.useState(countParent);

  const handleChangeCount = (e) => {
    if (!Number(e.target.value)) return;
    setCount(Number(e.target.value));
  };

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
              value={count}
              onChange={handleChangeCount}
              disableUnderline
              fullWidth
              style={{ border: "none", fontSize: "14px", width: "34px" }}
            />
            <div className="cartProduct__control flex j-between">
              <button className="cursor" onClick={() => handleQuantity(_id, 1)}>
                <ArrowDropUpIcon />
              </button>
              <button
                className="cursor"
                onClick={() => handleQuantity(_id, -1)}
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
        onClick={(e) => handleRemoveToCart(_id, e)}
      >
        <DeleteOutlineIcon fontSize="large" />
      </span>
    </div>
  );
});

export default CartProduct;
