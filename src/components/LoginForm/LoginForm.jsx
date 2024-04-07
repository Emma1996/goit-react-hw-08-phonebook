import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { Button, TextField, Box } from '@mui/material';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
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
          type="email"
          name="email"
          label="Email"
          variant="outlined"
          // autoComplete="off"
          size="small"
        />
        <TextField
          required
          type="password"
          name="password"
          label="Password"
          variant="outlined"
          autoComplete="current-password"
          size="small"
        />
        <Button variant="contained" size="large" type="submit">
          Log In
        </Button>
      </Box>
    </div>
  );
};
