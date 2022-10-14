import { Component } from 'react';
import { Notify } from 'notiflix';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };

  addContact = newContact => {
    this.setState(({ contacts }) =>
      contacts.find(contact => contact.name === newContact.name)
        ? Notify.warning(`${newContact.name} is already in contacts`)
        : { contacts: [newContact, ...contacts] }
    );
  };

  deleteContact = contactId => {
    this.setState(({ contacts }) => ({
      contacts: contacts.filter(contact => contact.id !== contactId),
    }));
  };

  changeFilter = e => {
    const { value } = e.currentTarget;
    this.setState({ filter: value });
  };

  getVisibleContacts = () => {
    const contactList = this.state.contacts;
    const normalizedFilter = this.state.filter.toLowerCase();

    return contactList.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  render() {
    return (
      <div className="container">
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>
        <Filter value={this.state.filter} onFilter={this.changeFilter} />
        <ContactList
          visibleContacts={this.getVisibleContacts()}
          onDeleteContact={this.deleteContact}
        />
      </div>
    );
  }
}
