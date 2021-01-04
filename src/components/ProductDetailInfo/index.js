import React from "react";
import "./index.scss";

import TabContext from "@material-ui/lab/TabContext";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import TabPanel from "@material-ui/lab/TabPanel";

import Grid from "@material-ui/core/Grid";

export default function ProductDetilInfo(props) {
  const { detaiInfo } = props;

  React.useEffect(() => {
    let infoLi = "";
    for (let i in detaiInfo) {
      infoLi += `<li class="txt__infos__detail__item">
              ${i} <strong>${detaiInfo[i]}</strong>
            </li>`;
    }
    document.getElementById("details").innerHTML = infoLi;
  }, [detaiInfo]);

  const [valueTab, setValueTab] = React.useState("1");

  const handleChange = (event, newValueTab) => {
    setValueTab(newValueTab);
  };
  return (
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
                  trưởng thành, chín chắn và mong muốn sự tự tin trong những sự
                  kiện quan trọng.
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
                <ul className="txt__infos__detail" id="details"></ul>
              </Grid>
            </Grid>
          </TabPanel>
          <TabPanel value="2">
            <table className="shippingInfo-table">
              <thead>
                <tr>
                  <th>Hình thức vận chuyển</th>
                  <th>Phạm vi</th>
                  <th>Phí vận chuyển</th>
                  <th>Thời gian vận chuyển</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Tiêu chuẩn</td>
                  <td>Toàn quốc</td>
                  <td>
                    <span>
                      - Miễn phí vận chuyển với đơn hàng từ 700,000đ trở lên
                    </span>
                    <br />
                    <span>
                      - 30,000đ với đơn hàng có giá trị thấp hơn 700,000đ
                    </span>
                  </td>

                  <td>
                    <span>- Nội thành Hà Nội: 1-2 ngày</span>
                    <br />
                    <span>- Miền Trung: 3-5 ngày</span>
                    <br />
                    <span>- Miền Nam: 5-7 ngày</span>
                  </td>
                </tr>

                <tr>
                  <td rowSpan="2">Chuyển phát nhanh</td>
                  <td>Nội thành Hà Nội</td>
                  <td>30,000đ</td>
                  <td>
                    4 tiếng kể từ thời gian nhận được điện thoại xác nhận đơn
                    hàng.
                  </td>
                </tr>
                <tr>
                  <td>Các tỉnh, thành phố khác</td>
                  <td>50,000đ</td>
                  <td>3-5 ngày</td>
                </tr>
              </tbody>
            </table>
          </TabPanel>
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
            <p style={{ lineHeight: "24px", fontSize: "15px" }}>
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
  );
}
