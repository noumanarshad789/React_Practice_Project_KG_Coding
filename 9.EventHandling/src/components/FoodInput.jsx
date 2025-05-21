import React from 'react'
import style from "./FoodInput.module.css"


export default function FoodInput() {

  const handleOnChange = (event) =>{
    console.log(event.target.value)
  }
  return (
    <input 
    type="text" 
    className={style.foodInput} 
    placeholder='Enter Food item here:'
    onChange={handleOnChange}
    />
  )
}
