import React, { useState } from 'react';

const App = () => {
  const [contacts, setContacts] = useState([]);
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    } else if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const newContact = {
      id: Math.random(),
      name,
      number,
    };
    setContacts(prevContacts => [...prevContacts, newContact]);
    setName('');
    setNumber('');
  };

  return (
    <div>
      <h1>Phonebook</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Number:
          <input
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Add contact</button>
      </form>
      <h2>Contacts</h2>
      {contacts.length > 0 ? (
        <ul>
          {contacts.map(contact => (
            <li key={contact.id}>
              {contact.name}: {contact.number}
            </li>
          ))}
        </ul>
      ) : (
        <p>No contacts yet.</p>
      )}
    </div>
  );
};

export default App;
