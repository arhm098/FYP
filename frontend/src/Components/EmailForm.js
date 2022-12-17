import React from "react";
import { Form, FormikProvider, useFormik } from "formik";
import Button from "@mui/material/Button";
import { TextInputLiveFeedback } from "./TILFeedback";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import * as yup from "yup";

const validationSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});
export default function EmailForm() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      email: "",
    },
    onSubmit: (values) => {
      console.log(values);
      // navigate("/email");
    },
    validationSchema: validationSchema,
  });

  return (
    <FormikProvider value={formik}>
      <Container>
        <Form>
          <TextInputLiveFeedback
            fullWidth
            id="email"
            name="email"
            label="Email"
            type="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helpText={formik.touched.email && formik.errors.email}
          />

          <Button
            className="nextBtn"
            color="primary"
            variant="contained"
            disabled={formik.values.email === "" ? true : false}
            type="submit"
          >
            Next
          </Button>
        </Form>
      </Container>
    </FormikProvider>
  );
}
