'use client'

import { todo as TodoType } from '@prisma/client'
import { useRouter } from 'next/navigation'
import * as TodoAPI from '@features/todo/api/Index'

type Props = {
    todo: TodoType
}

const TodoDetail = ({ todo }: Props) => {
    const router = useRouter()

    const handleDelete = async (id: number) => {
        await TodoAPI.deleteTodo(id)
        router.refresh()
    }

    const handlePatch = async (todo: TodoType) => {
        await TodoAPI.patchTodo(todo)
        router.refresh()
    }

    return (
        <>
            <div key={todo.id}>
                <input
                    name="isDone"
                    type="checkbox"
                    checked={todo.isDone}
                    onChange={() => handlePatch(todo)}
                />
                <p>{todo.id}</p>
                <p>{todo.title}</p>
                <p>{todo.content}</p>
                <p>{todo.isDone}</p>
                <p>{new Date(todo.createdAt).toLocaleString()}</p>
                <p>{new Date(todo.updatedAt).toLocaleString()}</p>
                <button
                    onClick={() => handleDelete(todo.id)}
                    className="bg-rose-400 px-2 py-1 rounded"
                >
                    削除
                </button>
            </div>
        </>
    )
}

export default TodoDetail
