import { ContactListItem } from "components/ContactListItem/ContactListItem"

export const ContactList = ({visibleContacts}) => {
    return (
        <ul>
        {visibleContacts.map(contact => (
          <ContactListItem key={contact.id} name={contact.name} number={contact.number}/>
        ))}
      </ul>
    )
}

