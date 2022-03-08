import React from 'react';
import { Navigate } from "react-router-dom";
import Leagues from '../pages/leagues/Leagues';
import LeagueCalendar from '../pages/leagueCalendar/LeagueCalendar';
import Teams from '../pages/teams/Teams';
import TeamsCalendar from '../pages/teamsCalendar/TeamsCalendar';

export const ROUTES = [
  { path: '/leagues', element: <Leagues /> },
  { path: '/leagues/:leagueId', element: <LeagueCalendar /> },
  { path: '/teams', element: <Teams /> },
  { path: '/teams/:teamId', element: <TeamsCalendar /> },
  { path: '*', element: <Navigate to="/leagues" replace /> },
];
