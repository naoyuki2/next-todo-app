const deleteTodo = async (id: number) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todo/${id}`, {
        method: 'DELETE',
    })
    const deleteTodo = await res.json()

    return deleteTodo
}

export default deleteTodo
