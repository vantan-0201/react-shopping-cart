import React from "react";
import "./index.scss";

import img_momo from "../../../assets/imgs/momo.png";
import img_vnpay from "../../../assets/imgs/vnpay.png";
import img_bct from "../../../assets/imgs/bct.png";

import { Container, Grid } from "@material-ui/core";

export default function Credits() {
  return (
    <div className="credits" id="credits">
      <Container maxWidth="lg">
        <Grid
          container
          className="credit__wrap"
          spacing={4}
          justify="space-between"
        >
          <Grid item xs={12} md={6} className="credit__content">
            <p className="credit__copyRight txt-up">
              © 2019 - Bản quyền của CTCP PHÁT TRIỂN SẢN PHẨM SÁNG TẠO VIỆT
            </p>
            <p className="credit__text">
              Giấy chứng nhận ĐKKD số 0108150321 do Sở Kế hoạch và Đầu tư Thành
              phố Hà Nội cấp ngày 29/01/2018 123C Thụy Khuê, Tây Hồ, Hà Nội
            </p>
          </Grid>
          <Grid
            item
            container
            alignItems="center"
            xs={12}
            md={6}
            className="credit__imgs"
            spacing={4}
          >
            <Grid item className="credit__img">
              <a href="/" className="credit__img__link">
                <img src={img_momo} alt="credit__img__momo" />
              </a>
            </Grid>
            <Grid item className="credit__img">
              <a href="/" className="credit__img__link">
                <img src={img_vnpay} alt="credit__img__vnpay" />
              </a>
            </Grid>
            <Grid item className="credit__img">
              <a href="/" className="credit__img__link">
                <img src={img_bct} alt="credit__img__bct" />
              </a>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
