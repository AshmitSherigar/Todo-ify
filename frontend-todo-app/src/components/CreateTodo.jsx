import React, { useState } from 'react'
import ToastNotification from './ToastNotification';
import { useEffect } from 'react';
import { use } from 'react';
import { createTodo } from '../api/todoAPI';

const CreateTodo = ({ refreshTodo , theme }) => {

    const maxChar = 50
    const [title, setTitle] = useState("")
    const [currentLength, setCurrentLength] = useState(0)
    const [description, setDescription] = useState("")
    const [toastMessage, setToastMessage] = useState({ text: "", type: "" });

    useEffect(() => {
        const savedTitle = sessionStorage.getItem("todo-title")
        const savedDescription = sessionStorage.getItem("todo-description")

        if (savedTitle) setTitle(savedTitle)
        if (savedDescription) setDescription(savedDescription)


    }, [])

    useEffect(() => {
        sessionStorage.setItem("todo-title", title)
        sessionStorage.setItem("todo-description", description)

    }, [title, description])

    useEffect(() => {

        setCurrentLength(description.length)



    }, [description])

    function onClickHandler() {
        setToastMessage({ text: "", type: "" });
        setTimeout(() => {
            if (title && description) {
                createTodo(title, description, setTitle, setDescription, setToastMessage)
                    .then(() => refreshTodo())

            } else {
                setToastMessage({ text: "Please make sure both the Title and Description fields are filled before submitting", type: "error" });
            }
        }, 50);
    }

    return (

        <div className={`container relative h-[92vh] w-full flex items-center flex-col justify-center ${theme ? "text-slate-50 bg-slate-800" : "text-gray-800 bg-slate-100"}`}>
            <h1 className="text-4xl font-extrabold mb-2">Welcome to Todo-ify</h1>
            <div className={`box h-[60vh] w-[45vw] flex items-center justify-center flex-col gap-3 border-2 ${theme ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`}>

                {/* Title */}
                <div className='relative w-[30vw]'>
                    <label htmlFor="title" className='text-2xl'>Title :</label>
                    <input
                        type="text"
                        id='title'
                        className="h-[6vh] w-[30vw] px-3 border rounded"
                        value={title}
                        onChange={function (el) { setTitle(el.target.value) }}
                        placeholder='Title' />
                </div>
                {/* Description */}
                <div className="relative w-[30vw]">
                    <label htmlFor="description" className='text-2xl'>Description :</label>
                    <input
                        type="text"
                        id="description"
                        maxLength={maxChar}
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                        placeholder="Description"
                        className="h-[6vh] w-full px-3 pr-16 border rounded"
                    />
                    <p className={`text-right text-xs ${currentLength == maxChar ? "text-red-500" : "text-gray-500"}  pointer-events-none`}>
                        {currentLength} / {maxChar}
                    </p>
                </div>

                <button onClick={onClickHandler} className='px-10 py-2 rounded bg-blue-400 hover:bg-blue-500 active:scale-95 font-semibold'>Add a Todo</button>
                {toastMessage.text && <ToastNotification text={toastMessage.text} type={toastMessage.type} />}

            </div>
        </div>


    )
}
export default CreateTodo

