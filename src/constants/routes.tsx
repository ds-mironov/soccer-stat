import React from 'react';
import Leagues from '../pages/leagues/Leagues';
import LeagueCalendar from '../pages/leagueCalendar/LeagueCalendar';
import Teams from '../pages/teams/Teams';
import TeamsCalendar from '../pages/teamsCalendar/TeamsCalendar';

export const ROUTES = [
  { path: '/leagues', element: <Leagues /> },
  { path: '/leagues/:id', element: <LeagueCalendar /> },
  { path: '/teams', element: <Teams /> },
  { path: '/teams/:id', element: <TeamsCalendar /> },
  { path: '*', element: <Leagues /> },
];
