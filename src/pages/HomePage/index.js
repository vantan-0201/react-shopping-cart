import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  actSortProductHigher,
  actSortProductLower,
  actSortProductFit,
} from "../../redux/actions/actionProducts";

// import { products } from "../../data.json";

import ProductList from "../../components/ProductList";
import Fillter from "../../components/Fillter";

export default function HomePage() {
  const {
    fetchProductsSucess,
    fetchProductsPending,
    fetchProductsError,
  } = useSelector((state) => ({
    fetchProductsSucess: state.products.products,
    fetchProductsPending: state.products.pending,
    fetchProductsError: state.products.error,
  }));

  const dispatch = useDispatch();

  const countProduct = fetchProductsSucess.length;

  const handleSortProduct = (event) => {
    const val = event.target.value;

    val === "higher" && dispatch(actSortProductHigher(fetchProductsSucess));
    val === "lower" && dispatch(actSortProductLower(fetchProductsSucess));
    val === "fit" && dispatch(actSortProductFit(fetchProductsSucess));
  };

  return (
    <>
      <Fillter handleSortProduct={handleSortProduct} count={countProduct} />
      <ProductList productList={fetchProductsSucess} />
    </>
  );
}
