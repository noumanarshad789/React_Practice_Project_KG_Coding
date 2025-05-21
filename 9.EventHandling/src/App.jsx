import 'bootstrap/dist/css/bootstrap.min.css'
import Heading from './components/Heading';
import ErrorMessage from './components/ErrorMessage';
import FoodItems from './components/FoodItems';
import './App.css'
import Container from './components/Container';
import FoodInput from './components/FoodInput';

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
    <Container>
      <Heading></Heading>
      <ErrorMessage items = {foodItems}></ErrorMessage>
      <FoodInput />
      <FoodItems items = {foodItems}></FoodItems>

    </Container>
  )
}

export default App
