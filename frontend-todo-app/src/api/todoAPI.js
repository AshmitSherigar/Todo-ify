
const BASE_URL = import.meta.env.VITE_API_BASE_URL;

export async function fetchTodo(setTodos) {
    fetch(`${BASE_URL}/todos`)
        .then(async (res) => {
            const json = await res.json()
            setTodos(json.Todos)
        })
        .catch(err => console.error("Here is the error : ", err))
}



export function createTodo(title, description, setTitle, setDescription, setToastMessage) {
    return fetch(`${BASE_URL}/todo`, {
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
    return fetch(`${BASE_URL}/completed`, {
        method: "PUT",
        body: JSON.stringify({ id }),
        headers: { "Content-Type": "application/json" },
    }).then(async (_res) => {
        setToastMessage("Todo marked as completed!");
    });
}
