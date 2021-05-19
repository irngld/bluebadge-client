import { Link } from 'react-router-dom';


const  Navbar = () => {
    return(
        <div className='navbar'>
            <Link to="/">Home</Link>
            <ul>
                <li>
                    <Link to="/inventory">Cabinet</Link>
                </li>
                <li>
                    <Link to="/searchdrinks">Search Drinks</Link>
                </li>
                <li>
                    <Link to="/shop">Shop</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
                </li>
                <li>
                    <Link to="/contact">Contact</Link>
                </li>
            </ul>
        </div>
    )
};

export default Navbar;