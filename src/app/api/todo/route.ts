import { todo as TodoType } from '@prisma/client'
import prisma from '../lib/prisma'
import { NextResponse } from 'next/server'

export async function GET() {
    try {
        console.log('GETします')
        const todos: TodoType[] = await prisma.todo.findMany()
        return NextResponse.json(todos)
    } catch (error) {
        return NextResponse.json(error)
    }
}

export async function POST(request: Request) {
    console.log('POSTします')
    const body = await request.json()
    try {
        const todo: TodoType = await prisma.todo.create({
            data: {
                title: body.title,
            },
        })
        return NextResponse.json(todo)
    } catch (error) {
        return NextResponse.json(error)
    }
}
