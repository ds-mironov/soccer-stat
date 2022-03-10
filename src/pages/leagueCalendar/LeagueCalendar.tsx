import React, { useEffect, useState } from 'react';
import useFootballService from '../../services/useFootballService';
import Spinner from '../../components/shared/spinner/Spinner';
import ErrorIndicator from '../../components/shared/errorIndicator/ErrorIndicator';
import Breadcrumbs from '../../components/breadcrumbs/Breadcrumbs';
import { navMenu } from '../../constants/navMenu';
import CalendarGrid from '../../components/calendarGrid/CalendarGrid';
import { useSplitIntoPages } from '../../hooks/useSplitIntoPages';
import Pagination from '../../components/pagination/Pagination';
import './LeagueCalendar.css';
// import { useSearch } from '../../hooks/useSearch';

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

  // const {onChangeSearch, displayedItems} = useSearch(matches);
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
      <Breadcrumbs
        parentItemsName={navMenu[0].title}
        currentItemName={leagueName}
      />
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

export default LeagueCalendar;
