import { Link } from "react-router-dom";
import { clearToken } from './Auth/UserToken';


const Navbar = () => {
  return (
    <div className='navbar'>
      <Link to='/home'>Home</Link>
      <ul>
        <li>
          <Link to='/inventory'>Cabinet</Link>
        </li>
        <li>
          <Link to='/searchdrinks'>Search Drinks</Link>
        </li>
        <li>
          <Link to='/random'>Random</Link>
        </li>
        <li>
          <Link to='/' onClick={clearToken}>Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
