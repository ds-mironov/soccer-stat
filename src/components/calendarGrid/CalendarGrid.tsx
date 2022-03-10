import React from 'react';
import { IMatch } from '../../types/match';
import CalendarGridItem from '../calendarGridItem/CalendarGridItem';
import './CalendarGrid.css';

type CalendarGridProps = {
  matches: IMatch[];
};

const CalendarGrid = ({ matches }: CalendarGridProps) => {
  console.log(matches);
  return (
    <div className="content__calendar">
      {matches.map((match) => {
        return <CalendarGridItem key={match.id} match={match} />;
      })}
    </div>
  );
};

export default CalendarGrid;
