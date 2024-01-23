'use client'

import { todo } from '@prisma/client'
import { deleteTodo, patchTodo } from '../utils/api'
import { useRouter } from 'next/navigation'

type Props = {
    todo: todo
}

const TodoDetail = ({ todo }: Props) => {
    const router = useRouter()

    const handleDelete = async (id: number) => {
        await deleteTodo(id)
        router.refresh()
    }

    const hadlePatch = async (todo: todo) => {
        await patchTodo(todo)
        router.refresh()
    }

    return (
        <>
            <div key={todo.id}>
                <input
                    type="checkbox"
                    checked={todo.isDone}
                    onChange={() => hadlePatch(todo)}
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
