import React, { useEffect, useMemo, useState } from 'react';
import useFootballService from '../../services/useFootballService';
import Spinner from '../../components/shared/spinner/Spinner';
import ErrorIndicator from '../../components/shared/errorIndicator/ErrorIndicator';
import SearchPanel from '../../components/searchPanel/SearchPanel';
import Pagination from '../../components/pagination/Pagination';
import TeamsGrid from '../../components/teamsGrid/TeamsGrid';
import { ITeams } from '../../types/teams';

const pageSize = 10;

const Teams = () => {
  const [teams, setTeams] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [term, setTerm] = useState<string>('');
  const { loading, error, getTeams } = useFootballService();

  useEffect(() => {
    getTeams().then(({ teams }) => {
      setTeams(teams);
    });
  }, [getTeams]);

  const onChangeSearch = (term: string): void => {
    setTerm(term);
  };

  const searchLeagues = (items: ITeams[], term: string): ITeams[] => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(({ name }) => {
      return name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1;
    });
  };

  const displayedTeams = searchLeagues(teams, term);

  const currentTeams = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return displayedTeams.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, displayedTeams]);

  const handleChangePage = (page: number): void => setCurrentPage(page);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  console.log(teams);
  return (
    <>
      <SearchPanel onChangeSearch={onChangeSearch} />
      <TeamsGrid teams={currentTeams} />
      <Pagination
        className="content__pagination-bar"
        totalCount={displayedTeams.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={handleChangePage}
      />
    </>
  );
};

export default Teams;
