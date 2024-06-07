import { useDispatch, useSelector } from "react-redux";
import { formatCurrency } from "../../utils/helpers";
import DeleteItem from "./DelteItem";
import UpdateItem from "./UpdateItem";
import { getCurrentQuantity } from "./cartSlice";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  const currentQuantity = useSelector(getCurrentQuantity(pizzaId));

  return (
    <li className="sm:flex sm:items-center sm:justify-between">
      <p className="text-2xl">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-4 my-3">
        <p className="text-md">{formatCurrency(totalPrice)}</p>
        <UpdateItem pizzaId={pizzaId} currentQuantity={currentQuantity} />
        <DeleteItem pizzaId={pizzaId} />
      </div>
    </li>
  );
}

export default CartItem;
