import React, { useState, useEffect } from 'react'
import CreateTodo from './components/CreateTodo'
import RenderTodo from './components/RenderTodo'
import NavigationBar from './components/NavigationBar'
import { fetchTodo } from "../src/api/todoAPI";
const App = () => {
  const [todos, setTodos] = useState([])

  //Navigation Bar
  const [theme, setTheme] = useState(false)
  function onThemeHandler() {
    setTheme(!theme)
  }



  //This functions fetches the todos to render on screen and also each time TODO is added or updated
  function refreshTodo() {
    fetchTodo(setTodos)

  }
  useEffect(() => {

    refreshTodo()



  }, [])



  return (
    <div>
      <NavigationBar onThemeHandler={onThemeHandler} theme={theme} />
      <CreateTodo refreshTodo={refreshTodo} theme={theme} />
      <RenderTodo todos={todos} refreshTodo={refreshTodo} theme={theme} />
    </div>
  )
}

export default App