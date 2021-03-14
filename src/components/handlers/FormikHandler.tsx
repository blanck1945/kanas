import React from "react";
import { Formik, Form } from "formik";

const FormikHandler = ({ children, formikObj }: any) => {
  return (
    <Formik {...formikObj}>
      <Form>{children}</Form>
    </Formik>
  );
};

export default FormikHandler;
