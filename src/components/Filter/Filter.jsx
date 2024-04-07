import { useSelector, useDispatch } from 'react-redux';
import { changeFilter } from 'redux/filter/filterSlice';
import { selectFilter } from 'redux/filter/selectors';
import { TextField } from '@mui/material';

export const Filter = () => {
  const filter = useSelector(selectFilter);
  const dispatch = useDispatch();

   const handleChangeFilter = event => {
    const { value } = event.currentTarget;
    dispatch(changeFilter(value));
  };

  return (
    <TextField
      sx={{
        width: 370,
        marginBottom: '15px',
      }}
      type="text"
      name="filter"
      value={filter}
      label="Find contacts by name"
      variant="outlined"
      autoComplete="off"
      size="small"
      onChange={handleChangeFilter}
    />
  );
};
