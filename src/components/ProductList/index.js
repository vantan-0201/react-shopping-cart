import React from "react";
// import PropTypes from "prop-types";

import Container from "@material-ui/core/Container";
import { Grid } from "@material-ui/core";

function ProductList(props) {
  const { children } = props;

  return (
    <div className="products" style={{ padding: "40px 0px" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {children}
        </Grid>
      </Container>
    </div>
  );
}

// ProductList.propTypes = {
//   productList: PropTypes.array,
//   fetchProductsPending: PropTypes.bool,
//   fetchProductsError: PropTypes.string,
//   addToCart: PropTypes.func,
// };
export default ProductList;
