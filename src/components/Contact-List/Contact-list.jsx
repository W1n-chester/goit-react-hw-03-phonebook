import { Filter } from "../Filter/Filter";
import { Item } from "../ContactsItem/ContactsItem"
import { Container } from './Contact-List.styled';
export const ContactList = ({ filter, onFilter, contacts, onDeleteContact }) => {
  return (
    <Container>
      <h2>Contacts</h2>
      <Filter filter={filter} onFilter={onFilter} />
      <ul>
        {contacts.map(contact => (
          <li key={contact.id}>
            <Item
              name={contact.name}
              number={contact.number}
                    onDeleteContact={onDeleteContact}
                    id={contact.id}
            />
          </li>
        ))}
      </ul>
    </Container>
  );
};