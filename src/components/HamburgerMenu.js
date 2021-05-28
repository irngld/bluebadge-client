import { slide as Menu } from "react-burger-menu";
import { clearToken } from "./Auth/UserToken";

import "./hamburger.css";

const HamburgerMenu = () => {
  return (
    <Menu className='hamburger'>
      <a id='home' className='menu-item' href='/home'>
        Home
      </a>
      <a id='search' className='menu-item' href='/searchdrinks'>
        Search Drinks
      </a>
      <a id='random' className='menu-item' href='/random'>
        Random
      </a>
      <a id='favorites' className='menu-item' href='/favorites'>
        Favorites
      </a>
      <a id='logout' className='menu-item' href='/' onClick={clearToken}>
        Logout
      </a>
    </Menu>
  );
};

export default HamburgerMenu;
