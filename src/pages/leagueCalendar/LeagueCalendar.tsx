import React, { useEffect, useState } from 'react';
import useFootballService from '../../services/useFootballService';
import Spinner from '../../components/shared/spinner/Spinner';
import ErrorIndicator from '../../components/shared/errorIndicator/ErrorIndicator';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import { navMenu } from '../../constants/navMenu';

const leagueId = '2000';

const LeagueCalendar = () => {
  const [matches, setMatches] = useState([]);
  const [leagueName, setLeagueName] = useState('');
  const { loading, error, getLeagueMatches } = useFootballService();

  useEffect(() => {
    if (leagueId != null) {
      getLeagueMatches(leagueId).then(({ competition: { name }, matches }) => {
        setLeagueName(name);
        setMatches(matches);
      });
    }
  }, [getLeagueMatches]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <>
      <Breadcrumbs
        parentItemsName={navMenu[0].title}
        currentItemName={leagueName}
      />
      <h1>Матчи</h1>
    </>
  );
};

export default LeagueCalendar;
