import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './NavMenuItem.css';

type NavMenuItemProps = {
  title: string;
  link: string;
};

const NavMenuItem = ({ title, link }: NavMenuItemProps) => {
  let { pathname } = useLocation();
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (pathname.includes(link)) {
      setActive(true);
    } else {
      setActive(false);
    }
  }, [pathname, link]);

  return (
    <li
      className={
        active ? 'menu__menu-item menu-item__link_active' : 'menu__menu-item'
      }
    >
      <Link to={link} className="menu-item__link">
        {title}
      </Link>
    </li>
  );
};

export default NavMenuItem;
