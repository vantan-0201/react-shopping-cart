import React from "react";
import "./index.scss";
import { Link, Route } from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import TitleNav from "../TitleNav";

export default function CustomLink(props) {
  const { to, label, exact, classNameNav } = props;
  return (
    <Route
      path={`/${to}`}
      exact={exact}
      children={({ match }) => {
        const activeLink = match ? "activeLink" : "";

        return (
          <Grid
            item
            component="li"
            className={`${activeLink} ${
              classNameNav ? classNameNav : ""
            } menuBar `}
          >
            <Link to={`/${to}`} className={`${activeLink} menuLink`}>
              <TitleNav text={label} />
            </Link>
          </Grid>
        );
      }}
    />
  );
}
