import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { Button, TextField, Box } from '@mui/material';
import css from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <div className={css.wrapper}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          textAlign: 'center',
          width: 400,
          gap: 3,
        }}
        component="form"
        onSubmit={handleSubmit}
      >
        <TextField
          autoFocus
          required
          type="text"
          name="name"
          label="Username"
          variant="outlined"
          autoComplete="off"
          size="small"
        />
        <TextField
          required
          type="email"
          name="email"
          label="Email"
          variant="outlined"
          autoComplete="off"
          size="small"
        />
        <TextField
          type="password"
          name="password"
          label="Password"
          variant="outlined"
          autoComplete="off"
          size="small"
        />
        <Button variant="contained" size="large" type="submit">
          Register
        </Button>
      </Box>
    </div>
  );
};
