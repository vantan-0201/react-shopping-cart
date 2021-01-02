import React from "react";
import ProductsContainer from "./Containers/ProductsContainer/index.js";
import ProductDetail from "./components/ProductDetail/index.js";
const HomePage = React.lazy(() => import("./pages/HomePage/index.js"));
const CheckOutPage = React.lazy(() => import("./pages/CheckOutPage/index.js"));

const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/checkout",
    exact: false,
    main: () => <CheckOutPage />,
  },
  {
    path: "/dong-ho/:id",
    exact: true,
    main: () => <ProductDetail />,
  },

  {
    path: "/dong-ho",
    exact: true,
    main: () => <ProductsContainer />,
  },

  {
    path: "/phu-kien/:id",
    exact: false,
    main: () => <ProductDetail />,
  },

  {
    path: "/phu-kien",
    exact: false,
    main: () => <ProductsContainer />,
  },

  {
    path: "",
    exact: false,
    main: () => <h1>Not fount</h1>,
  },
];

export default routes;
