import React from "react";
// import PropTypes from "prop-types";

import "./index.scss";

import Price from "../Price";

import MyButton from "../MyButton";

import LocalMallOutlinedIcon from "@material-ui/icons/LocalMallOutlined";
import { Grid } from "@material-ui/core";
import { Link, useRouteMatch } from "react-router-dom";
export default function Product({ product, addToCart }) {
  const { id, img, name, price, description, category } = product;

  const match = useRouteMatch();

  const linkTo =
    match.url === "/" ? category + "/" + name : match.url + "/" + id;

  return (
    <Grid item xs={12} sm={6} md={3}>
      <div className="product">
        <div className="product__img">
          <Link to={linkTo}>
            <img src={img} alt={name} />
          </Link>
        </div>
        <div className="product__content txt-up">
          <Link to={name}>
            <span className="product__subtitle block">{description}</span>
            <span className="product__name block ">{name}</span>
          </Link>

          <Price className="product__price" price={price} />
          <div style={{ marginTop: "20px" }} onClick={() => addToCart(id)}>
            <MyButton
              txt="chọn mua"
              effect={true}
              icon={<LocalMallOutlinedIcon fontSize="inherit" />}
            ></MyButton>
          </div>
        </div>
      </div>
    </Grid>
  );
}

// Product.propTypes = {
//   product: PropTypes.objectOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       img: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       price: PropTypes.number.isRequired,
//       description: PropTypes.string,
//     })
//   ).isRequired,
//   addToCart: PropTypes.func,
// };
