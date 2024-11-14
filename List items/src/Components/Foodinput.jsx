import styles from "./Foodinput.module.css";
const FoodInput = ({handleKeyDown}) => {
  return (
    <input
      type="text"
      className={styles.foodinput}
      placeholder="Enter list items here"
      onKeyDown={handleKeyDown}
      />
  );
};

export default FoodInput;
