export const TodoList = ({data}) => {
    return (
        <ul>
            {data.map(todo => (
                <li key={todo.id}>
                    <span>{todo.id}</span> - <span>{todo.todo}</span>
                </li>
            ))}
        </ul>
    )
}

