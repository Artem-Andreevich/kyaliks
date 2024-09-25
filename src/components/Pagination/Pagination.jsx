import { usePaginationContext } from "../../context"


export const Pagination = ({ totalPage, page }) => {

    const { nextPage, prevPage, setPage } = usePaginationContext()
    
	const handlePrevPage = () => {
        prevPage("todo")
    }

    const handleNextPage = () => {
        nextPage("todo")
    }

    const handleSetPage = () => {
        setPage("todo", page)
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

  