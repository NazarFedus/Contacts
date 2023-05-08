import { FC } from "react";

import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { ISubmitValues } from "./ContactFormPageTypes";
import { NavLink } from "react-router-dom";
import { useSubmit } from "../../hooks/useSubmit";

const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name must be at most 50 characters")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email address")
    .required("Email is required"),
  phone: Yup.string()
    .matches(/^\d+$/, "Phone must be a number")
    .required("Phone is required"),
});

const initialValues = {
  name: "",
  email: "",
  phone: "",
};

const ContactsFormPage: FC = () => {
  const { submit, response } = useSubmit();
  console.log(response);

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={async (values: ISubmitValues) => {
        console.log(values);

        await submit({
          name: values.name,
          email: values.email,
          phone: values.phone,
        });
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <div className="flex mx-[25px] flex-col justify-center items-center h-[100vh]">
          <Form className="flex flex-col" onSubmit={handleSubmit}>
            <h3>New Contact</h3>
            <label>Name:</label>
            <Field
              type="text"
              name="name"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.name && touched.name && (
              <ErrorMessage className="text-red" name="name" />
            )}
            <label>Email:</label>
            <Field
              type="email"
              name="email"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.email && touched.email && (
              <ErrorMessage className="text-red" name="email" />
            )}
            <label>Phone:</label>
            <Field
              type="text"
              name="phone"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phone}
            />
            {errors.phone && touched.phone && (
              <ErrorMessage className="text-red" name="phone" />
            )}

            <div className="flex gap-3 mt-2">
              <NavLink to="/">
                <button className="cancel">Cancel</button>
              </NavLink>
              <NavLink to="/">
                <button
                  className="save"
                  type="submit"
                  disabled={isSubmitting}
                  onClick={() =>
                    submit({
                      name: values.name,
                      email: values.email,
                      phone: values.phone,
                    })
                  }
                >
                  Save
                </button>
              </NavLink>
            </div>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default ContactsFormPage;
