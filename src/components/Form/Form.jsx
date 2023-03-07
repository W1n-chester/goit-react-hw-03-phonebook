import React from 'react';
import { ContactForm, Name, Number } from './Form.styled';

export class Form extends React.Component {
  state = {
    name: '',
    number: '',
  };
  writeInput = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };
  formSubmit = e => {
    e.preventDefault();
    this.props.onAddContact(this.state);
    this.reset();
  };
  reset = () => {
    this.setState({ name: '', number: '' });
  };
  render() {
    return (
      <ContactForm onSubmit={this.formSubmit}>
        <Name>
          Name:
          <input
            type="text"
            name="name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            value={this.state.name}
            onChange={this.writeInput}
          />
        </Name>
        <Number>
          Tell:
          <input
            type="tel"
            name="number"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            value={this.state.number}
            onChange={this.writeInput}
          />
        </Number>
        <button type="submit">Add Contact</button>
      </ContactForm>
    );
  }
}
