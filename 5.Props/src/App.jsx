import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import Heading from './components/Heading';
import ErrorMessage from './components/ErrorMessage';
import FoodItems from './components/FoodItems';


function App() {
  // const vegetables = []
  const foodItems = [
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
     <Heading></Heading>
      <ErrorMessage items = {foodItems}></ErrorMessage>
      <FoodItems items = {foodItems}></FoodItems>

    </>
  )
}

export default App
