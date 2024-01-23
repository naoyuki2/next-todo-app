import { todo } from '@prisma/client'
import React from 'react'
import TodoDetail from './TodoDetail'

type Props = {
    todos: todo[]
}

const TodoList = ({ todos }: Props) => {
    return (
        <>
            {todos.map((todo: todo) => {
                return <TodoDetail key={todo.id} todo={todo} />
            })}
        </>
    )
}

export default TodoList
