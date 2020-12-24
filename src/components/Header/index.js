import React from "react";
import "./index.scss";
import logoApp from "../../assets/imgs/logoApp.svg";

import HeaderBarLeftMB from "../HeaderBarLeftMB";

import { Link, NavLink } from "react-router-dom";

import TitleNav from "../TitleNav";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import Cart from "../Cart";

import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";

export default function Header() {
  const [hasAffix, setHasAffix] = React.useState(false);

  const [isOpen, setIsOpen] = React.useState({
    menuMb: false,
    cart: false,
  });

  React.useEffect(() => {
    window.onscroll = () => {
      let a = window.pageYOffset;

      const elHeader = document.getElementById("app-header");
      const offSet = elHeader.offsetHeight;
      if (a >= offSet) {
        setHasAffix(true);
      } else {
        setHasAffix(false);
      }
    };
  }, []);

  const toggleDrawer = (element, open, event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    setIsOpen({
      ...isOpen,
      [element]: open,
    });
  };

  return (
    <header
      className="app-header"
      id="app-header"
      style={
        hasAffix
          ? {
              backgroundColor: "#F5F5F5",
              boxShadow: "0 1px rgba(0,0,0,0.4)",
            }
          : { backgroundColor: "var(--color-white)" }
      }
    >
      <Grid
        container
        justify="space-between"
        alignItems="center"
        className="headerBar position__relative"
      >
        <Hidden smDown={true}>
          <Grid
            item
            xs={5}
            container
            className="headerBar__left"
            component="ul"
          >
            <Grid item component="li" className="headerBar__item">
              <NavLink
                activeStyle={{ color: "red" }}
                to="/dong-ho-nam"
                className="navLink"
              >
                <TitleNav text="đồng hồ nam" />
              </NavLink>
            </Grid>
            <Grid item component="li" className="headerBar__item">
              <NavLink
                activeStyle={{ color: "red" }}
                to="/dong-ho-nu"
                className="navLink"
              >
                <TitleNav text="đồng hồ nữ" />
              </NavLink>
            </Grid>
            <Grid item component="li" className="headerBar__item">
              <NavLink
                activeStyle={{ color: "red" }}
                to="/about"
                className="navLink"
              >
                <TitleNav text="thương hiệu" />
              </NavLink>
            </Grid>
          </Grid>
        </Hidden>

        <Hidden only={["xl", "lg", "md"]}>
          <Grid item xs={5} className="headerBar__mb">
            <IconButton onClick={(e) => toggleDrawer("menuMb", true, e)}>
              <MenuIcon fontSize="large" />
            </IconButton>
            <HeaderBarLeftMB
              isOpen={isOpen["menuMb"]}
              toggleDrawer={toggleDrawer}
            />
          </Grid>
        </Hidden>

        <div className="logoApp item-center">
          <Link to="/">
            <img src={logoApp} alt="logo-app" />
          </Link>
        </div>
        <Grid
          item
          xs={5}
          alignItems="center"
          justify="flex-end"
          container
          className="headerBar__right"
          component="ul"
        >
          <Hidden smDown={true}>
            <Grid
              item
              component="li"
              className="headerBar__item nav__acounts position__relative"
            >
              <TitleNav triangle text="tài khoản" />
              <ul className="dropdownAcount">
                <li className="dropdownAcount__item">
                  <Link to="/acount">
                    <TitleNav sizeM text="đăng nhập" />
                  </Link>
                </li>
                <li className="dropdownAcount__item">
                  <Link to="/register">
                    <TitleNav sizeM text="đăng ký" />
                  </Link>
                </li>
              </ul>
            </Grid>
          </Hidden>
          <Grid
            item
            component="li"
            className="headerBar__item nav__cart"
            onClick={(e) => toggleDrawer("cart", true, e)}
          >
            <TitleNav
              text="giỏ hàng"
              icon={<ShoppingCartIcon fontSize="large" />}
            />
            <Cart toggleDrawer={toggleDrawer} isOpen={isOpen["cart"]} />
          </Grid>
          <Hidden smDown={true}>
            <Grid item component="li" className="headerBar__item nav__search">
              <SearchIcon fontSize="large" />
            </Grid>
          </Hidden>
        </Grid>
      </Grid>
    </header>
  );
}
