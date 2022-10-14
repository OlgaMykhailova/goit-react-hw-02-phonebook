import { propTypes } from 'prop-types';

export const ContactListItem = ({id, name, number, onDeleteContact}) => {
    return (
        <li key={id}>
        <span>{name}: {number}</span>
        <button type='button' onClick={() => onDeleteContact(id)}>Delete</button>
      </li>
    )
}

ContactListItem.propTypes = {
    id: propTypes.string.isRequired,
    name: propTypes.string.isRequired,
    number: propTypes.string.isRequired,
    onDeleteContact: propTypes.func,
}