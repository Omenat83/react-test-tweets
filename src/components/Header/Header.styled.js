import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.nav`
  position: sticky;
  z-index: 1100;
  display: flex;
  padding: 10px 20px;
  box-shadow: 0px 2px 4px -1px rgba(0, 0, 0, 0.2),
    0px 4px 5px 0px rgba(0, 0, 0, 0.14), 0px 1px 10px 0px rgba(0, 0, 0, 0.12);
`;

export const HeaderUl = styled.ul`
  display: flex;
  gap: 30px;
  align-items: center;
  margin-left: 30px;
`;

export const HeaderLink = styled(NavLink)`
  text-decoration: none;
  color: black;
  font-weight: 500;
  font-size: 24px;

  &.active {
    color: red;
  }
`;
