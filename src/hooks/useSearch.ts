import { useState } from 'react';

interface IHasName {
  name: string;
}

export const useSearch = <T extends IHasName>(items: T[]) => {
  const [term, setTerm] = useState<string>('');

  const onChangeSearch = (term: string): void => {
    setTerm(term);
  };

  const searchLeagues = (items: T[], term: string): T[] => {
    if (term.length === 0) {
      return items;
    }

    return items.filter(({ name }) => {
      return name.toLocaleLowerCase().indexOf(term.toLocaleLowerCase()) > -1;
    });
  };

  const displayedItems = searchLeagues(items, term);

  return { onChangeSearch, displayedItems };
};
