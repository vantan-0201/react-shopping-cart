import * as Yup from "yup";

const email = {
  email: Yup.string().email("Trường này phải là email").required("Bắt buộc"),
};

const password = {
  password: Yup.string()
    .min(6, "Too Short!")
    .max(20, "Too Long!")
    .required("Bắt buộc"),
};

const distric = {
  distric: Yup.string().required("Bắt buộc").max(100),
};

const confirm_password = {
  confirm_password: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Bắt buộc"),
};

const fullName = {
  fullName: Yup.string().required("Bắt buộc").min(1).max(50),
};

const address = {
  address: Yup.string().required("Bắt buộc"),
};

const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const phone = {
  phone: Yup.string()
    .matches(phoneRegExp, "Đây phải là sô điện thoại")
    .required("Bắt buộc"),
};

export { email, password, confirm_password, fullName, address, phone, distric };
