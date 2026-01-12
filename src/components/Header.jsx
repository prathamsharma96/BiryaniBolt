import { Link } from "react-router-dom";
import { LOGO } from "../utils/constant.js";
import useOnlineStatus from "../utils/useOnlineStatus.js";

const Header = () => {
  const isOnline = useOnlineStatus();

  return (
    <header className="sticky top-0 z-50 bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo + Title */}
        <div className="flex items-center gap-3">
          <img
            src={LOGO}
            alt="App Logo"
            className="h-12 w-12 rounded-full object-cover"
          />
          <h1 className="text-xl font-bold tracking-wide text-gray-800">
            Pratham&apos;s Cafe
          </h1>
        </div>

        {/* Navigation */}
        <nav>
          <ul className="flex items-center gap-6 text-gray-700 font-medium">
            {/* Online Status */}
            <li className="flex items-center gap-2 text-sm">
              <span>Status</span>
              {isOnline === "true" ? (
                <span className="text-green-600">● Online</span>
              ) : (
                <span className="text-red-500">● Offline</span>
              )}
            </li>

            <li>
              <Link to="/" className="hover:text-orange-500 transition-colors">
                Home
              </Link>
            </li>

            <li>
              <Link
                to="/about"
                className="hover:text-orange-500 transition-colors"
              >
                About
              </Link>
            </li>

            <li>
              <Link
                to="/contact"
                className="hover:text-orange-500 transition-colors"
              >
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/grocery"
                className="hover:text-orange-500 transition-colors"
              >
                Grocery
              </Link>
            </li>

            {/* Cart Button */}
            <li>
              <a
                href="#"
                className="rounded-full bg-orange-500 px-4 py-2 text-white hover:bg-orange-600 transition-all"
              >
                Cart 🛒
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
