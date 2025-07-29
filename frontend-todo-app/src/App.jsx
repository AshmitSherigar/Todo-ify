import React, { useState, useEffect } from 'react'
import CreateTodo from './components/CreateTodo'
import RenderTodo from './components/RenderTodo'
import NavigationBar from './components/NavigationBar'
import { fetchTodo } from "../src/api/todoAPI";
const App = () => {
  const [todos, setTodos] = useState([])

  function refreshTodo() {
    fetchTodo(setTodos)

  }
  useEffect(() => {

    refreshTodo()



  }, [])



  return (
    <div>
      <NavigationBar  />
      <CreateTodo refreshTodo={refreshTodo} />
      <RenderTodo todos={todos} refreshTodo={refreshTodo} />
    </div>
  )
}

export default App