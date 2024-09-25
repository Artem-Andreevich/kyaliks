import { useEffect, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { usePaginationContext } from "../../context/PaginateContext"
import { Pagination } from '../../components/Pagination';
import { getCurrentPage } from "../../untils/getCurrentPage"
import { TodoList } from '../../components/TodoList/TodoList';
import { api } from "../../api/api"


export const TodoPage = () => {

    const [ todosData, setTodosData ] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)
    const [ searchParams, setSearchParams ] = useSearchParams()
    const { params: paginateState, setPage } = usePaginationContext()
    const todoPaginate = paginateState.find( page => page.pageName === "todo")

    const reloadPageHandler = () => { 

        setSearchParams({ page: 10 })
        setPage('todo', 1)
    }

    useEffect(() => {

        const currentPage = getCurrentPage(searchParams, todoPaginate)
        // if (!searchParams.get("page")) {
        //     setSearchParams({ page: currentPage })
        // }

        window.addEventListener("beforeunload", reloadPageHandler);

        api.get.data(currentPage)
            .then(data => {
                setTodosData({
                    data: data.todos,
                    totalTodo: data.total,
                    limit: data.limit,
                    totalPage: Math.ceil(data.total / todoPaginate.limit)
                })
            })
            .catch((e) => {console.log("Error" + e)})
            .finally(() => {setIsLoading(false)})

        return () => {
            window.removeEventListener("beforeunload", reloadPageHandler)
        }
    }, [todoPaginate.page])

    return (
        <div>
            <h1>Todo Page</h1> 
            {isLoading ? 
                <div>Загрузка...</div> :
                <TodoList data={todosData.data}/>
            }
            <Pagination 
                totalPage={todosData.totalPage} 
                page={todoPaginate.page}
                currentPage={getCurrentPage(searchParams, todoPaginate)}
                setSearchParams={setSearchParams}
            />
        </div>
    )
}