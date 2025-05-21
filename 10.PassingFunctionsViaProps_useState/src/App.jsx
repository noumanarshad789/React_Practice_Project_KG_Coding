import 'bootstrap/dist/css/bootstrap.min.css'
import Heading from './components/Heading';
import ErrorMessage from './components/ErrorMessage';
import FoodItems from './components/FoodItems';
import './App.css'
import Container from './components/Container';
import FoodInput from './components/FoodInput';
import { useState } from 'react';

function App() {

  
  // const vegetables = []
  // const foodItems = [
  //   "Carrot",
  //   "Broccoli",
  //   "Spinach",
  //   "Potato",
  //   "Tomato",
  //   "Onion",
  //   "Garlic",
  //   "Cabbage",
  //   "Cauliflower",
  //   "Lettuce",
  //   "Cucumber",
  //   "Pumpkin",
  //   "Radish",
  //   "Beetroot",
  //   "Bell Pepper",
  //   "Zucchini",
  //   "Eggplant",
  //   "Mushroom",
  //   "Green Peas",
  //   "Celery",
  //   "Asparagus",
  //   "Corn",
  //   "Leek",
  //   "Okra",
  //   "Turnip"
  // ];

  const [foodItems,setFoodItems] = useState([]);

  const onKeyDown = (event) => {
    if (event.key === "Enter"){
      let newFoodItem = event.target.value;
      event.target.value = '';

      let newItem = [...foodItems, newFoodItem];
      setFoodItems(newItem);
    }
    // setShowItem(`New Item is: ${event.target.value}`)
  }

  return (
    <Container>
      <Heading></Heading>
      <FoodInput handleKeyDown={onKeyDown} />
      <ErrorMessage items = {foodItems}></ErrorMessage>
      {/* <p>{showItem}</p> */}
      <FoodItems items = {foodItems}></FoodItems>

    </Container>
  )
}

export default App
