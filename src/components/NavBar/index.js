import React from "react";

import CustomLink from "../CustomLink";

export default function NavBar(props) {
  const { menus } = props;
  return menus
    ? menus.map((menu) => (
        <CustomLink
          key={menu.to}
          to={menu.to}
          label={menu.label}
          exact={menu.exact}
        />
      ))
    : "";
}
