import { propTypes } from 'prop-types';

export const Filter = ({ value, onFilter }) => {
  return (
    <label>
      <span>Find contacts by name</span>
      <input
        type="text"
        name="filter"
        value={value}
        onChange={onFilter}
      ></input>
    </label>
  );
};

Filter.propTypes = {
    value: propTypes.string.isRequired,
    onFilter: propTypes.func,
}