import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import FoodItems from "./Components/FoodItems";
import ErrorMessage from "./Components/ErrorMessage";
import Container from "./Components/Container";
import Foodinput from "./Components/Foodinput"
import { useState } from "react";
function App() {
 //let foodItems = ["Dal", "Vegetable", "Milk", "Rice", "Wheat","Ghee"];


 //let [textToShow, setTextState] = useState();
 let [foodItems, setFoodItems] =useState([
  "Salad","Greesn veges","Roti"
 ]);
 

 const onKeyDown =(event)=>{
  if (event.key==='Enter'){
    let newFoodItem = event.target.value;
    let newItems = [...foodItems,newFoodItem];
    setFoodItems(newItems);
    console.log('Food value entered is ' +newFoodItem)
  }

 };


 
  return (
      <>
    <Container>
      <h1 className="food-heading"> Healthy Food</h1>
      <Foodinput handleKeyDown={onKeyDown}></Foodinput>
     <ErrorMessage items={foodItems}></ErrorMessage>
      <FoodItems items={foodItems}></FoodItems>
      </Container>

<Container>
  <p>Above is the list of healthy foods that are good for your health and well being</p>
</Container>
</>
  );
}

export default App;
