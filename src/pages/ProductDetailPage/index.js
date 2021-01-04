import React, { useEffect } from "react";

import { useRouteMatch, Link } from "react-router-dom";
import "./index.scss";
import ProductDetailImgs from "../../components/ProductDetailImgs";
import SlideProductImgs from "../../components/SlideProductImgs";

import Grid from "@material-ui/core/Grid";
import { Rating } from "@material-ui/lab";

import MyButton from "../../components/MyButton";

import { actFetchProductDetailRequest } from "../../redux/actions/actionProductDetail";
import { useSelector, useDispatch } from "react-redux";
import Price from "../../components/Price";
// import ProductDetilInfo from "../ProductDetailInfo";
import Loading from "../../components/Loading";
import NotFound from "../../components/NotFound";

import { actAddToCart } from "../../redux/actions/actionProducts";

function ProductDetailPage() {
  const dispatch = useDispatch();

  const match = useRouteMatch();

  const {
    fetchProductDetailSucess,
    fetchProductDetailPending,
    fetchProductDetailError,
  } = useSelector((state) => ({
    fetchProductDetailSucess: state.productDetail.productDetail,
    fetchProductDetailPending: state.productDetail.pending,
    fetchProductDetailError: state.productDetail.error,
  }));

  const ref_slideShow = React.useRef();

  const addToCart = () => {
    dispatch(actAddToCart(fetchProductDetailSucess));
  };

  const {
    name,
    img,
    price,
    background_img,
    rating,
    rating_count,
    status,
    detaiInfo,
    imgs_slide,
  } = fetchProductDetailSucess;

  const styleBackground = {
    backgroundImage: `url(${background_img})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
  };

  const handelOpenModalImg = (index, e) => {
    document.getElementById("modal__imgs").classList.add("show");
    ref_slideShow.current.slickGoTo(index);

    const scrollY = document.documentElement.style.getPropertyValue(
      "--scroll-y"
    );

    const body = document.body;
    body.style.position = "fixed";
    body.style.top = `-${scrollY}`;
  };

  useEffect(() => {
    dispatch(actFetchProductDetailRequest(match.url));
  }, []);

  return fetchProductDetailPending ? (
    <Loading />
  ) : fetchProductDetailError ? (
    <NotFound />
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
                  <Link to="/checkout">
                    <MyButton fullWidth effect txt="thanh toán" />
                  </Link>
                </span>
                <span style={{ width: "46%" }} onClick={addToCart}>
                  <MyButton fullWidth effect txt="thêm vào giỏ" />
                </span>
              </div>
            </div>
          </Grid>
        </Grid>

        <ProductDetailImgs
          imgsProduct={imgs_slide}
          handelOpenModalImg={handelOpenModalImg}
          alt={name}
        />
      </div>

      <SlideProductImgs
        imgsProduct={imgs_slide}
        ref_slideShow={ref_slideShow}
        alt={name}
      />

      {/* <ProductDetilInfo detaiInfo={detaiInfo} /> */}
    </section>
  );
}

export default ProductDetailPage;
