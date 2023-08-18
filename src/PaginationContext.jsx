import { createContext, useContext, useState } from 'react';
import FilmContext from './FilmContext';

const PaginationContext = createContext();

export const PaginationProvider = ({ children }) => {
  const { filteredFilms } = useContext(FilmContext);
  const [ itemsPerPage, setItemsPerPage ] = useState(5);
  const [ currentPage, setCurrentPage ] = useState(1);

  const totalPages = Math.ceil(filteredFilms.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  

  const nextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <PaginationContext.Provider
      value={{ currentPage, totalPages, nextPage, prevPage, startIndex, endIndex }}
    >
      {children}
    </PaginationContext.Provider>
  );
};

export default PaginationContext;