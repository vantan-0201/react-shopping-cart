import React from "react";
import "./index.scss";
import logoApp from "../../assets/imgs/logoApp.svg";

import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import TitleNav from "../TitleNav";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";

import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";

import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import { actOpenDrawer } from "../../redux/actions/actionProducts";
import NavBar from "../NavBar";

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

export default function Header() {
  const [hasAffix, setHasAffix] = React.useState(false);

  const dispatch = useDispatch();

  const countTotal = useSelector((state) => state.cartProducts.products);

  const handelTotalCount = (products) => {
    return products.reduce(
      (accumulator, currentValue) => accumulator + currentValue.count,
      0
    );
  };

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

  const handelOpenDrawer = (element, event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    )
      return;
    dispatch(actOpenDrawer(element));
  };

  // console.log("header");
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
        alignItems="stretch"
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
            {/* {
            NAV BAR ------------------------------------------
          } */}
            <NavBar menus={menus} />

            {/* {
            NAV BAR END------------------------------------------
          } */}
          </Grid>
        </Hidden>

        <Hidden only={["xl", "lg", "md"]}>
          <Grid item xs={5} className="headerBar__mb">
            <IconButton onClick={(e) => handelOpenDrawer("menuMb", e)}>
              <MenuIcon fontSize="large" />
            </IconButton>
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
          spacing={2}
        >
          <Hidden smDown={true}>
            <Grid
              item
              component="li"
              className="headerBar__item nav__acounts position__relative"
            >
              <h3 className="headerBar__item__title txt-up cursor">
                tài khoản
              </h3>
              <ul className="dropdownAcount">
                <li className="dropdownAcount__item">
                  <Link to="/singin">
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
            className="headerBar__item nav__cart flex a-center cursor"
            onClick={(e) => handelOpenDrawer("cart", e)}
          >
            <Hidden smDown={true}>
              <h3 className="headerBar__item__title txt-up ">giỏ hàng</h3>
            </Hidden>
            <ShoppingCartIcon fontSize="large" />
            <span className="countCart">{handelTotalCount(countTotal)}</span>
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
