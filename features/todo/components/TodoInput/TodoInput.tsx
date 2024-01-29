'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import * as TodoAPI from '../../api/Index'

const Form = () => {
    const router = useRouter()
    const [inputVal, setInputVal] = useState<string>('')
    const [errorMessage, setErrorMessage] = useState<string>('')

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if (!inputVal) {
            setErrorMessage('タスク名を入力してください')
            return
        }
        await TodoAPI.postTodo(inputVal)
        setInputVal('')
        router.refresh()
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    name="title"
                    value={inputVal}
                    placeholder="タスク名を入力"
                    onChange={(e) => setInputVal(e.target.value)}
                />
                <button>追加</button>
                {errorMessage && <p className="text-red-400">{errorMessage}</p>}
            </form>
        </>
    )
}

export default Form
