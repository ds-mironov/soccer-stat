import React from 'react';
import { usePagination, DOTS } from '../../hooks/usePagination';
import { nanoid } from 'nanoid';
import './Pagination.css';

type PaginationProps = {
  onPageChange(page: number | string): void;
  totalCount: number;
  siblingCount?: number;
  currentPage: number;
  pageSize: number;
  className: string;
};

const Pagination = ({
  onPageChange,
  totalCount,
  siblingCount = 1,
  currentPage,
  pageSize,
  className,
}: PaginationProps) => {
  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange!.length < 2) {
    return null;
  }

  const onNext = () => {
    if (currentPage < Math.ceil(totalCount / pageSize)) {
      onPageChange(currentPage + 1);
    }
  };

  const onPrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  let lastPage = paginationRange![paginationRange!.length - 1];

  return (
    <ul className={`pagination-container ${className}`}>
      <li
        className={
          currentPage !== 1
            ? 'pagination-container__pagination-item'
            : 'pagination-container__pagination-item pagination-container__pagination-item_disabled'
        }
        onClick={onPrevious}
      >
        <div className="pagination-container__pagination-item pagination-item__arrow pagination-item__arrow_left" />
      </li>
      {paginationRange!.map((pageNumber ) => {
        if (pageNumber === DOTS) {
          return (
            <li
              key={nanoid()}
              className="pagination-container__pagination-item pagination-container__pagination-item_dots"
            >
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={nanoid()}
            className={
              pageNumber === currentPage
                ? 'pagination-container__pagination-item pagination-container__pagination-item_selected'
                : 'pagination-container__pagination-item'
            }
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}
      <li
        className={
          currentPage === lastPage
            ? 'pagination-container__pagination-item pagination-container__pagination-item_disabled'
            : 'pagination-container__pagination-item'
        }
        onClick={onNext}
      >
        <div className="pagination-container__pagination-item pagination-item__arrow pagination-item__arrow pagination-item__arrow pagination-item__arrow_right" />
      </li>
    </ul>
  );
};

export default Pagination;
