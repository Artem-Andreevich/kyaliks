import React from 'react'

export const TodoItem = ({todoItem}) => {
    return (
        <tr>
            <td>{todoItem.id}</td>
            <td>{todoItem.todo}</td>
        </tr>
    )
}

