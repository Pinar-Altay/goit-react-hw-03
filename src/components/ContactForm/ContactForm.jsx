
import PropTypes from "prop-types";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { nanoid } from "nanoid";
import styles from "./ContactForm.module.css";

const ContactForm = ({ onAddContact }) => {
  // Formik başlangıç değerleri 
  const initialValues = {
    name: "",
    number: "",
  };

  // Yup doğrulama şeması
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, "Name must be at least 3 characters")
      .max(50, "Name must not exceed 50 characters")
      .required("Name is required"),
    number: Yup.string()
      .matches(/^[0-9-]+$/, "Only numbers and dashes are allowed")
      .min(5, "Number must be at least 5 characters")
      .required("Number is required"),
  });

  // Form gönderildiğinde çalışacak fonksiyon
  const handleSubmit = (values, { resetForm }) => {
    onAddContact({ id: nanoid(), ...values });
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({ isSubmitting }) => (
        <Form className={styles.form}>
          <label className={styles.label}>
            Name
            <Field
              type="text"
              name="name"
              className={styles.input}
              placeholder="Enter name"
            />
            <ErrorMessage
              name="name"
              component="div"
              className={styles.error}
            />
          </label>

          <label className={styles.label}>
            Number
            <Field
              type="text"
              name="number"
              className={styles.input}
              placeholder="Enter phone number"
            />
            <ErrorMessage
              name="number"
              component="div"
              className={styles.error}
            />
          </label>

          <button
            type="submit"
            disabled={isSubmitting}
            className={styles.button}
          >
            Add Contact
          </button>
        </Form>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;
