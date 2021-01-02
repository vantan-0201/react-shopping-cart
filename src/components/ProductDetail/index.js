import React, { useEffect } from "react";

import { useRouteMatch } from "react-router-dom";
import "./index.scss";

import Grid from "@material-ui/core/Grid";
import { Rating } from "@material-ui/lab";

import MyButton from "../MyButton";

import { actFetchProductDetailRequest } from "../../redux/actions/actionProductDetail";
import { useSelector, useDispatch } from "react-redux";
import Price from "../Price";
import ProductDetilInfo from "../ProductDetailInfo";

export default function ProductDetail() {
  const dispatch = useDispatch();

  const match = useRouteMatch();

  const {
    fetchProductDetailSucess,
    fetchProductDetailPending,
    // fetchProductDetailError,
  } = useSelector((state) => ({
    fetchProductDetailSucess: state.productDetail.productDetail,
    fetchProductDetailPending: state.productDetail.pending,
    // fetchProductDetailError: state.productDetail.error,
  }));

  const {
    name,
    img,
    price,
    background_img,
    rating,
    rating_count,
    status,
    detaiInfo,
    // imgs_slide,
  } = fetchProductDetailSucess;

  useEffect(() => {
    dispatch(actFetchProductDetailRequest(match.url));
  }, []);

  const styleBackground = {
    backgroundImage: `url(${background_img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  return fetchProductDetailPending ? (
    <h1>Loading....</h1>
  ) : (
    <section id="product__Fulldetail" className="product__Fulldetail">
      <div
        className="productDetail__header position__relative"
        style={styleBackground}
      >
        <Grid container spacing={6} className="productDetail__content">
          <Grid item xs={6} className="productDetail__img">
            <img src={img} alt={name} />
          </Grid>
          <Grid item xs={6}>
            <div className="productDetail__right">
              <h2 className="productDetail__name txt-up">{name}</h2>

              <div className="productDetail__quanlity">
                <Price className="productDetail__price" price={price} />
                <div className="productDetail__rating">
                  <span className="productDetail__ratingNumber">
                    {rating_count} đánh giá
                  </span>
                  <Rating
                    name="disabled"
                    value={rating}
                    precision={0.5}
                    disabled
                    size="large"
                  />
                </div>
              </div>

              <div className="productDetail__status">
                <span className="productDetail__statusCotent">
                  tình trạng:
                  <strong>{status ? "còn hàng" : "hết hàng"}</strong>
                </span>
                <span className="productDetail__size cursor">size guide</span>
              </div>

              <div className="productDetail__sells">
                <p className="productDetail__sells__txt txt-up">
                  <span>ưu đãi</span> cho sự kiện mua kèm:
                </p>
                <div className="productDetail__sells__content flex a-center j-between">
                  <div className="productDetail__sells__item flex a-center">
                    <div className="productDetail__sells__img">
                      <img
                        src="https://curnonwatch.com/media/catalog/product/cache/d96eb53c23516f6ca600411b8495131f/c/u/cuff-jackie-sil-shadow.png?auto=webp&format=png&width=1280&height=1280&fit=cover&method=fit&nocrop=true"
                        alt="img"
                      />
                    </div>
                    <div className="productDetail__sells__info">
                      <h4 className="productDetail__sells__name txt-up">
                        JACKIE SILVER
                      </h4>
                      <span className="productDetail__sells__plusPrice">
                        + 299.000<strong>đ</strong>
                      </span>
                      <button className="productDetail__sells__btn txt-up cursor">
                        thêm
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              <div
                className="flex a-center j-between"
                style={{ marginTop: "40px" }}
              >
                <span style={{ width: "46%" }}>
                  <MyButton fullWidth effect txt="thanh toán" />
                </span>
                <span style={{ width: "46%" }}>
                  <MyButton fullWidth effect txt="thêm vào giỏ" />
                </span>
              </div>
            </div>
          </Grid>
        </Grid>

        <div className="product__detail__imgs position__absolute flex a-center j-center">
          <div className="product__detail__img cursor">
            <img
              src="https://curnonwatch.com/media/catalog/product/b/x/bx.grand.2.jpg?auto=webp&format=pjpg&width=1600&height=1600&fit=cover&method=fit&nocrop=true"
              alt="img"
            />
          </div>
          <div className="product__detail__img cursor">
            <img
              src="https://curnonwatch.com/media/catalog/product/b/x/bx.grand.2.jpg?auto=webp&format=pjpg&width=1600&height=1600&fit=cover&method=fit&nocrop=true"
              alt="img"
            />
          </div>
          <div className="product__detail__img cursor">
            <img
              src="https://curnonwatch.com/media/catalog/product/b/x/bx.grand.2.jpg?auto=webp&format=pjpg&width=1600&height=1600&fit=cover&method=fit&nocrop=true"
              alt="img"
            />
          </div>
        </div>
      </div>

      <ProductDetilInfo detaiInfo={detaiInfo} />
    </section>
  );
}
