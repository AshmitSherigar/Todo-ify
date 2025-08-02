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
                <h1 tabIndex={0} className={`${theme ? "text-gray-50" : "text-gray-800"} text-4xl font-bold mb-4 lg:mb-2`}>Here are your todo -- Todoify them </h1>
                <p tabIndex={0} className={` ${theme ? "text-gray-400" : "text-gray-600"}`}>
                    Organize your tasks, stay productive, and track your progress easily.
                </p>
            </div>

            <div className='flex flex-wrap justify-center gap-x-5 gap-y-5 w-full mx-auto'>
                {
                    todos.map(function (todo, index) {

                        {console.log(todo.createdDate);}
                        


                        return <div key={todo._id} aria-label={`Todo Number : ${index + 1}`} tabIndex={0} className={`tabs  border h-[30vh] py-5 rounded-xl w-[70vw] lg:w-[30vw] ${theme ? "bg-slate-900 text-slate-100" : "bg-white text-slate-800"}  flex items-center justify-between flex-col`}>
                            <h1 className='lg:text-2xl text-xl' tabIndex={0}>{todo.title}</h1>
                            <p className='lg:text-lg text-sm' tabIndex={0}>{todo.description}</p>
                            <div className='flex items-center justify-between lg:w-[70%] w-[97%]'>
                                <p tabIndex={0} className='text-xs italic'>Created at {todo.createdDate}</p>
                                <p tabIndex={0} className='text-xs italic'>Due at {todo.dueDate}</p>
                            </div>
                            <button aria-label={`${todo.completed ? "Current todo is marked completed" : "Mark this todo as completed"}`} className={`px-10 rounded py-2 border active:scale-95 ${todo.completed ? "hover:bg-green-500" : "hover:bg-red-600"} ${todo.completed ? "bg-green-400" : "bg-red-500"}`} onClick={() => onClickHandler(todo._id)}>{todo.completed ? "Completed" : "Mark as Completed"}</button>
                        </div>
                    })
                }
            </div>
            {toastMessage && <Toast text={toastMessage} />}

        </main>

    )
}

export default RenderTodo