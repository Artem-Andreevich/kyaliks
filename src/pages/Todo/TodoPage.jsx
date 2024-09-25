import { useEffect, useState } from 'react'
import { usePaginationContext } from "../../context/PaginateContext"
import { Pagination } from '../../components/Pagination';
import { TodoList } from '../../components/TodoList/TodoList';
import { api } from "../../api/api"


export const TodoPage = () => {

    const [ todosData, setTodosData ] = useState({})
    const [ isLoading, setIsLoading ] = useState(true)
    const { params: paginateState } = usePaginationContext()
    const todoPaginate = paginateState.find( page => page.pageName === "todo")

    useEffect(() => {
        api.get.data(todoPaginate.page)
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

    }, [todoPaginate.page])

    return (
        <main className='page'>
            <div className='container'>
                <h1 className='page__title'>Todo Page</h1> 
                {isLoading ? 
                    <div>Загрузка...</div> :
                    <TodoList data={todosData.data}/>
                }
                <Pagination 
                    totalPage={todosData.totalPage} 
                    page={todoPaginate.page}
                />
            </div>
        </main>
        
    )
}