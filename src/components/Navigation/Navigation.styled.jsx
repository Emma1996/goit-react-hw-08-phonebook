import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const StyledLink = styled(NavLink)`
  display: inline-block;
  text-decoration: none;
  padding: 12px;
  font-weight: 700;
  color: rgb(160, 154, 154);

  &.active {
    color: rgb(2, 55, 17);
  }
`;
