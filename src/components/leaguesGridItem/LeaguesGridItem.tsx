import React from 'react';
import { useNavigate } from "react-router-dom";
import { ROUTES } from '../../constants/routes';
import './LeaguesGridItem.css';

type LeaguesGridItemProps = {
  id: number;
  name: string;
  country: string;
}

const LeaguesGridItem = ({id, name, country}: LeaguesGridItemProps) => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`${ROUTES[0].path}/${id}`)
  }

  return (
    <div className="leagues-grid__league" onClick={handleClick}>
      <p className="league__name">{name}</p>
      <p className="league__country">{country}</p>
    </div>
  );
};

export default LeaguesGridItem;