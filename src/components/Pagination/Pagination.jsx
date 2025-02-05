import { usePaginationContext } from "../../context"


export const Pagination = ({ totalPage, page, pageName }) => {

    const { nextPage, prevPage, setPage } = usePaginationContext()
    
	const handlePrevPage = () => {
        prevPage(pageName)
    }

    const handleNextPage = () => {
        nextPage(pageName)
    }

    const handleSetPage = (page) => {
        setPage(pageName, page)
    }

	return (
		<ul className="pagination">
            <li>
                <button 
                    className="pagination__link"
                    onClick={handlePrevPage} 
                    disabled={page <= 1}
                >
                    Prev
                </button>
            </li>
            <li>
                <button
                    className="pagination__link pagination__link--disabled-hidden"
                    onClick={() => {handleSetPage(page - 1)}}
                    disabled={page - 1 < 1}
                >
                    {page - 1}
                </button>
            </li>
            <li>
                <button
                    className="pagination__link"
                    onClick={() => {handleSetPage(page)}}
                    disabled={page === totalPage || page === 1 || page}
                >
                    {page}
                </button>
            </li>
            <li>
                <button
                    className="pagination__link pagination__link--disabled-hidden"
                    onClick={() => {handleSetPage(page + 1)}}
                    disabled={page + 1 > totalPage}

                >
                    {page + 1}
                </button>
            </li>
            <li>
                <button
                    className="pagination__link"
                    onClick={handleNextPage} 
                    disabled={page === totalPage}
                >
                    Next
                </button>
            </li>
		</ul>
	)
}

  