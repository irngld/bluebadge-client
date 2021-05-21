import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className='footer'>
      <ul>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/contact'>Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Footer;
