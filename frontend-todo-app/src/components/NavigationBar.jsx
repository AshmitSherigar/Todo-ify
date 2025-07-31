import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const NavigationBar = ({ onThemeHandler, theme }) => {



  return (
    <nav className={`h-[8vh] w-full px-4 ${theme ? "bg-slate-900 text-slate-50" : "bg-slate-50 text-slate-900"} flex items-center justify-between`}>


      <h1 tabIndex={0} className='text-2xl lg:text-3xl'>Todo-ify</h1>

      <button className={`px-3 rounded-2xl py-2 ${theme ? "bg-slate-600 text-slate-50" : "bg-slate-600 text-slate-50"} aria-label="Change the theme" `} onClick={onThemeHandler}>Dark Mode</button>
      <div aria-live="polite" className="sr-only">
        {theme ? "Dark mode enabled" : "Light mode enabled"}
      </div>

    </nav>
  )
}

export default NavigationBar