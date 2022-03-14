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
      <div className="calendar__cell">
        {new Date(utcDate).toLocaleDateString('ru-RU')}{' '}
        {new Date(utcDate).toLocaleTimeString('ru-RU', {
          hour: '2-digit',
          minute: '2-digit'
        })}
      </div>
      <div className="calendar__cell">{status}</div>
      <div className="calendar__cell calendar__cell_align-space-between">
        <span>{homeTeamName}</span>
        <span>-</span>
        <span>{awayTeamName}</span>
      </div>
      <div className="calendar__cell">
        {x || '-'}:{y || '-'}{' '}
        <span className="cell__additional">
          ({z || '-'}:{g || '-'}) ({n || '-'}:{m || '-'})
        </span>
      </div>
    </>
  );
};

export default CalendarGridItem;
