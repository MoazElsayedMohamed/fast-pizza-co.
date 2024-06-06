import Button from "../../UI/Button";
import { formatCurrency } from "../../utils/helpers";

function MenuItem({ pizza }) {
  const { id, name, unitPrice, ingredients, soldOut, imageUrl } = pizza;

  return (
    <li className="flex items-center gap-4 py-2">
      <img
        src={imageUrl}
        alt={name}
        className={`h-36 ${soldOut ? " opacity-70 grayscale" : ""}`}
      />
      <div className="text-xl flex flex-col grow pt-0.5">
        <p className="font-medium">{name}</p>
        <p className="font-medium capitalize text-stone-500 italic">
          {ingredients.join(", ")}
        </p>
        <div className="mt-10 flex items-center justify-between">
          {!soldOut ? (
            <p className="text-sm">{formatCurrency(unitPrice)}</p>
          ) : (
            <p className="text-sm font-medium uppercase text-stone-500">
              Sold out
            </p>
          )}

          <Button type="small">Add to Cart</Button>
        </div>
      </div>
    </li>
  );
}

export default MenuItem;
