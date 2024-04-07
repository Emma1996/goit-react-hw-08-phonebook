import React from 'react';
import { useDispatch } from 'react-redux';
import { setFilter } from 'components/redux/contactSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const handleFilterChange = e => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <label>
      Search:
      <input type="text" name="filter" onChange={handleFilterChange} />
    </label>
  );
};

export default Filter;
