import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
// import PropTypes from "prop-types";

import {
  actSortProductHigher,
  actSortProductLower,
  actSortProductFit,
  actAddToCart,
  actFetchProductsRequest,
} from "../../redux/actions/actionProducts";

import ProductList from "../../components/ProductList";
import Fillter from "../../components/Fillter";
import Product from "../../components/Product";
import { useRouteMatch } from "react-router-dom";

export default function ProductsContainer() {
  const {
    fetchProductsSucess,
    fetchProductsPending,
    fetchProductsError,
  } = useSelector((state) => ({
    fetchProductsSucess: state.products.products,
    fetchProductsPending: state.products.pending,
    fetchProductsError: state.products.error,
  }));

  const match = useRouteMatch();

  const dispatch = useDispatch();

  const countProduct = fetchProductsSucess.length;

  const handleSortProduct = (event) => {
    const val = event.target.value;

    val === "higher" && dispatch(actSortProductHigher(fetchProductsSucess));
    val === "lower" && dispatch(actSortProductLower(fetchProductsSucess));
    val === "fit" && dispatch(actSortProductFit(fetchProductsSucess));
  };

  const addToCart = (id) => {
    const product = fetchProductsSucess.filter((product) => product.id === id);
    dispatch(actAddToCart(...product));
  };

  useEffect(() => {
    dispatch(actFetchProductsRequest(match.url, null, null));
  }, []);

  const showProductLis = (products) => {
    let result = null;
    if (!products.length) return;
    result = products.map((product, index) => (
      <Product key={product.id} product={product} addToCart={addToCart} />
    ));
    return result;
  };

  return (
    <>
      <Fillter handleSortProduct={handleSortProduct} count={countProduct} />
      {fetchProductsPending ? (
        <h1>Loading....</h1>
      ) : fetchProductsError ? (
        <h1>Error....</h1>
      ) : (
        <ProductList>{showProductLis(fetchProductsSucess)}</ProductList>
      )}
    </>
  );
}
