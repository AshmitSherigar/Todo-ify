

export async function fetchTodo(setTodos) {
    fetch("http://localhost:3001/todos")
        .then(async (res) => {
            const json = await res.json()
            setTodos(json.Todos)
        })
        .catch(err => console.error("Here is the error : ", err))
}



export function createTodo(title, description, setTitle, setDescription, setToastMessage) {
    return fetch("http://localhost:3001/todo", {
        method: "POST",
        body: JSON.stringify({ title, description }),
        headers: { "Content-Type": "application/json" },
    }).then(async (_res) => {
        setToastMessage({ text: "Todo created!", type: "success" });
        setTitle("");
        setDescription("");
    });
}

export function renderTodo(id, setToastMessage) {
    return fetch("http://localhost:3001/completed", {
        method: "PUT",
        body: JSON.stringify({ id }),
        headers: { "Content-Type": "application/json" },
    }).then(async (_res) => {
        setToastMessage("Todo marked as completed!");
    });
}
