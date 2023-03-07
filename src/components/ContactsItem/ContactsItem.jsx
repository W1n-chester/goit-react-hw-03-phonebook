import { Contact } from './ContactItem.styled';
export const Item = ({ name, number, onDeleteContact, id }) => {
  return (
    <Contact>
      <span>
        <span>{name}:</span> <span> {number}</span>
      </span>
      <button type="button" onClick={() => onDeleteContact(id)}>
        Delete
      </button>
    </Contact>
  );
};