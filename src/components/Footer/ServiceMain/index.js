import React from "react";
import "./index.scss";
import { Grid, Container } from "@material-ui/core";
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import LocalShippingIcon from "@material-ui/icons/LocalShipping";
import StarsIcon from "@material-ui/icons/Stars";

const services = [
  {
    text: "BẢO HÀNH 10 NĂM LỖI NHÀ SẢN XUẤT",
    icon: <VerifiedUserIcon />,
  },
  {
    text: "FREESHIP VỚI ĐƠN HÀNG TỪ 700.000 VND",
    icon: <LocalShippingIcon />,
  },
  {
    text: "CAM KẾT 100% HÀNG CHÍNH HÃNG",
    icon: <StarsIcon />,
  },
];

export default function ServiceMain() {
  return (
    <div className="service__main">
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          {services &&
            services.map((service) => (
              <Grid
                item
                xs={12}
                sm={4}
                className="service__item flex a-center"
                key={service.text}
              >
                <span className="service__icon">{service.icon}</span>
                <h3 className="service__text txt-up">{service.text}</h3>
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
}
