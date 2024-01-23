import { todo } from '@prisma/client'

export const getTodos = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todo`, {
        cache: 'no-store',
    })
    const todos = await res.json()

    return todos
}

export const postTodo = async (inputVal: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: inputVal,
        }),
    })
    const postTodo = await res.json()

    return postTodo
}

export const deleteTodo = async (id: number) => {
    console.log(id + 'を削除')

    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todo/${id}`, {
        method: 'DELETE',
    })
    const deleteTodo = await res.json()

    return deleteTodo
}

export const patchTodo = async (todo: todo) => {
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
