/* eslint-disable no-unused-vars */
import { TPagination } from "types";
import { useState, useEffect } from "react";
interface PaginationProps {
  limit: number;
  pagination: TPagination;
  handlePreviousClick: () => void;
  handleNextClick: () => void;
  handlePageClick: (page: number) => void;
  offset: number;
}
const Pagination = ({
  limit,
  pagination,
  handlePreviousClick,
  handleNextClick,
  offset,
  handlePageClick,
}: PaginationProps) => {
  const [currentPage, setcurrentPage] = useState(
    Math.round(offset / limit + 1)
  );

  const [lastPage, setlastPage] = useState(Math.ceil(pagination.count / limit));
  const pages = [];
  const maxPagesToShow = 5;
  let startPage = 1;
  let endPage = lastPage;
  if (lastPage > maxPagesToShow) {
    if (currentPage <= Math.ceil(maxPagesToShow / 2)) {
      startPage = 1;
      endPage = maxPagesToShow;
    } else if (currentPage + Math.floor(maxPagesToShow / 2) >= lastPage) {
      startPage = lastPage - maxPagesToShow + 1;
      endPage = lastPage;
    } else {
      startPage = currentPage - Math.floor(maxPagesToShow / 2);
      endPage = currentPage + Math.floor(maxPagesToShow / 2);
    }
  }
  for (let i = startPage; i <= endPage; i++) {
    pages.push(
      <button
        key={i}
        onClick={() => handlePageClick(i)}
        className={`flex rounded-md items-center justify-center w-8 h-8 ${
          currentPage === i ? "bg-primary text-white" : "bg-light-grey"
        } `}
      >
        {i}
      </button>
    );
  }
  useEffect(() => {
    if (limit === 0) {
      setcurrentPage(0);

      setlastPage(0);
    } else {
      setcurrentPage(Math.round(offset / limit + 1));

      setlastPage(Math.ceil(pagination.count / limit));
    }
  }, [limit, offset, pagination]);
  return (
    <div className="flex justify-center w-full mt-5">
      <div className="flex items-center">
        <button
          onClick={handlePreviousClick}
          disabled={currentPage === 1}
          className={`flex rounded-md items-center justify-center w-8 h-8 ${
            currentPage === 1 || currentPage === 0
              ? "bg-light-grey"
              : "bg-primary "
          } `}
        >
          <i className="text-white pi pi-angle-left"></i>
        </button>
        <div className="flex gap-3 mx-3">{pages}</div>
        <button
          onClick={handleNextClick}
          disabled={currentPage === lastPage}
          className={`flex rounded-md items-center justify-center w-8 h-8 ${
            currentPage === lastPage || currentPage === 0
              ? "bg-light-grey"
              : "bg-primary "
          } `}
        >
          <i className="text-white pi pi-angle-right"></i>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
