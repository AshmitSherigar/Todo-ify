import React, { useState } from 'react'
import ToastNotification from './ToastNotification';
import { useEffect } from 'react';
import { use } from 'react';
import { createTodo } from '../api/todoAPI';

const CreateTodo = ({ refreshTodo, theme }) => {

    const maxChar = 50
    const [title, setTitle] = useState("")
    const [currentLength, setCurrentLength] = useState(0)
    const [description, setDescription] = useState("")
    const [date, setDate] = useState('')
    const [toastMessage, setToastMessage] = useState({ text: "", type: "" });

    useEffect(() => {
        const savedTitle = sessionStorage.getItem("todo-title")
        const savedDescription = sessionStorage.getItem("todo-description")
        const savedDate = sessionStorage.getItem("todo-date")

        if (savedTitle) setTitle(savedTitle)
        if (savedDescription) setDescription(savedDescription)
        if (savedDate) setDate(savedDate)
    }, [])

    useEffect(() => {
        sessionStorage.setItem("todo-title", title)
        sessionStorage.setItem("todo-description", description)
        sessionStorage.setItem("todo-date", date)
    }, [title, description, date])

    useEffect(() => {
        setCurrentLength(description.length)
    }, [description])

    function onClickHandler() {
        setToastMessage({ text: "", type: "" });

        console.log(date);
        console.log(title);
        console.log(description);

        setTimeout(() => {
            if (title && description && date) {
                const today = new Date()
                const createdDate = `${(today.getFullYear())}-${String((today.getMonth() + 1)).padStart(2,'0')}-${String((today.getDate() + 1)).padStart(2,'0')}`
                
                createTodo(title, description, date, createdDate , setTitle, setDescription, setToastMessage)
                    .then(() => refreshTodo())

            } else {
                setToastMessage({ text: "Please make sure all the Title and Description and Date fields are filled before submitting", type: "error" });
            }
        }, 50);
    }

    return (

        <div className={`container relative h-[92vh] w-full flex items-center flex-col justify-center ${theme ? "text-slate-50 bg-slate-800" : "text-gray-800 bg-slate-100"}`}>
            <h1 tabIndex={0} className="text-3xl lg:text-4xl font-extrabold mb-2">Welcome to Todo-ify</h1>
            <div className={`box h-[45vh] w-[80vw] lg:h-[60vh] lg:w-[45vw] flex items-center justify-center flex-col gap-3 border-2 ${theme ? "bg-slate-900 border-slate-700" : "bg-white border-slate-200"}`}>

                {/* Title */}
                <div className='relative w-[70vw] lg:w-[40vw]'>
                    <label role='form' aria-describedby='form-heading' htmlFor="title" className='text-xl lg:text-2xl'>Title :</label>
                    <input
                        aria-label='Enter a Title'
                        type="text"
                        id='title'
                        className="h-[6vh] w-full px-3 border rounded-xl"
                        value={title}
                        onChange={function (el) { setTitle(el.target.value) }}
                        placeholder='Title' />
                </div>
                {/* Description */}
                <div className="relative w-[70vw] lg:w-[40vw]">
                    <label role='form' aria-describedby='form-heading' htmlFor="description" className='text-xl lg:text-2xl'>Description :</label>
                    <input
                        type="text"
                        aria-label='Enter a Description'
                        id="description"
                        maxLength={maxChar}
                        value={description}
                        onChange={(el) => setDescription(el.target.value)}
                        placeholder="Description"
                        className="h-[6vh] w-full px-3 pr-16 border rounded-xl"
                    />

                    <p aria-live='polite' className={`text-right text-xs ${currentLength == maxChar ? "text-red-500" : "text-gray-500"}  pointer-events-none`}>
                        {currentLength} / {maxChar}
                    </p>
                </div>
                <div className='relative w-[70vw] lg:w-[40vw] flex items-center justify-between'>
                    <label role='form' aria-describedby='form-heading' htmlFor="date" className='text-xl lg:text-2xl'>Due date :</label>
                    <input
                        aria-label='Enter your Due Date'
                        type="date"
                        id='date'
                        className="h-[6vh] lg:w-[40%] px-3 border rounded"
                        onChange={function (el) { setDate(el.target.value) }}
                    />
                </div>

                <button onClick={onClickHandler} aria-label="Add a new todo" className='px-10 py-2 mt-6 rounded border bg-blue-400 hover:bg-blue-500 active:scale-95 font-semibold'>Add a Todo</button>
                {toastMessage.text && <ToastNotification text={toastMessage.text} type={toastMessage.type} />}

            </div>
        </div>


    )
}
export default CreateTodo

