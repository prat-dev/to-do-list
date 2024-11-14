import Item from "./Item";

const FoodItems = ({items}) =>{
  let [activeItems, SetActiveitems] =useState([]);
    return(
    <ul className="list-group">
    {items.map((item) => (
     <Item key={item}foodItem={item} 
     bought={true}
     handleBuyButton={() => console.log(`${item} bought`)} ></Item>
    ))}
  </ul>
);

};

export default FoodItems