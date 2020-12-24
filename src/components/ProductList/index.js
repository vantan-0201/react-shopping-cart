import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";
import { actAddToCart } from "../../redux/actions/actionProducts";

import Product from "../Product";
import { formatCurrency } from "../../util";

import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";

function ProductList(props) {
  const { productList } = props;
  const dispatch = useDispatch();

  const addToCart = (id) => {
    const product = productList.filter((product) => product._id === id);
    dispatch(actAddToCart(product));
  };

  return (
    <div className="products" style={{ padding: "40px 0px" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {productList.length ? (
            productList.map((product) => (
              <Grid item xs={3} key={product._id}>
                <Product
                  addToCart={addToCart}
                  _id={product._id}
                  name={product.name}
                  img={product.img}
                  availableSizes={product.availableSizes}
                  description={product.description}
                  price={formatCurrency(product.price)}
                />
              </Grid>
            ))
          ) : (
            <h1>khong co san pham nao</h1>
          )}
        </Grid>
      </Container>
    </div>
  );
}

ProductList.propTypes = {
  productList: PropTypes.array,
};

export default ProductList;
