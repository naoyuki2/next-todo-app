import { todo as TodoType } from '@prisma/client'

const patchTodo = async (todo: TodoType) => {
    const res = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/todo/${todo.id}`,
        {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                isDone: !todo.isDone,
            }),
        },
    )
    const patchTodo = await res.json()

    return patchTodo
}

export default patchTodo
