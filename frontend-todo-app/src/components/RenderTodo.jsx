import React, { useState } from 'react';
import Toast from './ToastNotification';
import { renderTodo } from "../api/todoAPI";

const RenderTodo = ({ todos, refreshTodo }) => {
    const [toastMessage, setToastMessage] = useState("")

    function onClickHandler(id) {
        setToastMessage("")


        renderTodo(id, setToastMessage)
            .then(() => refreshTodo())


    }

    return (
        <main className='min-h-[100vh] w-full bg-slate-100 '>
            <div className='mb-10'>
                <h1>Lorem ipsum dolor sit.</h1>
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sapiente adipisci omnis at recusandae sunt! Fuga.</p>
            </div>
            <div className='flex flex-wrap justify-center gap-x-5 gap-y-5 w-full mx-auto"'>
                {
                    todos.map(function (todo, index) {


                        return <div key={index} className='tabs h-[30vh] py-5 rounded-xl w-[30vw]  bg-white flex items-center justify-between flex-col'>
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