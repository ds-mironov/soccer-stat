import { useHttp } from '../hooks/useHttp';
import config from '../config.json';
import { useCallback, useMemo } from 'react';

const useFootballService = () => {
  const { loading, request, error, clearError } = useHttp();
  const apiBase = 'https://api.football-data.org/v2/';
  const headers = useMemo(() => ({ 'X-Auth-Token': config.API_TOKEN }), []);

  const getLeagues = useCallback(async () => {
    return await request(`${apiBase}competitions/`, 'GET', headers);
  }, [request, headers]);

  const getLeagueMatches = useCallback(
    async (id: string) => {
      return await request(
        `${apiBase}competitions/${id}/matches`,
        'GET',
        headers,
      );
    },
    [request, headers],
  );

  const getTeams = useCallback(async () => {
    return await request(`${apiBase}teams/`, 'GET', headers);
  }, [request, headers]);

  const getOneTeam = useCallback(
    async (id: string) => {
      return await request(`${apiBase}teams/${id}`, 'GET', headers);
    },
    [request, headers],
  );

  const getTeamMatches = useCallback(
    async (id: string) => {
      return await request(`${apiBase}teams/${id}/matches`, 'GET', headers);
    },
    [request, headers],
  );

  return {
    loading,
    error,
    clearError,
    getLeagues,
    getLeagueMatches,
    getTeams,
    getOneTeam,
    getTeamMatches,
  };
};

export default useFootballService;
