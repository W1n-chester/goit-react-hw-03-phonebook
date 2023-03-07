import React from 'react';
import { nanoid } from 'nanoid';
import { Form } from './Form/Form';
import { Phonebook, Contacts } from './App.styled';
import { ContactList } from './Contact-List/Contact-list';
export class App extends React.Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ],
    filter: '',
  };
  deleteContact = (id) => {
    this.setState(prevState => (
    { contacts: prevState.contacts.filter(contact=>contact.id!==id)}
  ))
}
  addContact = ({ name, number }) => {
    const newContact = { id: nanoid(), name, number };

    this.state.contacts.find(contact => contact.name === newContact.name)
      ? alert(`${newContact.name} is already in contacts`)
      : this.setState(prevState => ({
          contacts: [...prevState.contacts, newContact],
        }));
  };
  changeFilter = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  render() {
    const { filter, contacts } = this.state;
    const normFilter = filter.toLocaleLowerCase();
    const visibleContacts = contacts.filter(contact =>
      contact.name.toLocaleLowerCase().includes(normFilter)
    );
    return (
      <Phonebook>
        <h2>Phonebook</h2>
        <Contacts>
        <Form onAddContact={this.addContact} />
        <ContactList
          filter={filter}
          onFilter={this.changeFilter}
          contacts={visibleContacts}
          onDeleteContact={this.deleteContact}
        />
        </Contacts>
      </Phonebook>
    );
  }
}
