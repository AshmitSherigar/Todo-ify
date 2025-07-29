

export async function fetchTodo(setTodos) {
    fetch("http://localhost:3001/todos")
        .then(async (res) => {
            const json = await res.json()
            setTodos(json.Todos)
        })
        .catch(err => console.error("Here is the error : ", err))
}



export async function renderTodo(setToastMessage) {
    fetch("http://localhost:3001/completed", {
        method: "PUT",
        body: JSON.stringify({
            id
        }),
        headers: {
            "Content-Type": "application/json"
        }
    })
        .then(async (_res) => {
            setToastMessage("Todo has been marked as completed ! Congrats on completing your task .")
        });


}
export async function createTodo(setTitle, setDescription, setToastMessage) {
    fetch("http://localhost:3001/todo", {
        method: "POST",
        body: JSON.stringify({
            title,
            description,
        }),
        headers: {
            "Content-Type": "application/json",
        },
    }).then(async (_res) => {
        setTitle("")
        setDescription("")
        setToastMessage({ text: "Your TODO was successfully created and added to the list!", type: "success" });
    });
}