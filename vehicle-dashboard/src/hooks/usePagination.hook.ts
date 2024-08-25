import { useState } from "react";
import { TPagination } from "types";

export const usePaginationHook = () => {
  const [pagination, setpagination] = useState<TPagination>({
    count: 0,
    next: null,
    previous: null,
  });
  const [limit] = useState<number>(5);
  const [offset, setoffset] = useState<number>(0);

  const handleNextButton = () => {
    console.log(pagination.next, "check");
    if (pagination.next !== null) {
      const pagination_offset = pagination.next
        .split("?")[1]
        .split("&")[1]
        .split("=")[1];

      setoffset(Number(pagination_offset));
    }
  };
  const handlePreviousButton = () => {
    console.log(pagination.previous, "check");
    if (pagination?.previous !== null) {
      const pagination_offset = pagination?.previous
        ?.split("?")[1]
        ?.split("&")[1]
        ?.split("=")[1];
      if (pagination_offset) {
        setoffset(Number(pagination_offset));
      } else {
        setoffset(0);
      }
    }
  };
  const handlePageClick = (pageno: number) => {
    setoffset((pageno - 1) * limit);
  };
  return {
    pagination,
    setpagination,
    limit,
    offset,
    handleNextButton,
    handlePreviousButton,
    handlePageClick,
  };
};
