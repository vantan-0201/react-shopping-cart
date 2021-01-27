import React from "react";
import "./index.scss";

import img_1 from "../../../assets/imgs/community_1.jpg";
import img_2 from "../../../assets/imgs/community_2.jpg";
import img_3 from "../../../assets/imgs/community_3.jpg";

import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import YouTubeIcon from "@material-ui/icons/YouTube";

import Grid from "@material-ui/core/Grid";
import { Hidden } from "@material-ui/core";
const imgs = [img_1, img_2, img_3];

const socials = [
  {
    link: "1",
    icon: <FacebookIcon />,
  },
  {
    link: "2",
    icon: <InstagramIcon />,
  },
  {
    link: "3",
    icon: <YouTubeIcon />,
  },
];

export default function Community() {
  return (
    <div className="community" id="community">
      <Grid container className="position__relative community__wrap">
        <div className="community__content item-center txt-center">
          <h3 className="community__title txt-up">BE PART OF CURNON</h3>
          <p className="community__desc">
            Ai nói bạn không thể lựa chọn gia đình?
          </p>
          <div className="community__socials">
            {socials &&
              socials.map((social) => (
                <a
                  href={social.link}
                  className="social__link"
                  target="__blank"
                  key={social.link}
                >
                  {social.icon}
                </a>
              ))}
          </div>
          <p className="has__tag">#CURNONWATCH</p>
        </div>

        <Hidden xsDown={true}>
          <Grid item xs={3} className="community__img">
            <img src={img_1} alt="community__img" />
          </Grid>
        </Hidden>

        <Grid item xs={12} sm={6} className="community__img">
          <img src={img_2} alt="community__img" />
        </Grid>
        <Hidden xsDown={true}>
          <Grid item xs={3} className="community__img">
            <img src={img_3} alt="community__img" />
          </Grid>
        </Hidden>
      </Grid>
    </div>
  );
}
