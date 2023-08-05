import React, { Component } from 'react';
import Section from './components/Section';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';

class PhonebookApp extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  render() {
    const { contacts, filter } = this.state;

    return (
      <div>
        <h1>Phonebook</h1>
        <Section title="Add contact">
          <ContactForm contacts={contacts} onSubmit={this.addContact} />
        </Section>

        <Section title="Contacts">
          <Filter value={filter} onChange={this.changeFilter} />
          <ContactList
            contacts={this.getFilteredContacts()}
            onDeleteContact={this.deleteContact}
          />
        </Section>
      </div>
    );
  }
}

export default PhonebookApp;
