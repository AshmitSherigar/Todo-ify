import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

const NavigationBar = ({ onThemeHandler , theme}) => {



  return (
    <div className={`h-[8vh] w-full ${theme ? "bg-slate-900 text-slate-50" : "bg-slate-50 text-slate-900"}`}>
      NavigationBar

      <button onClick={onThemeHandler}>Dark Mode</button>

    </div>
  )
}

export default NavigationBar