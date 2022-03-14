import React, { ChangeEvent, useState } from 'react';
import './RangeDate.css';

type RangeDateProps = {
  handleChangeDate(which: string, date: string): void;
};

const RangeDate = ({ handleChangeDate }: RangeDateProps) => {
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const onChangeStartDate = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setStartDate(value);
    handleChangeDate('startDate', value);
  };

  const onChangeEndDate = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEndDate(value);
    handleChangeDate('endDate', value);
  };

  return (
    <div className="content__range-date">
      c
      <input
        className="content__data-input"
        type="date"
        value={startDate}
        onChange={onChangeStartDate}
      />
      по
      <input
        className="content__data-input"
        type="date"
        value={endDate}
        onChange={onChangeEndDate}
      />
    </div>
  );
};

export default RangeDate;
