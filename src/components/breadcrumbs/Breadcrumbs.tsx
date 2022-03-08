import React from 'react';
import { useNavigate } from 'react-router-dom';
import arrowIcon from '../../assets/icons/ic-chevron-right.svg';
import './Breadcrumbs.css';

type BreadcrumbsProps = {
  parentItemsName: string;
  currentItemName: string;
};

const Breadcrumbs = ({
  parentItemsName,
  currentItemName,
}: BreadcrumbsProps) => {
  const navigate = useNavigate();

  return (
    <div className="content__breadcrumbs">
      <button className="breadcrumbs__button" onClick={() => navigate(-1)}>
        {parentItemsName}
      </button>
      <img src={arrowIcon} alt="arrow" />
      <span className="breadcrumbs__item-name">{currentItemName}</span>
    </div>
  );
};

export default Breadcrumbs;
