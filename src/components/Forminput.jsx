import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";

const Forminput = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      name: "",
      confirmpassword: "",
    },
    validationSchema: yup.object().shape({
      name: yup.string().trim().required("Name is required"),
      email: yup.string().trim().email("Must be a valid email").required("Email is required"),
      password: yup
        .string()
        .min(6, "Must be 6 characters or more")
        .max(12, "Characters too much")
        .required("Password is required"),
      confirmpassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "password missmatch")
        .required(),
    }),
    onSubmit: (values) => {
      console.log("Submitted");
    },
  });
  console.log(formik.values);
  return (
    <form onSubmit={formik.handleSubmit}>
      <h1>Register below</h1>
      <div className="input-control">
        <label htmlFor="">Name</label>
        <input
          type="text"
          name="name"
          placeholder="Enter your name"
          value={formik.values.name}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
        {formik.touched.name && formik.errors.name ? (
          <p style={{ color: "red", fontSize: ".875rem", marginBottom: "1rem" }}>
            {formik.errors.name}
          </p>
        ) : null}
      </div>
      <div className="input-control">
        <label htmlFor="email">Email</label>
        <input
          type="text"
          name="email"
          placeholder="Enter your exciting email"
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
        {formik.touched.email && formik.errors.email ? (
          <p style={{ color: "red", fontSize: ".875rem", marginBottom: "1rem" }}>
            {formik.errors.email}
          </p>
        ) : null}
      </div>
      <div className="input-control">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          placeholder="Enter a password"
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
        {formik.touched.password && formik.errors.password ? (
          <p style={{ color: "red", fontSize: ".875rem", marginBottom: "1rem" }}>
            {formik.errors.password}
          </p>
        ) : null}
      </div>
      <div className="input-control">
        <label htmlFor="confirmPassword">PasswordConfirm</label>
        <input
          type="password"
          name="confirmpassword"
          placeholder="Enter your choosen password again"
          value={formik.values.confirmpassword}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          required
        />
        {formik.touched.confirmpassword && formik.errors.confirmpassword ? (
          <p style={{ color: "red", fontSize: ".875rem", marginBottom: "1rem" }}>
            {formik.errors.confirmpassword}
          </p>
        ) : null}
      </div>
      <div className="input-control">
        <label htmlFor="DOB">Date of Birth</label>
        <input type="date" name="DOB" />
      </div>
      <button type="submit" className="btn" disabled={!formik.isValid}>
        {" "}
        Submit
      </button>
    </form>
  );
};

export default Forminput;
