import { CiSearch } from "react-icons/ci";
import "../styles/Navbar.css";
import {Link} from "react-router-dom";
import Login from "./Login";
const Navbar = () => {
  return (
    <header>
      <div className="nav-grid">
        <div className="logo">
          <h1>Hamro Project</h1>
        </div>
        <div className="search-bar">
          <input type="text" placeholder="Search..." />
          <CiSearch className="search-icon" />
        </div>
        <nav>
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Men</a></li>
            <li><a href="#">Women</a></li>
            <li><a href="#">Baby Collection</a></li>
            <li className="dropdown-container">
              <a href="#">Pages</a>
              <div className="nav-dropdown">
              <Link to="/login">Login</Link>

                <a href="#">Cart</a>
                <a href="#">Product Details</a>
              </div>
            </li>
            <li><a href="#">Blog</a></li>     
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;