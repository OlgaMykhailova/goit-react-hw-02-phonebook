import { PropTypes } from 'prop-types';
import { Button, ListItem, Text } from './ContactListItem.styled';

export const ContactListItem = ({id, name, number, onDeleteContact}) => {
    return (
        <ListItem key={id}>
        <Text>{name}: {number}</Text>
        <Button type='button' onClick={() => onDeleteContact(id)}>Delete</Button>
      </ListItem>
    )
}

ContactListItem.propTypes = {
    id: PropTypes.string,
    name: PropTypes.string,
    number: PropTypes.string,
    onDeleteContact: PropTypes.func,
}