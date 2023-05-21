import React from 'react';
import { SiGooglenews } from 'react-icons/si';
import { HeaderContainer, HeaderUl, HeaderLink } from './Header.styled';

const Header = () => {
  return (
    <HeaderContainer>
      <>
        <SiGooglenews size="36px" />
        <HeaderUl>
          <li>
            <HeaderLink to="/">Home</HeaderLink>
          </li>
          <li>
            <HeaderLink to="/tweets">Tweets</HeaderLink>
          </li>
        </HeaderUl>
      </>
    </HeaderContainer>
  );
};

export default Header;
