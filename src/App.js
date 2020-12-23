// import logo from "./logo.svg";
import React, { Suspense } from "react";
import "./assets/styles/app.scss";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { Backdrop } from "@material-ui/core";
import CircularProgress from "@material-ui/core/CircularProgress";

import Header from "./components/Header";

const HomePage = React.lazy(() => import("./pages/HomePage/index.js"));

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
          <div className="main" id="main">
            <Switch>
              <Route path="/" exact>
                <HomePage />
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
