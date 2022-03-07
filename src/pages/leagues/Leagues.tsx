import React, { useEffect, useState } from 'react';
import useFootballService from '../../services/useFootballService';
import Spinner from '../../components/shared/spinner/Spinner';
import ErrorIndicator from '../../components/shared/errorIndicator/ErrorIndicator';
import LeaguesGrid from '../../components/leaguesGrid/LeaguesGrid';
import SearchPanel from '../../components/searchPanel/SearchPanel';
import Pagination from '../../components/pagination/Pagination';
import { useSearch } from '../../hooks/useSearch';
import { useSplitIntoPages } from '../../hooks/useSplitIntoPages';
import './Leagues.css';

const Leagues = () => {
  const [leagues, setLeagues] = useState([]);
  const { loading, error, getLeagues } = useFootballService();

  useEffect(() => {
    getLeagues().then(({ competitions }) => {
      setLeagues(competitions);
    });
  }, [getLeagues]);

  const {onChangeSearch, displayedItems} = useSearch(leagues);
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
      <SearchPanel onChangeSearch={onChangeSearch} />
      <LeaguesGrid leagues={currentItems} />
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

export default Leagues;
