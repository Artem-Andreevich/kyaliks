import { TodoItem } from "../TodoItem/TodoItem"

export const TodoList = ({data}) => {
    return (
        <div className="page__content">
            <table>
                <thead>
                    <tr>
                        <td>Номер</td>
                        <td>Задача</td>
                    </tr>
                </thead>
                <tbody>
                {data.map(todo => (
                    <TodoItem key={todo.id} todoItem={todo}/>
                ))}
                </tbody>

            </table>
        </div>
    )
}

