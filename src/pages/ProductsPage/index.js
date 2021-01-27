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
import Loading from "../../components/Loading";
import NotFound from "../../components/NotFound";

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
    dispatch(actFetchProductsRequest(null, null));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [match.url]);

  const showProductLis = (products) => {
    let result = null;
    if (!products.length) return;
    result = products.map((product) => (
      <Product key={product.id} product={product} addToCart={addToCart} />
    ));
    return result;
  };

  const fillterCollectionProducts = (products, category) => {
    if (!products) return;
    return products.filter((product) => `/${product.category}` === category);
  };
  const countProduct = fillterCollectionProducts(fetchProductsSucess, match.url)
    .length;

  return (
    <>
      {fetchProductsPending ? (
        <Loading />
      ) : fetchProductsError ? (
        <NotFound />
      ) : (
        <>
          <Fillter handleSortProduct={handleSortProduct} count={countProduct} />
          <ProductList>
            {showProductLis(
              fillterCollectionProducts(fetchProductsSucess, match.url)
            )}
          </ProductList>
        </>
      )}
    </>
  );
}
