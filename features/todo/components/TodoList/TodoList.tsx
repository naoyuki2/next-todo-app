import { todo as TodoType } from '@prisma/client'
import * as Todo from '@features/todo/components/Index'

type Props = {
    todos: TodoType[]
}

const TodoList = ({ todos }: Props) => {
    return (
        <>
            {todos.map((todo: TodoType) => {
                return <Todo.TodoItem key={todo.id} todo={todo} />
            })}
        </>
    )
}

export default TodoList
