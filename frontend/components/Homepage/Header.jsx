import { User } from "lucide-react";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <div className="max-w-[1280px] w-full mx-auto h-auto px-4 py-3 rounded-md flex justify-between items-center">
      <h1 className="text-xl font-semibold">Book Review Platform</h1>

      <div className="flex justify-evenly items-center gap-10">
        <Link to={"/"} className="cursor-pointer">
          Home
        </Link>
        <a className="cursor-pointer">Books</a>
        <a className="cursor-pointer">Reviews</a>
      </div>

      <div>
        <div className="flex items-center justify-center gap-2">
          <User />
          <h1>User profile</h1>
        </div>
      </div>
    </div>
  );
};

export default Header;
