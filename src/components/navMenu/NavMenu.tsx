import React from 'react';
import { INavMenuItem } from '../../constants/navMenu';
import './NavMenu.css';
import NavMenuItem from '../navMenuItem/NavMenuItem';

type NavMenuProps = {
  menu: INavMenuItem[];
};

const NavMenu = ({ menu }: NavMenuProps) => {

  return (
    <nav className="header__nav-block">
      <ul className="nav-block__menu">
        {menu.map(({ title, link }) => {
          return <NavMenuItem key={title} title={title} link={link} />;
        })}
      </ul>
    </nav>
  );
};

export default NavMenu;
