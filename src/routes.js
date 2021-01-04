import React from "react";
const HomePage = React.lazy(() => import("./pages/HomePage/index.js"));
const CheckOutPage = React.lazy(() => import("./pages/CheckOutPage/index.js"));
const ProductDetailPage = React.lazy(() =>
  import("./pages/ProductDetailPage/index.js")
);
const NotFound = React.lazy(() => import("./components/NotFound/index.js"));
const ProductsPage = React.lazy(() => import("./pages/ProductsPage/index.js"));
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
    path: "/:products/:id",
    exact: false,
    main: () => <ProductDetailPage />,
  },
  {
    path: "/:products",
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
