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
                    <tr key={todo.id}>
                        <td>{todo.id}</td>
                        <td>{todo.todo}</td>
                    </tr>
                ))}
                </tbody>

            </table>
        </div>
    )
}

