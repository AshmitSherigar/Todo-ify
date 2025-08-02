const zod = require("zod")

const createTodo = zod.object({ title: zod.string(), description: zod.string() , dueDate: zod.string().regex(/^\d{4}-\d{2}-\d{2}$/,"Must be in YYYY-MM-DD format") , createdDate : zod.string().regex(/^\d{4}-\d{2}-\d{2}$/,"Error in System") })
const updateTodo = zod.object({ id: zod.string()})

 

module.exports = {
    createTodo : createTodo,
    updateTodo : updateTodo
}