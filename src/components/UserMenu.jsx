import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logoutUser } from './redux/userSlice';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(state => state.user.user);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <div>
      <p>{user ? user.email : ''}</p>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default UserMenu;
