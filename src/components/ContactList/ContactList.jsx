import { PropTypes } from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';
import { List } from './ContactList.styled';

export const ContactList = ({ visibleContacts, onDeleteContact }) => {
  return (
    <List>
      {visibleContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={onDeleteContact}
          id={contact.id}
        />
      ))}
    </List>
  );
};

ContactList.propTypes = {
    visibleContacts: PropTypes.arrayOf(PropTypes.shape),
    onDeleteContact: PropTypes.func,
}
