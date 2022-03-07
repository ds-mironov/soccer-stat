import React, { useEffect, useState } from 'react';
import useFootballService from '../../services/useFootballService';
import Spinner from '../../components/shared/spinner/Spinner';
import ErrorIndicator from '../../components/shared/errorIndicator/ErrorIndicator';
import SearchPanel from '../../components/searchPanel/SearchPanel';
import Pagination from '../../components/pagination/Pagination';
import TeamsGrid from '../../components/teamsGrid/TeamsGrid';
import { useSearch } from '../../hooks/useSearch';
import { useSplitIntoPages } from '../../hooks/useSplitIntoPages';

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const { loading, error, getTeams } = useFootballService();

  useEffect(() => {
    getTeams().then(({ teams }) => {
      setTeams(teams);
    });
  }, [getTeams]);

  const { onChangeSearch, displayedItems } = useSearch(teams);
  const { pageSize, currentItems, handleChangePage, currentPage } =
    useSplitIntoPages(displayedItems, 10);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  return (
    <>
      <SearchPanel onChangeSearch={onChangeSearch} />
      <TeamsGrid teams={currentItems} />
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

export default Teams;
