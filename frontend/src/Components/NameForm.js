import React from "react";
import { Form, FormikProvider, useFormik } from "formik";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/system";
import { TextInputLiveFeedback } from "./TILFeedback";
import * as yup from "yup";
const validationSchema = yup.object({
  name: yup.string().required("Name is required"),
});
export default function NameForm() {
  const navigate = useNavigate();
  const formik = useFormik({
    initialValues: {
      name: "",
    },
    onSubmit: (values) => {
      console.log(values);
      navigate("/email");
    },
    validationSchema: validationSchema,
  });

  return (
    <FormikProvider value={formik}>
      <Container>
        <Form>
          <TextInputLiveFeedback
            fullWidth
            id="name"
            name="name"
            label="Full Name"
            type="text"
            value={formik.values.name}
            onChange={formik.handleChange}
            error={formik.touched.name && Boolean(formik.errors.name)}
            helpText={formik.touched.name && formik.errors.name}
          />
          <Button
            // component={Link}
            className="nextBtn"
            // to="/email"
            disabled={formik.values.name === "" ? true : false}
            color="primary"
            variant="contained"
            type="submit"
          >
            Next
          </Button>
        </Form>
      </Container>
    </FormikProvider>
  );
}
