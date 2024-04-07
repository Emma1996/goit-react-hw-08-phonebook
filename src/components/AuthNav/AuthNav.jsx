import { NavLink } from 'react-router-dom';
import { Button } from '@mui/material';
import css from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={css.wrapper}>
      <NavLink to="/register">
        <Button variant="outlined" size="small">
          Register
        </Button>
      </NavLink>
      <NavLink to="/login">
        <Button variant="outlined" size="small">
          Log In
        </Button>
      </NavLink>
    </div>
  );
};
