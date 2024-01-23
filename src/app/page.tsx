import { todo } from '@prisma/client'
import TodoList from './components/TodoList'
import Form from './components/Form'
import { getTodos } from './utils/api'

export default async function Home() {
    const todos: todo[] = await getTodos()

    return (
        <>
            <Form />
            <TodoList todos={todos} />
        </>
    )
}
