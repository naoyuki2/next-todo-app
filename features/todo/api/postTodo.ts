const postTodo = async (inputVal: string) => {
    const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/todo`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            title: inputVal,
        }),
    })
    const postTodo = await res.json()

    return postTodo
}

export default postTodo
