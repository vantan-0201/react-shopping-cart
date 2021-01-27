import React from "react";
import HomePage from "./pages/HomePage/index.js";

import ProductDetailPage from "./pages/ProductDetailPage/index.js";
import NotFound from "./components/NotFound/index.js";
import ProductsPage from "./pages/ProductsPage/index.js";
import Singin from "./pages/Singin/index";
import Register from "./pages/Register/index";
import ForgotPassword from "./pages/ForgotPassword/index";
const routes = [
  {
    path: "/",
    exact: true,
    main: () => <HomePage />,
  },
  {
    path: "/singin",
    exact: false,
    main: () => <Singin />,
  },
  {
    path: "/register",
    exact: false,
    main: () => <Register />,
  },
  {
    path: "/forgot-password",
    exact: false,
    main: () => <ForgotPassword />,
  },

  {
    path: "/:products/:id",
    exact: false,
    main: () => <ProductDetailPage />,
  },
  {
    path: "/phu-kien",
    exact: false,
    main: () => <ProductsPage />,
  },
  {
    path: "/dong-ho",
    exact: false,
    main: () => <ProductsPage />,
  },

  {
    path: "",
    exact: false,
    main: () => <NotFound />,
  },
];

export default routes;
