import { todo } from '@prisma/client'
import prisma from '../../lib/prisma'
import { NextResponse } from 'next/server'

export async function PATCH(request: Request) {
    // todoテーブルのレコードを更新
    const body = await request.json()
    try {
        const todo: todo = await prisma.todo.update({
            where: {
                id: body.id,
            },
            data: {
                title: body.title,
            },
        })
        return NextResponse.json(todo)
    } catch (error) {
        return NextResponse.json(error)
    }
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } },
) {
    // todoテーブルのレコードを削除
    // console.log(request)
    console.log(params)
    const id = Number(params.id)
    try {
        const todo: todo = await prisma.todo.delete({
            where: {
                id: id,
            },
        })
        return NextResponse.json(todo)
    } catch (error) {
        return NextResponse.json(error)
    }
}
