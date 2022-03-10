import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import useFootballService from '../../services/useFootballService';
import Spinner from '../../components/shared/spinner/Spinner';
import ErrorIndicator from '../../components/shared/errorIndicator/ErrorIndicator';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import { navMenu } from '../../constants/navMenu';
import { useSplitIntoPages } from '../../hooks/useSplitIntoPages';
import CalendarGrid from '../../components/calendarGrid/CalendarGrid';
import Pagination from '../../components/pagination/Pagination';

const TeamsCalendar = () => {
  const { teamId } = useParams();
  const [teamName, setTeamName] = useState('');
  const [matches, setMatches] = useState([]);
  const { loading, error, getOneTeam, getTeamMatches } = useFootballService();

  useEffect(() => {
    if (teamId != null) {
      getOneTeam(teamId).then(({name}) => {
        setTeamName(name);
      });
    }
  }, [getOneTeam, teamId]);

  useEffect(() => {
    if (teamId != null) {
      getTeamMatches(teamId).then(({ matches }) => {
        setMatches(matches);
      });
    }
  }, [getTeamMatches, teamId]);

  const { pageSize, currentItems, handleChangePage, currentPage } =
    useSplitIntoPages(matches);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <>
      <Breadcrumbs parentItemsName={navMenu[1].title} currentItemName={teamName} />
      <h1 className="content__header">Матчи</h1>
      <CalendarGrid matches={currentItems} />
      <Pagination
        className="content__pagination-bar"
        totalCount={matches.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={handleChangePage}
      />
    </>
  );
};

export default TeamsCalendar;
