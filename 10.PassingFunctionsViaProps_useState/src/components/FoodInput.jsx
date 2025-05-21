import React from 'react'
import style from "./FoodInput.module.css"


export default function FoodInput({handleKeyDown}) {

  return (
    <input 
    type="text" 
    className={style.foodInput} 
    placeholder='Enter Food item here:'
    onKeyDown={handleKeyDown}
    />
  )
}
