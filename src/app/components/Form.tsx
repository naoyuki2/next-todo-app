'use client'

import { useState } from 'react'
import { postTodo } from '../utils/api'
import { useRouter } from 'next/navigation'

const Form = () => {
    const router = useRouter()

    const [inputVal, setInputVal] = useState<string>('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!inputVal) return alert('タスク名を入力してください')
        await postTodo(inputVal)
        setInputVal('')
        router.refresh()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    value={inputVal}
                    placeholder="タスク名を入力してください"
                    onChange={(e) => setInputVal(e.target.value)}
                />
                <button>追加</button>
            </form>
        </>
    )
}

export default Form
