import React from "react";

import Select from "@material-ui/core/Select";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";

export default function Fillter(props) {
  const { count, sort, handleSortProduct } = props;
  const useStyle = makeStyles(() => ({
    root: {
      padding: "20px 0",
    },
    fillter__container: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
    },
    fillter__result: {
      fontSize: "14px",
    },
    fillter__selection: {
      fontSize: "13px",
    },
  }));
  const classes = useStyle();

  return (
    <div className={`${classes.root} filter `}>
      <Container maxWidth="lg" className={classes.fillter__container}>
        <div className={classes.fillter__result}>
          {count ? count : 0} Products
        </div>
        <Select
          native
          onChange={handleSortProduct}
          variant="standard"
          className={classes.fillter__selection}
          disableUnderline
          value={sort}
        >
          <option value="fit">SẮP XẾP THEO PHÙ HỢP NHẤT</option>
          <option value="higher">SẮP XẾP THEO GIÁ TĂNG DẦN</option>
          <option value="lower">SẮP XẾP THEO GIÁ GIẢM DẦN</option>
        </Select>
      </Container>
    </div>
  );
}
