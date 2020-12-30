import React from "react";
import { ErrorMessage } from "formik";
import TextField from "@material-ui/core/TextField";
import "./index.scss";

function FieldInput(props) {
  const { form, field, ...rest } = props;
  const { type, placeholder, label, required, classInput } = rest;
  const { name } = field;
  const { errors, touched } = form;
  const showErrorsMess = errors[name] && touched[name];
  return (
    <>
      <div className="form__group">
        {label && (
          <label className="form__label">
            {label} {required && "(bắt buộc)"}
          </label>
        )}
        <TextField
          name={name}
          id={name}
          {...field}
          placeholder={placeholder}
          type={type}
          className={`${classInput ? classInput : ""} form__control `}
          autoComplete="off"
          fullWidth
          variant="outlined"
          error={showErrorsMess}
        />
        <ErrorMessage name={name} component="p" className="form__error" />
      </div>
    </>
  );
}

export default FieldInput;
