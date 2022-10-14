export const ContactListItem = ({id, name, number}) => {
    return (
        <li key={id}>
        {name}: {number}
      </li>
    )
}