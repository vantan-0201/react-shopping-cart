import React from "react";

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import FieldInput from "../../components/CustomFormik/FieldInput";

import * as Yup from "yup";
import { Form, Field, Formik } from "formik";
import { email } from "../../validation/SchemaAuthYup";
import MyButton from "../../components/MyButton";

const SchemaLAuth = Yup.object().shape({
  ...email,
});

const initialValues = {
  email: "",
};

export default function ForgotPassword() {
  const history = useHistory();

  const handleSigin = async (values) => {
    const { email, password } = values;
    try {
      if (email === "vantan@gmail.com" && password === "12345678") {
        localStorage.setItem("accessToken", 12345678);
        history.push("/acount");
      }
    } catch (errors) {
      console.log(errors);
    }
  };

  return (
    <div className="forgotPasswordPage page__account">
      <Formik
        initialValues={initialValues}
        validationSchema={SchemaLAuth}
        onSubmit={handleSigin}
      >
        {() => (
          <Form
            className="form__forgotPassword form__style"
            id="form__forgotPassword"
          >
            <h2 className="form__title txt-up">FORGOT PASSWORD?</h2>
            <p className="form__desc">
              Enter your email below to receive a password reset link.
            </p>

            <Link
              to="/singin"
              style={{
                textAlign: "center",
                margin: "10px 0 40px",
                display: "block",
                fontSize: "12px",
              }}
            >
              Remember it again? Sign in
            </Link>
            <Field
              name="email"
              type="email"
              id="email"
              placeholder="Email"
              classInput="form__control"
              component={FieldInput}
            />

            <div className="form__group txt-center">
              <MyButton
                type="submit"
                txt="lấy lại mật khẩu"
                effect
                className="btn__form cursor txt-up"
              />
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}
