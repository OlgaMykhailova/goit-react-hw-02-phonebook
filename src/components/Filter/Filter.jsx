import { PropTypes } from 'prop-types';
import { Label, Text, Input } from './Filter.styled';

export const Filter = ({ value, onFilter }) => {
  return (
    <Label>
      <Text>Find contacts by name</Text>
      <Input
        type="text"
        name="filter"
        value={value}
        onChange={onFilter}
      ></Input>
    </Label>
  );
};

Filter.propTypes = {
    value: PropTypes.string,
    onFilter: PropTypes.func,
}