import React from 'react';
import { nanoid } from 'nanoid';
import { ITeams } from '../../types/teams';
import TeamsGridItem from '../teamsGridItem/TeamsGridItem';
import './TeamsGrid.css';


type TeamsGridProps = {
  teams: ITeams[];
};

const TeamsGrid = ({ teams }: TeamsGridProps) => {
  return (
    <div className="content__teams-grid">
      {teams.map(({ id, name, crestUrl }: ITeams) => {
        return (
          <TeamsGridItem
            key={nanoid()}
            id={id}
            name={name}
            crest={crestUrl}
          />
        );
      })}
    </div>
  );
};

export default TeamsGrid;
