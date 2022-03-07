import React from 'react';
import { ILeague } from '../../types/league';
import { nanoid } from 'nanoid';
import LeaguesGridItem from '../leaguesGridItem/LeaguesGridItem';
import './LeaguesGrid.css';

type LeaguesGridProps = {
  leagues: ILeague[];
};

const LeaguesGrid = ({ leagues }: LeaguesGridProps) => {
  return (
    <div className="content__leagues-grid">
      {leagues.map(({id, name, area: {name: country}}: ILeague) => {
        return <LeaguesGridItem key={nanoid()} id={id} name={name} country={country} />;
      })}
    </div>
  );
};

export default LeaguesGrid;
