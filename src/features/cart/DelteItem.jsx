import { useDispatch } from "react-redux";
import { deleteItem } from "./cartSlice";
import Button from "../../UI/Button";

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  function handleDelete() {
    dispatch(deleteItem(pizzaId));
  }

  return (
    <Button type="small" onClick={handleDelete}>
      Delete
    </Button>
  );
}

export default DeleteItem;
