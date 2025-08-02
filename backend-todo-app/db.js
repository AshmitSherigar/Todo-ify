require("dotenv").config();
const mongoose = require("mongoose")
mongoose.connect(process.env.MONGODB_URI)

const todoSchema = mongoose.Schema({
    title: String,
    description: String,
    dueDate : String,
    createdDate : String,
    completed: {
        type: Boolean,
        default: false
    }
});

const Todo = mongoose.model("Todos", todoSchema)

module.exports = { Todo }