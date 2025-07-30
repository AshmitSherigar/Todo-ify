import React, { useState } from 'react';
import Toast from './ToastNotification';
import { renderTodo } from "../api/todoAPI";

const RenderTodo = ({ todos, refreshTodo, theme }) => {
    const [toastMessage, setToastMessage] = useState("")

    function onClickHandler(id) {
        setToastMessage("")


        renderTodo(id, setToastMessage)
            .then(() => refreshTodo())


    }

    return (
        <main className={`min-h-[100vh] w-full ${theme ? "bg-slate-800" : "bg-slate-100"}  `}>
            <div className="mb-10 text-center">
                <h1 className={`${theme ? "text-gray-50" : "text-gray-800"} text-4xl font-bold mb-2`}>Here are your todo -- Todoify them </h1>
                <p className={` ${theme ? "text-gray-400" : "text-gray-600"}`}>
                    Organize your tasks, stay productive, and track your progress easily.
                </p>
            </div>

            <div className='flex flex-wrap justify-center gap-x-5 gap-y-5 w-full mx-auto"'>
                {
                    todos.map(function (todo, index) {


                        return <div key={index} className={`tabs h-[30vh] py-5 rounded-xl w-[30vw] ${theme ? "bg-slate-900 text-slate-100" : "bg-white text-slate-800"}  flex items-center justify-between flex-col`}>
                            <h1>{todo.title}</h1>
                            <p>{todo.description}</p>
                            <button className={`px-10 rounded py-2 active:scale-95 ${todo.completed ? "hover:bg-green-500" : "hover:bg-red-600"} ${todo.completed ? "bg-green-400" : "bg-red-500"}`} onClick={() => onClickHandler(todo._id)}>{todo.completed ? "Completed" : "Mark as Completed"}</button>
                        </div>
                    })
                }
            </div>
            {toastMessage && <Toast text={toastMessage} />}

        </main>

    )
}

export default RenderTodo