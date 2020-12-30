import React, { useEffect } from "react";

import { useParams } from "react-router-dom";
import "./index.scss";

import Grid from "@material-ui/core/Grid";
import { Rating } from "@material-ui/lab";
import TabContext from "@material-ui/lab/TabContext";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "@material-ui/lab/TabPanel";
import MyButton from "../MyButton";

import { actFetchProductDetailRequest } from "../../redux/actions/actionProducts";
import { useSelector, useDispatch } from "react-redux";

export default function ProductDetail() {
  const [valueTab, setValueTab] = React.useState("1");
  const dispatch = useDispatch();

  const param = useParams();
  const {
    fetchProductDetailSucess,
    fetchProductDetailPending,
    // fetchProductDetailError,
  } = useSelector((state) => ({
    fetchProductDetailSucess: state.productDetail.productDetail,
    fetchProductDetailPending: state.productDetail.pending,
    // fetchProductDetailError: state.productDetail.error,
  }));

  const { name, img, price } = fetchProductDetailSucess;

  const handleChange = (event, newValueTab) => {
    setValueTab(newValueTab);
  };
  useEffect(() => {
    dispatch(actFetchProductDetailRequest(param.product));
  }, []);

  return fetchProductDetailPending ? (
    <h1>Loading....</h1>
  ) : (
    <section id="product__Fulldetail" className="product__Fulldetail">
      <div
        className="productDetail__header position__relative"
        style={{
          background:
            "url('https://curnonwatch.com/media/catalog/product/0/5/05_blackgold_2_2.jpg?auto=png&format=pjpg&width=1920&height=1280&fit=cover&quality=100&method=fit&nocrop=true') no-repeat center",
          backgroundSize: "cover",
        }}
      >
        <Grid container spacing={6} className="productDetail__content">
          <Grid item xs={6} className="productDetail__img">
            <img
              src="https://curnonwatch.com/media/catalog/product/p/a/paul.png?auto=webp&format=png&width=2560&height=2560&fit=cover&method=fit&nocrop=true"
              alt="img"
            />
          </Grid>
          <Grid item xs={6}>
            <div className="productDetail__right">
              <h2 className="productDetail__name txt-up">{name}</h2>

              <div className="productDetail__quanlity">
                <span className="productDetail__price">{price}</span>
                <div className="productDetail__rating">
                  <span className="productDetail__ratingNumber">
                    20 đánh giá
                  </span>
                  <Rating
                    name="disabled"
                    value={3}
                    precision={0.5}
                    disabled
                    size="large"
                  />
                </div>
              </div>

              <div className="productDetail__status">
                <span className="productDetail__statusCotent">
                  tình trạng: <strong>còn hàng</strong>
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

      <div className="product__Fulldetail__info">
        <div className="product__Fulldetail__info__container">
          <TabContext value={valueTab}>
            <Tabs
              onChange={handleChange}
              value={valueTab}
              indicatorColor="primary"
              textColor="primary"
              variant="fullWidth"
              className="product__Fulldetail__info__tab__list"
            >
              <Tab
                value="1"
                className="product__Fulldetail__info__tab__label"
                label="CHI TIẾT THÔNG SỐ KĨ THUẬT"
              />
              <Tab
                value="2"
                className="product__Fulldetail__info__tab__label"
                label="phương thức vận chuyển"
              />
              <Tab
                value="3"
                className="product__Fulldetail__info__tab__label"
                label="chính sách đổi trả"
              />
              <Tab
                value="4"
                className="product__Fulldetail__info__tab__label"
                label="phương thức thanh toán"
              />
            </Tabs>
            <TabPanel value="1">
              <Grid container spacing={4}>
                <Grid item xs={6}>
                  <h1 className="txt-up product__Fulldetail__info__title">
                    đồng hồ thời trang name Kashmir Grand
                  </h1>
                  <p className="product__Fulldetail__info__desc">
                    Kết hợp giữa mặt xanh độc đáo và dây da đen sang trọng, đồng
                    hồ Kashmir Grand chính là lựa chọn cho những người đàn ông
                    trưởng thành, chín chắn và mong muốn sự tự tin trong những
                    sự kiện quan trọng.
                  </p>
                  <ul className="txt__infos">
                    <li className="txt__info">
                      <strong>chất liệu vỏ:</strong>Thép không gỉ 316L - là tiêu
                      chuẩn của một chiếc đồng hồ cao cấp, giúp đồng hồ của bạn
                      bền bỉ với thời gian
                    </li>
                  </ul>
                </Grid>
                <Grid item xs={6}>
                  <ul className="txt__infos__detail">
                    <li className="txt__infos__detail__item">
                      Kích thước mặt <strong>40mm</strong>
                    </li>
                    <li className="txt__infos__detail__item">
                      Kích thước mặt <strong>40mm</strong>
                    </li>
                  </ul>
                </Grid>
              </Grid>
            </TabPanel>
            <TabPanel value="2">Item Two</TabPanel>
            <TabPanel value="3">
              <h1 className="txt-up product__Fulldetail__info__title">
                1 ĐỔI 1 TRONG VÒNG 3 NGÀY
              </h1>
              <p>
                Kể từ khi nhận hàng đối với những sản phẩm &nbsp;
                <strong>Đồng Hồ</strong>
              </p>
              <h1 className="txt-up condition__txt">điều kiện đổi</h1>
              <ul className="condition__list">
                <li className="condition__item">
                  Mặt đồng hồ và đáy còn nguyên seal, chưa có dấu hiệu sử dụng,
                  không bị xước hay có các tác động vật lý.
                </li>
              </ul>
            </TabPanel>
            <TabPanel value="4">
              <p style={{ lineHeight: "24px" }}>
                Curnon cung cấp các phương thức thanh toán an toàn, bạn có thể
                chọn thanh toán bằng{" "}
                <strong>
                  tiền mặt sau khi nhận hàng, ví điện tử Momo, cổng thanh toán
                  VNPAY hoặc chuyển khoản trực tiếp
                </strong>
                &nbsp; cho chúng tôi.
              </p>
            </TabPanel>
          </TabContext>
        </div>
      </div>
    </section>
  );
}
