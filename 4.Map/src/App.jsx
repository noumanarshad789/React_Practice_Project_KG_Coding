import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'

function App() {
  const vegetables = [
    "Carrot",
    "Broccoli",
    "Spinach",
    "Potato",
    "Tomato",
    "Onion",
    "Garlic",
    "Cabbage",
    "Cauliflower",
    "Lettuce",
    "Cucumber",
    "Pumpkin",
    "Radish",
    "Beetroot",
    "Bell Pepper",
    "Zucchini",
    "Eggplant",
    "Mushroom",
    "Green Peas",
    "Celery",
    "Asparagus",
    "Corn",
    "Leek",
    "Okra",
    "Turnip"
  ];

  return (
    <>
     <h1>Vegetable Names</h1>
      <ul className='list-group'>
        {vegetables.map((item) => <li className='list-group-item'>{item}</li>) }
      </ul>

    </>
  )
}

export default App
