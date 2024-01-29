'use client'

import { useEffect, useState } from 'react'
import { todo } from '@prisma/client'
import * as Todo from '@features/todo/components/Index'
import * as TodoAPI from '@features/todo/api/Index'

export default async function Home() {
    const todos: todo[] = await TodoAPI.getTodos()

    return (
        <>
            <Todo.TodoInput />
            <Todo.TodoList todos={todos} />
        </>
    )
}
