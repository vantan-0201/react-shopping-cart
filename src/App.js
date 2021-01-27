// import logo from "./logo.svg";
import React, { Suspense } from "react";
import "./assets/styles/app.scss";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import Header from "./components/Header";

import routes from "./routes";
import { PrivateRoute } from "./components/PrivateRoute";
import Footer from "./components/Footer";
import CheckOutPage from "./pages/CheckOutPage/index";

import Cart from "./Containers/Cart/index.js";
import HeaderBarLeftMB from "./components/HeaderBarLeftMB";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Cart />
        <HeaderBarLeftMB />
        <div className="mainPage">
          <Switch>
            <PrivateRoute path="/checkout" exact component={CheckOutPage} />
            {routes.length &&
              routes.map((route, index) => (
                <Route
                  path={route.path}
                  exact={route.exact}
                  component={route.main}
                  key={index}
                />
              ))}
          </Switch>
        </div>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
