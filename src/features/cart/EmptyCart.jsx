import LinkButton from "../../UI/LinkButton";

function EmptyCart() {
  return (
    <div className="text-center my-40 text-2xl">
      <LinkButton to="/menu">&larr; Back to menu</LinkButton>

      <p className="mt-8">
        Your cart is still empty. Start adding some pizzas :)
      </p>
    </div>
  );
}

export default EmptyCart;
