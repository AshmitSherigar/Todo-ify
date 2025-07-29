import React, { useState, useEffect } from 'react'
import CreateTodo from './components/CreateTodo'
import RenderTodo from './components/RenderTodo'
import NavigationBar from './components/NavigationBar'
import { fetchTodo } from "../src/api/todoAPI";
const App = () => {
  const [todos, setTodos] = useState([])


  useEffect(() => {

    fetchTodo(setTodos)


  }, [])



  return (
    <div>
      <NavigationBar />
      <CreateTodo />
      <RenderTodo todos={todos} />
    </div>
  )
}

export default App