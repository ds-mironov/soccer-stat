import { useMemo, useState } from 'react';

export const useSplitIntoPages = <T>(items: T[], pageSize: number = 9) => {
  const [currentPage, setCurrentPage] = useState<number>(1);

  const currentItems = useMemo(() => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    return items.slice(firstPageIndex, lastPageIndex);
  }, [pageSize, currentPage, items]);

  const handleChangePage = (page: number): void => setCurrentPage(page);

  return { pageSize, currentItems, handleChangePage, currentPage };
};
