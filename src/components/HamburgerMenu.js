import { Link } from "react-router-dom";
import { clearToken } from "./Auth/UserToken";
import { slide as Menu } from "react-burger-menu";

import "./hamburger.css";

const HamburgerMenu = () => {
  return (
    <Menu noOverlay>
      <div className="menu-item">
        <Link to="/home">Home</Link>

        <Link to="/searchdrinks">Search Drinks</Link>

        <Link to="/random">Random</Link>

        <Link to="/favorites">Favorites</Link>

        <Link to="/" onClick={clearToken}>
          Logout
        </Link>
      </div>
    </Menu>
  );
};

export default HamburgerMenu;
