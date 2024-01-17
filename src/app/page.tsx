'use client'

import { useEffect, useState } from 'react'

type TodoType = {
    id: number
    title: string
}

export default function Home() {
    const [todos, setTodos] = useState<TodoType[]>([])
    useEffect(() => {
        const getTodo = async () => {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todo`)
            const data = await res.json()
            console.log(data)
            setTodos(data)
        }
        getTodo()
    }, [])
    return (
        <>
            <div>
                <h1>SELECT</h1>
            </div>
            {todos.map((todo) => (
                <div key={todo.id}>
                    <h2>
                        {todo.id}:{todo.title}
                    </h2>
                </div>
            ))}
        </>
    )
}
