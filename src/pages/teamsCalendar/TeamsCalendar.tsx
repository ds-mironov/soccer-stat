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
import RangeDate from '../../components/rangeDate/RangeDate';
import useFilterByDateRange from '../../hooks/useFilterByDateRange';

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

  const { handleChangeDate, displayedItems } = useFilterByDateRange(matches);
  const { pageSize, currentItems, handleChangePage, currentPage } =
    useSplitIntoPages(displayedItems);

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
      <RangeDate handleChangeDate={handleChangeDate} />
      <CalendarGrid matches={currentItems} />
      <Pagination
        className="content__pagination-bar"
        totalCount={displayedItems.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={handleChangePage}
      />
    </>
  );
};

export default TeamsCalendar;
