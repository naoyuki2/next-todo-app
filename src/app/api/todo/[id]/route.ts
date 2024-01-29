import { todo as TodoType } from '@prisma/client'
import prisma from '../../lib/prisma'
import { NextResponse } from 'next/server'

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } },
) {
    console.log('DELETEします')
    const id = Number(params.id)
    try {
        const todo: TodoType = await prisma.todo.delete({
            where: {
                id: id,
            },
        })
        return NextResponse.json(todo)
    } catch (error) {
        return NextResponse.json(error)
    }
}

export async function PATCH(
    request: Request,
    { params }: { params: { id: string } },
) {
    console.log('PATCHします')
    const body = await request.json()
    const id = Number(params.id)
    try {
        const todo: TodoType = await prisma.todo.update({
            where: {
                id: id,
            },
            data: {
                isDone: body.isDone,
            },
        })
        return NextResponse.json(todo)
    } catch (error) {
        return NextResponse.json(error)
    }
}
