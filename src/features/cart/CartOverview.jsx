import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getTotalCartPrice, getTotalCartQuantity } from "./cartSlice";
import { formatCurrency } from "../../utils/helpers";

function CartOverview() {
  const totalQuantity = useSelector(getTotalCartQuantity);
  const totalPrice = useSelector(getTotalCartPrice);

  if (!totalQuantity) return null;

  return (
    <div className="flex items-center justify-between text-sm md:text-base sm:px-6 bg-stone-800 text-stone-200 uppercase px-4 py-4">
      <p className="sm:space-x-6 text-stone-300 space-x-4 font-semibold">
        <span>{totalQuantity} pizzas</span>
        <span>{formatCurrency(totalPrice)}</span>
      </p>
      <Link to="/cart">Open cart &rarr;</Link>
    </div>
  );
}

export default CartOverview;
