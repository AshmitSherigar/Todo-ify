
const express = require("express")
const cors = require("cors")
const app = express();
const PORT = process.env.PORT || 3001;
const { createTodo, updateTodo } = require("./types")
const { Todo } = require("./db")


// Middleware
app.use(express.json());
app.use(cors())

app.post('/todo', async (req, res) => {
    const createPayload = req.body
    
    const parsedPayload = createTodo.safeParse(createPayload)
    if (!parsedPayload.success) {
        console.log("Zod Error:", parsedPayload.error);
        res.status(411).json({ message: "You sent the wrong input" })
        return;
    }
    const title = parsedPayload.data.title

    const description = parsedPayload.data.description

    const dueDate = parsedPayload.data.dueDate

    const createdDate = parsedPayload.data.createdDate

    const postTodo = await Todo.create({
        title,
        description,
        dueDate,
        createdDate
    })

    res.status(200).json({ message: "Sent to mongoDB" });
});
app.get('/todos', async (req, res) => {

    const getTodo = await Todo.find()
    res.json({ Todos: getTodo })

});
app.put('/completed', async (req, res) => {
    const updatePayload = req.body
    const parsedPayload = updateTodo.safeParse(updatePayload)

    if (!parsedPayload.success) {
        res.status(411).json({ message: "You sent the wrong input" })
        return;
    }
    const uid = parsedPayload.data.id

    const putTodo = await Todo.updateOne(
        { _id: uid },                           // filter
        { $set: { completed: true } }          // update
    )


    res.status(200).json({ message: "updated to mongoDB" });
});

// Start server
app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server is running on http://0.0.0.0:${PORT}`);
});
