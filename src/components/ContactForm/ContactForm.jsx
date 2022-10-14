import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { Component } from 'react';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

handleSubmit = (values, actions) => {
    const newContact = {
        id: nanoid(6),
        name: values.name,
        number: values.number,
      };
      this.props.onSubmit(newContact);
      actions.resetForm();
}

  render() {
    return (
      <Formik initialValues={this.state} onSubmit={this.handleSubmit}>
        <Form>
          <label>
            <span>Name</span>
            <Field type="text" name="name"></Field>
            <ErrorMessage name="name" component="span"></ErrorMessage>
          </label>
          <label>
            <span>Number</span>
            <Field type="tel" name="number"></Field>
            <ErrorMessage name="number" component="span"></ErrorMessage>
          </label>
          <button type="submit">Add contact</button>
        </Form>
      </Formik>
    );
  }
}
