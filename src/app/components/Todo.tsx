import { todo } from '@prisma/client'
import React, { useState } from 'react'

type Props = {
    todo: todo
}

const Todo: React.FC<Props> = ({ todo }) => {
    const [isEdit, setIsEdit] = useState<boolean>(false)
    return (
        <>
            {isEdit ? (
                <input type="text" value={todo.id} />
            ) : (
                <div onDoubleClick={() => setIsEdit(!isEdit)}>{todo.id}</div>
            )}
        </>
    )
}

export default Todo
