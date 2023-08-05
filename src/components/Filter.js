import React from 'react';

const Filter = ({ value, onChangeFilter }) => (
  <label>
    Find contacts by name:
    <input type="text" value={value} onChange={(event) => onChangeFilter(event.target.value)} />
  </label>
);

export default Filter;
