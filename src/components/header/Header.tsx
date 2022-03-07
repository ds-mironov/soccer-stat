import React from 'react';
import { Link } from 'react-router-dom';
import { navMenu } from '../../constants/navMenu';
import NavMenu from '../navMenu/NavMenu';
import './Header.css';

const Header = () => {
  return (
    <header className="container__header">
      <Link to={navMenu[0].link} className="header__logo">
        SoccerStat
      </Link>
      <NavMenu menu={navMenu} />
    </header>
  );
};

export default Header;
