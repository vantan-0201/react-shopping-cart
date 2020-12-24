import React from "react";

import { products } from "../../data.json";

import ProductList from "../../components/ProductList";
import Fillter from "../../components/Fillter";

export default function HomePage() {
  const [productList, setProductList] = React.useState(products);
  const countProduct = productList.length;

  const handleSortProduct = (event) => {
    const val = event.target.value;

    const sortDecrease = productList.slice().sort((a, b) => {
      return b.price - a.price;
    });
    const sortAscending = productList.slice().sort((a, b) => {
      return a.price - b.price;
    });

    val === "ascending" && setProductList(sortAscending);
    val === "decrease" && setProductList(sortDecrease);
    val === "fit" && setProductList(products);
  };

  return (
    <>
      <Fillter handleSortProduct={handleSortProduct} count={countProduct} />
      <ProductList productList={productList} />
    </>
  );
}
