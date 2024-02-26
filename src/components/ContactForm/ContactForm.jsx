import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import css from './ContactForm.module.css';
import { addContact } from '../../redux/contactsOperations';
import { useDispatch } from 'react-redux';

const contactSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Name must be at least 3 characters long')
    .max(50, 'Name must not exceed 50 characters')
    .required('This is a required field'),
  phone: Yup.string()
    .min(5, 'phone must be at least 5 characters long')
    .max(20, 'phone must not exceed 20 characters')
    .matches(
      /^(\d{3}-\d{3}-\d{4}|\(\d{3}\) \d{3}-\d{4}|\+\d{1,2}\s\d{3}-\d{3}-\d{4}|\d{10})$/,
      'Invalid phone phone format.'
    )
    .required('This is a required field'),
});

const ContactForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = async (values, actions) => {
    try {
      // Виклик асинхронного екшена addContact
      await dispatch(
        addContact({
          name: values.name,
          phone: values.phone,
        })
      );
      // Якщо вдалося додати контакт, скидаємо форму
      actions.resetForm();
    } catch (error) {
      console.error('Error adding contact:', error);
      // Обробка помилки, якщо виникла при додаванні контакту
    }
  };
  return (
    <Formik
      initialValues={{ name: '', phone: '' }}
      validationSchema={contactSchema}
      onSubmit={handleSubmit}
    >
      <Form className={css.contactForm} autoComplete="off">
        <div className={css.contactFormGroup}>
          <label className={css.labelForm} htmlFor="name">
            Name
          </label>
          <Field className={css.input} type="text" name="name" id="name" />
          <ErrorMessage className={css.error} name="name" component="span" />
        </div>

        <div className={css.contactFormGroup}>
          <label className={css.labelForm} htmlFor="phone">
            phone
          </label>
          <Field className={css.input} type="text" name="phone" id="phone" />
          <ErrorMessage className={css.error} name="phone" component="span" />
        </div>

        <button className={css.btnAddContact} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
};
export default ContactForm;
