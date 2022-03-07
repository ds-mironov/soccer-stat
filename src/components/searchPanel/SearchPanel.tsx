import React, {ChangeEventHandler, useState} from 'react';

import searchIcon from '../../assets/icons/ic-actions-search.svg';
import './SearchPanel.css';

type SearchPanelProps = {
  onChangeSearch: (term: string) => void;
};

function SearchPanel({onChangeSearch}: SearchPanelProps) {
  const [term, setTerm] = useState('');

  const onUpdateSearch: ChangeEventHandler<HTMLInputElement> = (e) => {
    const term: string = e.target.value;
    setTerm(term);

    if (term === '') {
      onChangeSearch(term);
    }
  };

  const handleKeyPress = (event: { key: string }) => {
    if (event.key === 'Enter') {
      onChangeSearch(term);
    }
  };

  return (
    <div className="content__search">
      <input
        className="search__input"
        type="text"
        value={term}
        placeholder="Поиск"
        onChange={onUpdateSearch}
        onKeyPress={handleKeyPress}
      />
      <button
        className="search__button"
        onClick={() => onChangeSearch(term)}>
        <img
          className="button__search-icon"
          src={searchIcon}
          alt="Search"
        />
      </button>
    </div>
  );
}

export default SearchPanel;
