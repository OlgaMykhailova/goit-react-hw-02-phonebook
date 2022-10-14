export const ContactListItem = ({id, name, number, onDeleteContact}) => {
    return (
        <li key={id}>
        <span>{name}: {number}</span>
        <button type='button' onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    )
}