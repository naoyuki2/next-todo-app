import { PrismaClient, todo } from '@prisma/client'
import { NextResponse } from 'next/server'

const prisma = new PrismaClient()

export async function GET() {
    // todoテーブルから全件取得
    try {
        const todos: todo[] = await prisma.todo.findMany()
        return NextResponse.json(todos)
    } catch (error) {
        return NextResponse.json(error)
    }
}