import { usePaginationContext } from "../../context"


export const Pagination = ({totalPage, currentPage, page, setSearchParams}) => {

    const { nextPage, prevPage, setPage } = usePaginationContext()
    
	const handlePrevPage = () => {
        prevPage("todo")
        setSearchParams({ page: +currentPage - 1 })
    }

    const handleNextPage = () => {
        nextPage("todo")
        setSearchParams({ page: +currentPage + 1 })
    }

    const handleSetPage = (currentPage) => {
        setPage("todo", currentPage)
        setSearchParams({ page: currentPage })
    }

	return (
		<div>
			<button 
                className='btn'
                onClick={handlePrevPage} 
                disabled={page <= 1}
            >
                Prev
            </button>
            <button
                className='btn pag-btn'
                onClick={() => {handleSetPage(page - 1)}}
                disabled={page - 1 < 1}
            >
                {page - 1}
            </button>
            <button
                className='btn'
                onClick={() => {handleSetPage(page)}}
                disabled={page === totalPage || page === 1 || page}
            >
                {page}
            </button>
            <button
                className='btn pag-btn'
                onClick={() => {handleSetPage(page + 1)}}
                disabled={page + 1 > totalPage}

            >
                {page + 1}
            </button>
            <button
                className='btn'
                onClick={handleNextPage} 
                disabled={page === totalPage}
            >
                Next
            </button>
		</div>
	)
}

  