// import logo from "./logo.svg";
import React, { Suspense } from "react";
import "./assets/styles/app.scss";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Backdrop } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

import Header from "./components/Header";

import routes from "./routes";

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
        </BrowserRouter>
      </Suspense>
    </div>
  );
}

export default App;
