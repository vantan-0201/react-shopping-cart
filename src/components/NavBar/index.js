import React from "react";
import "./index.scss";
import CustomLink from "../CustomLink";

const menus = [
  {
    to: "dong-ho",
    label: "đồng hồ",
    exact: false,
  },
  {
    to: "phu-kien",
    label: "phụ kiện",
    exact: false,
  },
  {
    to: "about",
    label: "thương hiệu",
    exact: false,
  },
];

export default function NavBar() {
  return (
    menus.length &&
    menus.map((menu) => (
      <CustomLink
        key={menu.to}
        to={menu.to}
        label={menu.label}
        exact={menu.exact}
      />
    ))
  );
}
