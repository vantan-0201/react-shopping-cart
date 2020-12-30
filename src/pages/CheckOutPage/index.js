import React from "react";
// import PropTypes from "prop-types";
import "./index.scss";

import { Container, Grid } from "@material-ui/core";

import * as Yup from "yup";
import { Form, Field, Formik } from "formik";
import {
  email,
  fullName,
  phone,
  address,
} from "../../validation/SchemaAuthYup";
import FieldInput from "../../components/CustomFormik/FieldInput";
import MyButton from "../../components/MyButton";

const SchemaLAuth = Yup.object().shape({
  ...email,
  ...fullName,
  ...phone,
  ...address,
});

const initialValues = {
  email: "",
  phone: "",
  fullName: "",
  address: "",
};

const handleSigin = (value) => {
  console.log(value);
};

function CheckOutPage(props) {
  return (
    <div className="checkOutPage">
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={6} className="mainStep">
            <div className="mainStep__header">
              <h2 className="txt-up mainStep__title">thông tin khách hàng</h2>
              <p className=" mainStep__desc">
                Phương thức vận chuyển là <strong>FREESHIP</strong> với đơn hàng
                từ 700.000 VND.
              </p>
            </div>

            <Formik
              initialValues={initialValues}
              validationSchema={SchemaLAuth}
              onSubmit={handleSigin}
            >
              {() => (
                <Form className="form__style" id="form__checkOut">
                  <Field
                    name="fullName"
                    type="text"
                    id="fullName"
                    placeholder="Họ Tên"
                    component={FieldInput}
                  />
                  <Field
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Email"
                    component={FieldInput}
                  />
                  <Field
                    name="phone"
                    type="text"
                    id="phone"
                    placeholder="Số diện thoại"
                    component={FieldInput}
                  />
                  <Field
                    name="address"
                    type="text"
                    id="address"
                    placeholder="Địa chỉ giao hàng"
                    component={FieldInput}
                  />

                  <div className="form__group txt-center">
                    <MyButton fullWidth type="submit" effect txt="đặt hàng" />
                  </div>
                </Form>
              )}
            </Formik>
            <div className="mainStep__footer">
              <p className="mainStep__note">
                *Lưu ý: Curnon sẽ liên lạc lại với bạn trong 24h để xác nhận đơn
                hàng.
              </p>
              <span className=" mainStep__hotline">HOTLINE: 0868889103</span>
            </div>
          </Grid>
          <Grid item xs={6} className="checkOutPage__item"></Grid>
        </Grid>
      </Container>
    </div>
  );
}

// CheckOutPage.propTypes = {};

export default CheckOutPage;
