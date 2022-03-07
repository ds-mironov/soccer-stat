import {useState, useCallback} from 'react';

export const useHttp = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const request = useCallback(
    async (url, method = 'GET', headers = {}, body = null) => {
      setLoading(true);

      try {
        if (body) {
          headers['Content-Type'] = 'application/json';
          body = JSON.stringify(body);
        }
        const response = await fetch(url, {method, headers, body});
        const data = await response.json();

        if (!response.ok) {
          setError(data.message || 'Что-то пошло не так');
          setLoading(false);
          return;
        }
        setLoading(false);
        return data;
      } catch (e) {
        setLoading(false);
        setError((e as Error).message);
        throw e;
      }
    },
    [],
  );

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  return {loading, request, error, clearError} as const;
};
