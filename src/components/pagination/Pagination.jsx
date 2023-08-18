import { useContext } from "react";
import PaginationContext from "../../PaginationContext";

const Pagination = () => {
  const { currentPage, totalPages, nextPage, prevPage } = useContext(PaginationContext);
  const pagesArr = Array.from({ totalPages });
  console.log(currentPage, totalPages, pagesArr)
  return (
    <div>
      <ul>
        {pagesArr.map((item, index) => (
          <li className="page-num" key={index}>{index +1}</li>
        ))}
      </ul>
      <button onClick={prevPage} disabled={currentPage === 1}>
        Previous
      </button>
      <button onClick={nextPage} disabled={currentPage === totalPages}>
        Next
      </button>
    </div>
  );
};

export default Pagination;
