import React from "react";
import "./index.scss";

import { Grid, Container } from "@material-ui/core";
import { Link } from "react-router-dom";
import NavBar from "../../NavBar";
import CustomLink from "../../CustomLink";

const menus = [
  {
    label: "đồng hồ",
    exact: false,
    to: "/dong-ho",
  },
  {
    label: "phụ kiện",
    exact: false,
    to: "/phu-kien",
  },
  {
    label: "blog",
    exact: false,
    to: "/blog",
  },
  {
    label: "chính sách của chúng tôi",
    exact: false,
    to: "/chinh-sach-bao-mat",
  },
  {
    label: "tuyển dụng",
    exact: false,
    to: "/tuyen-dung",
  },
];

export default function NavigationFooter() {
  return (
    <div className="navigation__footer">
      <Container maxWidth="lg">
        <Grid
          component="ul"
          container
          spacing={2}
          justify="center"
          className="navigation__footer__container"
        >
          {menus &&
            menus.map((menu) => (
              <CustomLink
                key={menu.label}
                to={menu.to}
                label={menu.label}
                exact={menu.exact}
              />
            ))}
        </Grid>
      </Container>
    </div>
  );
}
