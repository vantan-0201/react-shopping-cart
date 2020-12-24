import React from "react";
import "./index.scss";

import MyButton from "../MyButton";

import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import { Link } from "react-router-dom";
export default function Product(props) {
  const { _id, img, name, price, description, addToCart } = props;
  return (
    <div className="product">
      <div className="product__img">
        <Link to={name}>
          <img src={img} alt={name} />
        </Link>
      </div>
      <div className="product__content txt-up">
        <Link to={name}>
          <span className="product__subtitle block">{description}</span>
          <span className="product__name block ">{name}</span>
        </Link>
        <p className="product__price">{price}</p>
        <div style={{ marginTop: "20px" }} onClick={() => addToCart(_id)}>
          <MyButton
            txt="chọn mua"
            effect={true}
            icon={<LocalMallOutlinedIcon fontSize="inherit" />}
          ></MyButton>
        </div>
      </div>
    </div>
  );
}
