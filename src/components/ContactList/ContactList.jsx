import { propTypes } from 'prop-types';
import { ContactListItem } from 'components/ContactListItem/ContactListItem';

export const ContactList = ({ visibleContacts, onDeleteContact }) => {
  return (
    <ul>
      {visibleContacts.map(contact => (
        <ContactListItem
          key={contact.id}
          name={contact.name}
          number={contact.number}
          onDeleteContact={onDeleteContact}
          id={contact.id}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
    visibleContacts: propTypes.arrayOf(propTypes.shape).isRequired,
    onDeleteContact: propTypes.func,
}
