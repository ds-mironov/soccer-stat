import { useState } from 'react';

interface hasUtsDate {
  utcDate: string;
}

const UseFilterByDateRange = <T extends hasUtsDate>(items: T[]) => {
  const [rangeData, setRangeData] = useState({
    startDate: '',
    endDate: '',
  });

  const handleChangeDate = (which: string, date: string) => {
    setRangeData({ ...rangeData, [which]: date });
  };

  const filterByDateRange = (
    items: T[],
    startUtcDate: string,
    endUtcDate: string,
  ) => {
    if (startUtcDate && endUtcDate) {
      const startDate = new Date(startUtcDate);
      const endDate = new Date(endUtcDate);

      return items.filter((item) => {
        const date = new Date(item.utcDate);

        return date >= startDate && date <= endDate;
      });
    }

    return items;
  };

  const { startDate, endDate } = rangeData;
  const displayedItems = filterByDateRange(items, startDate, endDate);

  return { handleChangeDate, displayedItems };
};

export default UseFilterByDateRange;
