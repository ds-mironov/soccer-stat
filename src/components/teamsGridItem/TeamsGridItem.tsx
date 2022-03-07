import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ROUTES } from '../../constants/routes';
import './TeamsGridItem.css';

type TeamsGridItemProps = {
  id: number;
  name: string;
  crest: string;
};

const TeamsGridItem = ({ id, name, crest }: TeamsGridItemProps) => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate(`${ROUTES[2].path}/${id}`);
  };

  return (
    <div className="teams-grid__team" onClick={handleClick}>
      <p className="team__name">{name}</p>
      <img src={crest} className="team__crest" alt={`Crest ${name}`} />
    </div>
  );
};

export default TeamsGridItem;
