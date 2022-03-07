import React, { useEffect, useMemo, useState } from 'react';
import useFootballService from '../../services/useFootballService';
import Spinner from '../../components/shared/spinner/Spinner';
import ErrorIndicator from '../../components/shared/errorIndicator/ErrorIndicator';
import LeaguesGrid from '../../components/leaguesGrid/LeaguesGrid';
import SearchPanel from '../../components/searchPanel/SearchPanel';
import { ILeague } from '../../types/league';
import Pagination from '../../components/pagination/Pagination';
import './Leagues.css';

const pageSize = 9;

const Leagues = () => {
  const [leagues, setLeagues] = useState([]);
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [term, setTerm] = useState<string>('');
  const { loading, error, getLeagues } = useFootballService();

  useEffect(() => {
    getLeagues().then(({ competitions }) => {
      setLeagues(competitions);
    });
  }, [getLeagues]);

  const onChangeSearch = (term: string): void => {
    setTerm(term);
  };

  const searchLeagues = (items: ILeague[], term: string): ILeague[] => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(({ name }) => {
      return name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1;
    });
  };

  const displayedLeagues = searchLeagues(leagues, term);

  const currentLeagues = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return displayedLeagues.slice(firstPageIndex, lastPageIndex);
  }, [currentPage, displayedLeagues]);

  const handleChangePage = (page: number): void => setCurrentPage(page);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <ErrorIndicator />;
  }

  // console.log(currentLeagues);
  return (
    <>
      <SearchPanel onChangeSearch={onChangeSearch} />
      <LeaguesGrid leagues={currentLeagues} />
      <Pagination
        className="content__pagination-bar"
        totalCount={displayedLeagues.length}
        currentPage={currentPage}
        pageSize={pageSize}
        onPageChange={handleChangePage}
      />
    </>
  );
};

export default Leagues;
