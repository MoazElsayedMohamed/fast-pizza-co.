import { useDispatch, useSelector } from "react-redux";
import Button from "../../UI/Button";
import { decreaseQuantity, getCart, increaseQuantity } from "./cartSlice";

function UpdateItem({ pizzaId, currentQuantity }) {
  const dispatch = useDispatch();

  function handleDecQuantity() {
    dispatch(decreaseQuantity(pizzaId));
  }
  function handleIncQuantity() {
    dispatch(increaseQuantity(pizzaId));
  }

  return (
    <div className="flex gap-2 items-center">
      <Button type="round" onClick={handleDecQuantity}>
        -
      </Button>
      <span>{currentQuantity}</span>
      <Button type="round" onClick={handleIncQuantity}>
        +
      </Button>
    </div>
  );
}

export default UpdateItem;
