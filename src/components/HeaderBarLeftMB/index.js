import React from "react";

import TitleNav from "../TitleNav";

import { Link } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import Drawer from "@material-ui/core/Drawer";
import CloseIcon from "@material-ui/icons/Close";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

const navLinks = [
  {
    text: "đồng hồ nam",
    link: "/dong-ho-nam",
  },
  {
    text: "đồng hồ nữ",
    link: "/dong-ho-nu",
  },
  {
    text: "thương hiệu",
    link: "/about",
  },
  {
    text: "đăng nhập",
    link: "/sigin",
  },
  {
    text: "đăng ký",
    link: "/register",
  },
];

const useStyes = makeStyles({
  menuList: {
    minWidth: "400px",
  },
});

function HeaderBarLeftMB(props) {
  const { isOpen } = props;
  const classes = useStyes();

  const toggleDrawer = (el, open, e) => {
    props.toggleDrawer && props.toggleDrawer(el, open, e);
  };

  const MenuList = () => (
    <List
      onClick={(e) => toggleDrawer("menuMb", false, e)}
      onKeyDown={(e) => toggleDrawer("menuMb", false, e)}
      style={{ minWidth: "320px" }}
    >
      {navLinks.map((item) => (
        <ListItem key={item.text}>
          <Link to={item.link}>
            <TitleNav sizeM text={item.text} />
          </Link>
        </ListItem>
      ))}
    </List>
  );

  return (
    <Drawer
      anchor="left"
      open={isOpen}
      onClose={(e) => toggleDrawer("menuMb", false, e)}
      className={`HeaderMb ${classes.menuList}`}
    >
      <IconButton
        onClick={(e) => toggleDrawer("menuMb", false, e)}
        style={{ justifyContent: "flex-start" }}
      >
        <CloseIcon fontSize="large" />
      </IconButton>
      <MenuList />
    </Drawer>
  );
}

export default HeaderBarLeftMB;
