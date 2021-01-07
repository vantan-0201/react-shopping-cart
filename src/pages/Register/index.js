import React, { useState } from "react";
// import "./index.scss";

import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";

import FieldInput from "../../components/CustomFormik/FieldInput";

import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import { withStyles } from "@material-ui/core/styles";
import { green } from "@material-ui/core/colors";

import * as Yup from "yup";
import { Form, Field, Formik } from "formik";
import { email, password } from "../../validation/SchemaAuthYup";
import MyButton from "../../components/MyButton";

const SchemaLAuth = Yup.object().shape({
  ...email,
  ...password,
});

const initialValues = {
  email: "",
  password: "",
};

export default function Register() {
  const [checkbox, setCheckbox] = useState(true);
  const history = useHistory();

  const GreenCheckbox = withStyles({
    root: {
      color: green[400],
      "&$checked": {
        color: green[600],
      },
    },
    checked: {},
  })((props) => <Checkbox color="default" {...props} />);

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

  const handleChangeCheckbox = () => {
    setCheckbox(!checkbox);
  };

  return (
    <div className="registerPage page__account">
      <Formik
        initialValues={initialValues}
        validationSchema={SchemaLAuth}
        onSubmit={handleSigin}
      >
        {() => (
          <Form className="form__register form__style" id="form__register">
            <h2 className="form__title txt-up">NEW TO CURNON?</h2>
            <p className="form__desc">
              Create your account now to earn many benefits
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
              Already have an account? Sign in
            </Link>

            <Field
              name="email"
              type="email"
              id="email"
              placeholder="Email"
              classInput="form__control"
              component={FieldInput}
            />

            <Field
              name="password"
              type="password"
              id="password"
              placeholder="Password"
              classInput="form__control"
              component={FieldInput}
            />

            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                marginBottom: "20px",
              }}
            >
              <FormControlLabel
                control={
                  <GreenCheckbox
                    checked={checkbox}
                    onChange={handleChangeCheckbox}
                    name="checkedA"
                  />
                }
                label="Keep me signed in"
              />
              <Link
                to="/forgot-password"
                style={{
                  fontSize: "12px",
                  fontStyle: "italic",
                  textDecoration: "underline",
                  color: "inherit",
                }}
              >
                Forgot password?
              </Link>
            </div>
            <div className="form__group txt-center">
              <MyButton
                type="submit"
                txt="đăng ký"
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
