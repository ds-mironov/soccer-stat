import React from 'react';
import './CalendarGridItem.css';
import { IMatch } from '../../types/match';

type CalendarGridItemProps = {
  match: IMatch;
};

const CalendarGridItem = ({ match }: CalendarGridItemProps) => {
  const {
    utcDate,
    status,
    homeTeam: { name: homeTeamName },
    awayTeam: { name: awayTeamName },
    score: {
      fullTime: { homeTeam: x, awayTeam: y },
      extraTime: { homeTeam: z, awayTeam: g },
      penalties: { homeTeam: n, awayTeam: m },
    },
  } = match;

  return (
    <>
      <div className="calendar__cell">{utcDate}</div>
      <div className="calendar__cell">{status}</div>
      <div className="calendar__cell">
        <span>{homeTeamName}</span>
        <span>-</span>
        <span>{awayTeamName}</span>
      </div>
      <div className="calendar__cell">
        {x}:{y} ({z || '-'}:{g || '-'}) ({n || '-'}:{m || '-'})
      </div>
    </>
  );
};

export default CalendarGridItem;
