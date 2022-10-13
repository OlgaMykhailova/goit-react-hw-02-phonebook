import { nanoid } from 'nanoid';
// import { propTypes } from 'prop-types';
// import * as yup from 'yup';
import { Component } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
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

  changeFilter = e => {
    this.setState({ filter: e.target.value });
  };

  getVisibleContacts = () => {
    const contactList = this.state.contacts;
    const normalizedFilter = this.state.filter.toLowerCase();
    
    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    const visibleContacts = this.getVisibleContacts();

    return (
      <div>
        <h2>Phonebook</h2>
        <Formik initialValues={this.state} onSubmit={this.addContact}>
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

        <label>
          <span>Find contacts by name</span>
          <input type="text" name="filter" onChange={this.changeFilter}></input>
        </label>

        <ul>
          {visibleContacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
