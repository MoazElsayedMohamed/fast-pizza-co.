import { Link } from "react-router-dom";
import SearchOrder from "../features/order/SearchOrder";
import UserName from "../features/user/UserName";

function Header() {
  return (
    <header className="flex items-center justify-between sm:px-8 bg-yellow-500 uppercase px-4 py-4 border-b border-stone-700">
      <Link to="/" className="tracking-widest text-2xl">
        Fast React Pizza Co.
      </Link>
      <SearchOrder />
      <UserName />
    </header>
  );
}

export default Header;
