import Button from "../../UI/Button";
import { formatCurrency } from "../../utils/helpers";

function CartItem({ item }) {
  const { pizzaId, name, quantity, totalPrice } = item;

  return (
    <li className="sm:flex sm:items-center sm:justify-between">
      <p className="text-2xl">
        {quantity}&times; {name}
      </p>
      <div className="flex items-center justify-between gap-4 my-3">
        <p className="text-md">{formatCurrency(totalPrice)}</p>
        <Button type="small">Delete</Button>
      </div>
    </li>
  );
}

export default CartItem;
