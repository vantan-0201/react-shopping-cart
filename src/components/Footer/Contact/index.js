import React from "react";
import "./index.scss";

import { Link } from "react-router-dom";

import { Grid, Container } from "@material-ui/core";

const contacts = [
  {
    contact: [
      {
        text: "33 Hàm Long, Hoàn Kiếm, Hà Nội.",
        store: 1,
      },
      {
        text: "9 B7 Phạm Ngọc Thạch, Đống Đa, Hà Nội.",
        store: 2,
      },
      {
        text: "173C Kim Mã, Ba Đình, Hà Nội.",
        store: 3,
      },
    ],
    title: "HANOI STORES",
  },
  {
    contact: [
      {
        text: "25 Nguyễn Trãi, P.Bến Thành, Quận 1, TPHCM.",
        store: 4,
      },
      {
        text: "Lầu 2, 63 Hồ Tùng Mậu, Quận 1, TPHCM.",
        store: 5,
      },
    ],
    title: "TP.HCM STORES",
  },
];

export default function Contact() {
  return (
    <div className="contact" id="contact">
      <Container maxWidth="lg">
        <Grid container className="contact__wrap" spacing={4}>
          <Grid item xs={12} md={4}>
            <div className="contact__item">
              <h3 className="contact__title txt-up">chính sách</h3>
              <ul className="contact__links">
                <li>
                  <Link to="/" className=" contact__link">
                    chính sách vận chuyển
                  </Link>
                </li>
                <li>
                  <Link to="/" className=" contact__link">
                    chính sách đổi trả
                  </Link>
                </li>
                <li>
                  <Link to="/" className=" contact__link">
                    chính sách bảo hành
                  </Link>
                </li>
              </ul>
            </div>
          </Grid>
          {contacts &&
            contacts.map((contact) => (
              <Grid item key={contact.title} xs={12} md={4}>
                <div className="contact__item">
                  <h3 className="contact__title txt-up">{contact.title}</h3>
                  <ul className="contact__store">
                    {contact.contact.map((item) => (
                      <li key={item.store}>
                        <span>Store {item.store}:&nbsp;</span>
                        {item.text}
                      </li>
                    ))}
                  </ul>
                </div>
              </Grid>
            ))}
        </Grid>
      </Container>
    </div>
  );
}
