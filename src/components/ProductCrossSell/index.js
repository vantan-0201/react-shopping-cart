import React from "react";
import "./index.scss";
import Grid from "@material-ui/core/Grid";

export default function ProductCrossSell() {
  return (
    <div className="ProductCrossSell">
      <p className="ProductCrossSell__txt txt-up">
        <span>ưu đãi</span> cho sự kiện mua kèm:
      </p>
      <Grid
        spacing={2}
        alignItems="center"
        container
        className="ProductCrossSell__content"
      >
        <Grid
          item
          xs={12}
          sm={6}
          container
          className="ProductCrossSell__item"
          alignItems="center"
        >
          <div className="ProductCrossSell__img">
            <img
              src="https://curnonwatch.com/media/catalog/product/cache/d96eb53c23516f6ca600411b8495131f/c/u/cuff-jackie-sil-shadow.png?auto=webp&format=png&width=1280&height=1280&fit=cover&method=fit&nocrop=true"
              alt="img"
            />
          </div>
          <div className="ProductCrossSell__info">
            <h4 className="ProductCrossSell__name txt-up">JACKIE SILVER</h4>
            <span className="ProductCrossSell__plusPrice">
              + 299.000<strong>đ</strong>
            </span>
            <button className="ProductCrossSell__btn txt-up cursor">
              thêm
            </button>
          </div>
        </Grid>
        <Grid
          item
          xs={12}
          sm={6}
          container
          className="ProductCrossSell__item"
          alignItems="center"
        >
          <div className="ProductCrossSell__img">
            <img
              src="https://curnonwatch.com/media/catalog/product/cache/d96eb53c23516f6ca600411b8495131f/c/u/cuff-jackie-sil-shadow.png?auto=webp&format=png&width=1280&height=1280&fit=cover&method=fit&nocrop=true"
              alt="img"
            />
          </div>
          <div className="ProductCrossSell__info">
            <h4 className="ProductCrossSell__name txt-up">JACKIE SILVER</h4>
            <span className="ProductCrossSell__plusPrice">
              + 299.000<strong>đ</strong>
            </span>
            <button className="ProductCrossSell__btn txt-up cursor">
              thêm
            </button>
          </div>
        </Grid>
      </Grid>
    </div>
  );
}
