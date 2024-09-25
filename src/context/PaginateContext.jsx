import { createContext, useContext, useState } from 'react';

export const PaginateContext = createContext(undefined);

export const PaginateProvider = ({ children }) => {

  const initialState = [
    {
      pageName: "todo",
      limit: 10,
      page: 1,
      skip: 0,
    },
  ]

  const [params, setParams] = useState(initialState);

  const nextPage = (pageName) => {
    setParams( prev => prev.map( item => {
      if(pageName === item.pageName) {
        return {
          ...item,
          page: item.page + 1
        }
      }
      return item
    }))
  }

  const prevPage = (pageName) => {
    setParams( prev => prev.map( item => {
      if(pageName === item.pageName) {
        return {
          ...item,
          page: item.page - 1
        }
      }
      return item
    }))
  }

  const setPage = (pageName, currentPage) => {
    setParams( prev => prev.map( item => {
      if(pageName === item.pageName) {
        return {
          ...item,
          page: currentPage
        }
      }
      return item
    }))
  }


  return (
    <PaginateContext.Provider value={{ params, nextPage, prevPage, setPage }}>
      {children}
    </PaginateContext.Provider>
  );
};

export const usePaginationContext = () => {
  const context = useContext(PaginateContext);
  if (!context) {
    throw new Error('useUrlParams must be used within a UrlParamsProvider');
  }
  return context;
};
