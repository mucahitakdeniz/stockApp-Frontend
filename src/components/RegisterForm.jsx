import { Form } from "formik";
import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import { object, string } from "yup";

export const registerSchema = object({
  username: string()
    .max(20, "User name must be less than 20 characters.")
    .required("User name is required"),
  first_name: string()
    .max(20, "The name must be less than 20 characters.")
    .required("First name is required"),
  last_name: string()
    .max(20, "Surname must be less than 20 characters.")
    .required("Last name is required"),
  email: string().email().required("Email is required"),
  password: string()
    .required("Password is required")
    .min(8, "Password must be at least 8 characters")
    .max(20, "Password must be at most 20 characters")
    .matches(/\d+/, "Password must contain a number")
    .matches(/[a-z]/, "Password must contain a lowercase letter")
    .matches(/[A-Z]/, "Password must contain an uppercase letter")
    .matches(/[!,?{}><%&$#£+-.]+/, "Password must contain a special character"),
});

const RegisterForm = ({
  values,
  handleChange,
  handleBlur,
  errors,
  touched,
}) => {
  return (
    <div>
      <Form>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <TextField
            label="User Name"
            name="username"
            id="userName"
            type="text"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.username}
            error={touched.username && Boolean(errors.username)}
            helperText={errors.username}
          />
          <TextField
            label="First Name"
            name="first_name"
            id="firstName"
            type="text"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.first_name}
            error={touched.first_name && Boolean(errors.first_name)}
            helperText={errors.first_name}
          />
          <TextField
            label="Last Name"
            name="last_name"
            id="last_name"
            type="text"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.last_name}
            error={touched.last_name && Boolean(errors.last_name)}
            helperText={errors.last_name}
          />
          <TextField
            label="Email"
            name="email"
            id="email"
            type="email"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
            error={touched.email && Boolean(errors.email)}
            helperText={errors.email}
          />
          <TextField
            label="password"
            name="password"
            id="password"
            type="password"
            variant="outlined"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.password}
            error={touched.password && Boolean(errors.password)}
            helperText={errors.password}
          />
          <Button type="submit" variant="contained" size="large">
            Submit
          </Button>
        </Box>
      </Form>
    </div>
  );
};

export default RegisterForm;
