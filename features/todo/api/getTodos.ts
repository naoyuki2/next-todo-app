const getTodos = async () => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todo`, {
        cache: 'no-store',
    })
    const todos = await res.json()

    return todos
}

export default getTodos
