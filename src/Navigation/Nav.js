import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import { Link } from "react-router-dom";

import "./Nav.css";

function Nav({ handleInputChange, query }) {
  return (
    <nav className="sticky">
      <Link to="/" className="logo-container">
        <h1>🛒</h1>
      </Link>
      <div className="nav-container">
        <input
          type="text"
          className="search-input"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes"
        />
      </div>

      <div className="profile-container">
        <Link to="/favourite">
          <FiHeart className="nav-icons" />
        </Link>

        <Link to="/cart">
          <AiOutlineShoppingCart className="nav-icons" />
        </Link>

        <Link to="/account">
          <AiOutlineUserAdd className="nav-icons" />
        </Link>
      </div>
    </nav>
  );
}

export default Nav;
