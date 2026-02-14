
import './Navbar.css';
import logo2 from '../../Images/logo2.png'; 
import { Link } from "react-router-dom";

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light">
                <div className="container-fluid">
                        <Link to="/">
                        <img src ={logo2} className="mainlogo img-fluid" width="100" alt="logo"/>
                        </Link>
                        <ul className="nav nav-underline">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Scholarship">Scholarship</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Preparation">Preparation</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/Blog">Blog</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/About">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link to="/Sign-Up" className="nav-link" target="">Sign Up</Link>
                            </li>
                        </ul>
                </div>
            </nav>
        </div>
        
    );
};
export default Navbar;