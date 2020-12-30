// import logo from "./logo.svg";
import React, { Suspense } from "react";
import "./assets/styles/app.scss";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Backdrop } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

import Header from "./components/Header";
import ProductDetail from "./components/ProductDetail";

const HomePage = React.lazy(() => import("./pages/HomePage/index.js"));
const CheckOutPage = React.lazy(() => import("./pages/CheckOutPage/index.js"));
const Cart = React.lazy(() => import("./Containers/Cart/index.js"));
const HeaderBarLeftMB = React.lazy(() =>
  import("./components/HeaderBarLeftMB")
);

function App() {
  return (
    <div className="App">
      <Suspense
        fallback={
          <Backdrop open={true}>
            <CircularProgress color="inherit" />
          </Backdrop>
        }
      >
        <BrowserRouter>
          <Header />
          <Cart />
          <HeaderBarLeftMB />
          <div className="mainPage">
            <Switch>
              <Route path="/" exact>
                <HomePage />
              </Route>
              <Route path="/checkout" exact>
                <CheckOutPage />
              </Route>

              <Route path="/:product">
                <ProductDetail />
              </Route>
              <Route path="/*">
                <div>Not Found</div>
              </Route>
            </Switch>
          </div>
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
