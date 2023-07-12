import React from "react";
import "./PaginationPages.scss";
interface PaginationPagesProps {
  numOfPages: number;
  currentPage: number;
  setPage: React.Dispatch<React.SetStateAction<number>>;
}

const PaginationPages = ({
  numOfPages,
  currentPage,
  setPage,
}: PaginationPagesProps) => {
  const handlePageChanged = (e: React.MouseEvent<HTMLLabelElement>) => {
    const { innerHTML } = e.currentTarget;
    setPage(Number(innerHTML));
  };

  const pagesArray = Array.from(
    { length: numOfPages },
    (_, index) => index + 1
  );
  return (
    <div className="pages-container">
      {pagesArray.map((page) => {
        return (
          <label
            key={page}
            onClick={(e) => handlePageChanged(e)}
            className={page === currentPage ? "current-page" : "page"}
          >
            {page}
          </label>
        );
      })}
    </div>
  );
};

export default PaginationPages;
