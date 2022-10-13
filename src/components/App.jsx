import { nanoid } from 'nanoid';
// import { propTypes } from 'prop-types';
// import * as yup from 'yup';
import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

const initialValues = {
  name: '',
  number: '',
};

export class App extends Component {
  state = {
    contacts: [],
    name: '',
    number: '',
  };

 
  addContact = (values, actions) => {
    const newContact = {
      id: nanoid(),
      name: values.name,
      number: values.number,
    };

    this.setState(({ contacts }) => ({ contacts: [newContact, ...contacts] }));

    actions.resetForm();
  };

  handleSubmit = (values, actions) => {
    console.log(values, actions);
    actions.resetForm();
  };

  render() {
    return (
      <div>
        <h2>Phonebook</h2>
        <Formik initialValues={initialValues} onSubmit={this.addContact}>
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
        <h2>Contacts</h2>
        <ul>
      {this.state.contacts.map(contact => (<li key={contact.id}>{contact.name}: {contact.number}</li>))}
        </ul>
      </div>
    );
  }
}
