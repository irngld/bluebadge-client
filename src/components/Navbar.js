import { Link } from "react-router-dom";

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
          <Link to='/welcome'>Logout</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
