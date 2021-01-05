import React from "react";
import "./index.scss";
import { Grid } from "@material-ui/core";

export default function ProductDetailImgs({
  imgsProduct,
  handelOpenModalImg,
  alt,
}) {
  return (
    <div className="productDetail__imgs position__absolute">
      <Grid
        container
        spacing={2}
        alignItems="center"
        justify="center"
        component="ul"
      >
        {imgsProduct
          ? imgsProduct.map((img, index) => {
              return (
                <Grid component="li" item xs={4} sm={"auto"} key={index}>
                  <div
                    className="productDetail__img cursor"
                    onClick={(e) => handelOpenModalImg(index, e)}
                  >
                    <img src={img} alt={alt} />
                  </div>
                </Grid>
              );
            })
          : ""}
      </Grid>
    </div>
  );
}
